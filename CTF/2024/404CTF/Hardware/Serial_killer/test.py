data = bytes.fromhex("16c1916d8715cc76f5553bd997d5db2751b6545d535f53351b395f507c195549d7d55f395997d58d16c9d76d997d51b3bcef0658d664ef175995f7")

# Function to rotate bits in each byte
def rotate_bits(byte):
    return ((byte << 1) | (byte >> 7)) & 0xff

# Rotate bits in each byte and try to decode
rotated_data = bytes(rotate_bits(byte) for byte in data)
try:
    print("Rotated data:", rotated_data.decode('ascii'))
except UnicodeDecodeError:
    print("Failed to decode rotated data as ASCII.")

# If rotation does not work, check for flag structure or further analysis
if "404" in rotated_data.decode('ascii', errors='ignore') or "CTF" in rotated_data.decode('ascii', errors='ignore'):
    print("Flag found in rotated data!")
else:
    print("Flag not found, consider other manipulations.")
