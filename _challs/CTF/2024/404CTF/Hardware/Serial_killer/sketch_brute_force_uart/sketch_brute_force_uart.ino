int currentBaudRate = 9600;

void setup() {
  Serial.begin(currentBaudRate);
}


void loop() {
  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n');
    if (command.startsWith("CONFIG ")) {
      applySerialConfig(command.substring(7));
    } else {
      Serial.println(command);
    }
  }
}


void applySerialConfig(String config) {
  // Example config: "9600 8N1"
  int firstSpace = config.indexOf(' ');
  long newBaud = config.substring(0, firstSpace).toInt();
  String settings = config.substring(firstSpace + 1);

  if (newBaud != currentBaudRate) {
    currentBaudRate = newBaud;
  }

  Serial.end();
  delay(100);

  if (config == "5N1") Serial.begin(currentBaudRate, SERIAL_5N1);
  else if (config == "6N1") Serial.begin(currentBaudRate, SERIAL_6N1);
  else if (config == "7N1") Serial.begin(currentBaudRate, SERIAL_7N1);
  else if (config == "8N1") Serial.begin(currentBaudRate, SERIAL_8N1);
  else if (config == "5N2") Serial.begin(currentBaudRate, SERIAL_5N2);
  else if (config == "6N2") Serial.begin(currentBaudRate, SERIAL_6N2);
  else if (config == "7N2") Serial.begin(currentBaudRate, SERIAL_7N2);
  else if (config == "8N2") Serial.begin(currentBaudRate, SERIAL_8N2);
  else if (config == "5E1") Serial.begin(currentBaudRate, SERIAL_5E1);
  else if (config == "6E1") Serial.begin(currentBaudRate, SERIAL_6E1);
  else if (config == "7E1") Serial.begin(currentBaudRate, SERIAL_7E1);
  else if (config == "8E1") Serial.begin(currentBaudRate, SERIAL_8E1);
  else if (config == "5E2") Serial.begin(currentBaudRate, SERIAL_5E2);
  else if (config == "6E2") Serial.begin(currentBaudRate, SERIAL_6E2);
  else if (config == "7E2") Serial.begin(currentBaudRate, SERIAL_7E2);
  else if (config == "8E2") Serial.begin(currentBaudRate, SERIAL_8E2);
  else if (config == "5O1") Serial.begin(currentBaudRate, SERIAL_5O1);
  else if (config == "6O1") Serial.begin(currentBaudRate, SERIAL_6O1);
  else if (config == "7O1") Serial.begin(currentBaudRate, SERIAL_7O1);
  else if (config == "8O1") Serial.begin(currentBaudRate, SERIAL_8O1);
  else if (config == "5O2") Serial.begin(currentBaudRate, SERIAL_5O2);
  else if (config == "6O2") Serial.begin(currentBaudRate, SERIAL_6O2);
  else if (config == "7O2") Serial.begin(currentBaudRate, SERIAL_7O2);
  else if (config == "8O2") Serial.begin(currentBaudRate, SERIAL_8O2);
  else Serial.begin(currentBaudRate); // Default to SERIAL_8N1 if no match

  Serial.println("SUCCESS");
}
