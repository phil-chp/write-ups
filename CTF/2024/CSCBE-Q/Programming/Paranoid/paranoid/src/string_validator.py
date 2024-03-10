import logging
import time


class StringValidator:
    CHAR_CHECK_DURATION_SECONDS = 0.25

    def __init__(self, valid_password: str):
        self.VALID_PASSWORD = valid_password

    @staticmethod
    def char_cmp(char1: str, char2: str) -> int:
        if ord(char1) == ord(char2):
            return 0
        return -1 if ord(char1) < ord(char2) else 1

    def check_string(self, guess: str) -> int:

        if guess is None:
            return 1

        guess = guess.encode(encoding="ascii", errors="ignore").decode(
            encoding="ascii", errors="ignore"
        )
        logging.info(
            f"Checking '{self.VALID_PASSWORD}' (real) against '{guess}' (guess)"
        )

        if guess == self.VALID_PASSWORD:
            time.sleep(self.CHAR_CHECK_DURATION_SECONDS * (len(guess) + 1))
            return 0

        min_length = min(len(guess), len(self.VALID_PASSWORD))
        guess_clipped = guess[:min_length]
        password_clipped = self.VALID_PASSWORD[:min_length]

        if guess_clipped == password_clipped:
            time.sleep(self.CHAR_CHECK_DURATION_SECONDS * (min_length + 1))

            if len(guess) > len(self.VALID_PASSWORD):
                return -1

            else:
                return 1

        i = 0
        while i < min_length and password_clipped[i] == guess_clipped[i]:
            i += 1
        time.sleep(self.CHAR_CHECK_DURATION_SECONDS * (i + 1))
        return self.char_cmp(password_clipped[i], guess_clipped[i])
