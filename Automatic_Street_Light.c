
void setup()
{
  pinMode(3, INPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  
  Serial.begin(9600);
}

void loop()
{
  int light_sensor = digitalRead(3);
  Serial.println(light_sensor);
  delay(1000);
  
  
  if (light_sensor == 1)
  {
    digitalWrite(6,HIGH);
    digitalWrite(7, LOW);
  }
  
  else
  {
    digitalWrite(6,LOW);
    digitalWrite(7, LOW);
  }
}

