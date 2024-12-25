import serial
import time

data = b'\x16\xc1\x91\x6d\x87\x15\xcc\x76\xf5\x55\x3b\xd9\x97\xd5\xdb\x27\x51\xb6\x54\x5d\x53\x5f\x53\x35\x1b\x39\x5f\x50\x7c\x19\x55\x49\xd7\xd5\x5f\x39\x59\x97\xd5\x8d\x16\xc9\xd7\x6d\x99\x7d\x51\xb3\xbc\xef\x06\x58\xd6\x64\xef\x17\x59\x95\xf7'
def send_serial_config(baud_rate, config):
    ser = serial.Serial('/dev/cu.usbmodem1401', baud_rate, timeout=1)
    time.sleep(2)
    print("\n[*] Setting configuration...")
    ser.write((f"CONFIG {baud_rate} {config}\n").encode('utf-8'))

    while True:
        time.sleep(.1)
        if ser.in_waiting > 0:
            try:
                response = ser.readline().decode().strip()
            except UnicodeDecodeError:
                response = "Failed to decode response"
            if ("SUCCESS" not in response):
                print(f"[!] Failed to set configuration {config}")
                ser.close()
                return
            break

    print("[*] Sending data...")
    ser.write(data + b'\n')
    while True:
        time.sleep(.1)
        if ser.in_waiting > 0:
            response = ser.readline()
            try:
                response = response.decode().strip()
            except UnicodeDecodeError:
                response = bytes(response)
            print(f"[*] Response({baud_rate} {config}): {response}")
            break

    ser.close()


def main():
    baud_rates = [9600, 19200, 38400, 57600, 115200]
    configs = [
        "5N1", "6N1", "7N1", "8N1",
        "5N2", "6N2", "7N2", "8N2",
        "5E1", "6E1", "7E1", "8E1",
        "5E2", "6E2", "7E2", "8E2",
        "5O1", "6O1", "7O1", "8O1",
        "5O2", "6O2", "7O2", "8O2"
    ]
    # for baud_rate in baud_rates:
    for config in configs:
        send_serial_config(9600, config)


if __name__ == "__main__":
    main()
