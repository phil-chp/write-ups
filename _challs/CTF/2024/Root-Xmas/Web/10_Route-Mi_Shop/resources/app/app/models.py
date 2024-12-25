from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    can_use_coupon = db.Column(db.Boolean, default=True)
    balance = db.Column(db.Float, default=0.0)
    coupons = db.relationship('Coupon', backref='user', lazy=True)

    def set_password(self, password):
        self.password_hash = password

    def check_password(self, password):
        return self.password_hash == password

    def __str__(self):
        return f"{self.id} - {self.email} - {self.balance} - {self.can_use_coupon} - {self.coupons} - {self.password_hash}"

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)

    def __str__(self):
        return f"{self.id} - {self.name} - {self.price}"

class Coupon(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(36), unique=True, nullable=False, default=lambda: str(uuid4()))
    used = db.Column(db.Boolean, default=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    def __str__(self):
        return f"{self.id} - {self.code} - {self.used} - {self.user_id}"
