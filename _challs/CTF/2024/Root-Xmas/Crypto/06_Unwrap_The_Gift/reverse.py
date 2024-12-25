from Crypto.Util.Padding import pad

P_known = pad(b"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", 16)
C_known = bytearray.fromhex("b190b1bfb0d32bf82103eaf5ff442606b47f558ee4d72c137934f136fac01e65df7337529882153e3af81a2cebf79335add9e905bcb9f75f18032d44fb4c8d3e")

C_flag = bytearray.fromhex("a29c8bbac1dc3ee637109fe4e15c2812a7615386e3c23e0d6f44e43fe4d66c65d56d3541809300303ceb1a3de2efe85cc0c6f61aa3a6e840071c325be4539221")

print(f"{P_known}: {len(P_known)}, {C_known}: {len(C_known)}")

IV = bytes([a ^ b for a, b in list(zip(P_known, C_known))])

print(IV)

P_flag = bytes([a ^ b for a, b in list(zip(C_flag, IV))])

print(P_flag)
