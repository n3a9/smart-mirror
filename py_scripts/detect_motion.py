import time
from gpiozero import MotionSensor

pir = MotionSensor(4)

while 1==1:
    if pir.motion_detected:
        print("motion detected")
        time.sleep(3)
