from math import ceil, log
from string import ascii_letters, digits
from random import choice

from string_validator import StringValidator

# MonkeyBrain 🐒🧠

class OTPManager:

    ACTIVE_OTP_TRIES = dict()
    ACTIVE_OTP_CODES = dict()
    OTP_LENGTH = 6
    OTP_MAX_TRIES = ceil(log(128, 2)) * OTP_LENGTH + 8 # 50

    @staticmethod
    def generate_otp() -> str:
        ALPHABET = ascii_letters + digits # abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
        otp = "".join(choice(ALPHABET) for _ in range(OTPManager.OTP_LENGTH))
        return otp

    def enable_otp(self, guid: str):

        if guid is None or guid == "":
            return

        self.ACTIVE_OTP_TRIES[guid] = self.OTP_MAX_TRIES
        self.ACTIVE_OTP_CODES[guid] = self.generate_otp()

    def update_otp_counter(self, guid: str):
        self.ACTIVE_OTP_TRIES[guid] -= 1
        if self.ACTIVE_OTP_TRIES[guid] == 0:
            self.ACTIVE_OTP_TRIES.pop(guid)

    def check_otp(self, guess: str, guid: str) -> int:

        if guess is None or guid is None:
            return 1
        print(self.ACTIVE_OTP_CODES[guid])

        result = StringValidator(self.ACTIVE_OTP_CODES[guid]).check_string(guess)

        if not self.check_otp_active(guid):
            self.ACTIVE_OTP_CODES.pop(guid)
        return result

    def check_otp_active(self, guid: str) -> bool:
        return guid in self.ACTIVE_OTP_TRIES
