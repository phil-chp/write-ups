from enum import Enum
from functools import wraps
from flask import Flask, abort, redirect, render_template, request, session
from contextlib import contextmanager
import logging
import sys
import os
import psycopg2
from psycopg2.extensions import cursor

app = Flask(__name__)
app.logger.setLevel(logging.DEBUG)
app.secret_key = "super_secret_key"

FIRST_FLAG = os.environ.get("FIRST_FLAG", "FCSC{placeholder_flag}")
SECOND_FLAG = os.environ.get("SECOND_FLAG", "FCSC{placeholder_flag}")

class Rank(Enum):
    GUEST = 0
    ADMIN = 1
    SUPER_ADMIN = 2
    HYPER_ADMIN = 3
    TURBO_ADMIN = 4
    FLAG = 5

    @classmethod
    def from_session(cls):
        try:
            return cls(session["rank"])
        except:
            return cls(0)

    def __lt__(self, other):
        return self.value < other.value

def init_db():
    conn = psycopg2.connect(
        database="postgres",
        host="welcome-admin-db",
        user="postgres",
        password="postgres",
        port="5432",
    )

    cursor = conn.cursor()
    cursor.execute("SELECT 1 FROM pg_catalog.pg_user WHERE usename = 'ctf'")
    row = cursor.fetchone()
    if row:
        return
    cursor.execute(
        """
        CREATE USER ctf WITH PASSWORD 'ctf';
        REVOKE ALL ON SCHEMA public FROM ctf;
        CREATE SCHEMA ctf;
        GRANT ALL ON SCHEMA ctf TO ctf;
        ALTER USER ctf SET search_path TO ctf;
        """,
    )
    conn.commit()
    conn.close()

@contextmanager
def ctf_cursor():
    conn = psycopg2.connect(
        database="postgres",
        host="welcome-admin-db",
        user="ctf",
        password="ctf",
        port="5432",
    )
    try:
        yield conn.cursor()
    finally:
        conn.rollback()
        conn.close()

def login_for(require_rank: Rank, next_rank: Rank, goto: str, default_msg=""):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            msg = default_msg
            current_rank = Rank.from_session()
            print(current_rank, require_rank)
            if current_rank < require_rank:
                return "You are not allowed to access this page"

            if request.method == "POST":
                password = request.form.get("password", "")
                if ";" in password:
                    return abort(400)
                with ctf_cursor() as cursor:
                    is_success = func(cursor, password)
                    if is_success:
                        session["rank"] = next_rank.value
                        return redirect(goto)
                    else:
                        msg = "Invalid password"
            return render_template(
                "login.html", rank=current_rank, next_rank=next_rank, msg=msg
            )

        return wrapper

    return decorator

@app.route("/", methods=["GET", "POST"])
@login_for(Rank.GUEST, Rank.ADMIN, "/admin")
def level1(cursor: cursor, password: str):
    token = os.urandom(16).hex()
    cursor.execute(f"SELECT '{token}' = '{password}'")
    row = cursor.fetchone()
    if not row:
        return False
    if len(row) != 1:
        return False
    return bool(row[0])

@app.route("/admin", methods=["GET", "POST"])
@login_for(Rank.ADMIN, Rank.SUPER_ADMIN, "/super-admin", FIRST_FLAG)
def level2(cursor: cursor, password: str):
    token = os.urandom(16).hex()
    cursor.execute(
        f"""
            CREATE FUNCTION check_password(_password text) RETURNS text
            AS $$
                BEGIN
                    IF _password = '{token}' THEN
                        RETURN _password;
                    END IF;
                    RETURN 'nope';
                END;
            $$
            IMMUTABLE LANGUAGE plpgsql;
        """
    )
    print(f"SELECT  check_password('{password}')")
    cursor.execute(f"SELECT  check_password('{password}')")
    row = cursor.fetchone()
    if not row:
        return False
    if len(row) != 1:
        return False
    return row[0] == token

@app.route("/super-admin", methods=["GET", "POST"])
@login_for(Rank.SUPER_ADMIN, Rank.HYPER_ADMIN, "/hyper-admin")
def level3(cursor: cursor, password: str):
    token = os.urandom(16).hex()
    cursor.execute(f"SELECT '{token}', '{password}';")
    row = cursor.fetchone()
    if not row:
        return False
    if len(row) != 2:
        return False
    return row[1] == token

@app.route("/hyper-admin", methods=["GET", "POST"])
@login_for(Rank.HYPER_ADMIN, Rank.TURBO_ADMIN, "/turbo-admin")
def level4(cursor: cursor, password: str):
    cursor.execute(f"""SELECT md5(random()::text), '{password}';""")
    row = cursor.fetchone()
    if not row:
        return False
    if len(row) != 2:
        return False
    return row[0] == row[1]

@app.route("/turbo-admin", methods=["GET", "POST"])
@login_for(Rank.TURBO_ADMIN, Rank.FLAG, "/flag")
def level5(cursor: cursor, password: str):
    table_name = "table_" + os.urandom(16).hex()
    col_name = "col_" + os.urandom(16).hex()
    token = os.urandom(16).hex()

    cursor.execute(
        f"""
        CREATE TABLE "{table_name}" (
          id serial PRIMARY KEY,
          "{col_name}" text
        );

        INSERT INTO "{table_name}"("{col_name}") VALUES ('{token}');
        """
    )
    cursor.execute(f"SELECT '{password}';")
    row = cursor.fetchone()
    print(row)
    if not row:
        return False
    if len(row) != 1:
        return False
    return row[0] == token

@app.route("/flag")
def flag():
    current_rank = Rank.from_session()
    if current_rank < Rank.FLAG:
        return "You are not allowed to access this page"
    return f"Congratulations! The flag is: {SECOND_FLAG}"

if __name__ == "__main__":
    init_db()
    app.run(debug = True, host = "0.0.0.0", port = 8000)
