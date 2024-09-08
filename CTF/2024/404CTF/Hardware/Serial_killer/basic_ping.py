import serial
import time

def init_serial_connection(port, baud_rate):
    try:
        ser = serial.Serial(port, baud_rate, timeout=10)
        print("Serial port opened successfully.")
        time.sleep(2)
        return ser
    except serial.SerialException as e:
        print(f"Error opening serial port: {e}")
        return None


def send_and_receive(ser, message):
    if ser:
        try:
            ser.write((message + '\n').encode('utf-8'))
            print(f"Sent: {message}")

            while True:
                time.sleep(0.1)
                if ser.in_waiting > 0:
                    response = ser.readline().decode().strip()
                    print(f"Received: {response}")
                    break
        except Exception as e:
            print(f"Failed to send or receive data: {e}")
        finally:
            ser.close()
            print("Serial port closed.")


def main():
    port = '/dev/cu.usbmodem1401'
    ser = init_serial_connection(port, 9600)
    send_and_receive(ser, "Ping")

if __name__ == "__main__":
    main()
