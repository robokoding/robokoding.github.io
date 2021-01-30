---
layout: page
title: SumoInterface
permalink: "/kits/sumorobot/sumointerface/"
---

The link to the SumoInterface: [sumo.robokoding.com](http://sumo.robokoding.com).  
The link to the source code of the SumoInterface: [https://github.com/robokoding/sumorobot-interface](https://github.com/robokoding/sumorobot-interface).

## Setup

The SumoInterface works best on chrome or chromium as it uses Web Bluetooth which is still not fully supported across browsers. You might have to enable the bluetooth feature manually by going to [chrome://flags#enable-experimental-web-platform-features](chrome://flags#enable-experimental-web-platform-features) and [chrome://flags#enable-web-authentication-ble-support](chrome://flags#enable-web-authentication-ble-support). Finally restart your browser.

## Control panel

The control panel of the SumoInterface is where you can connect your SumoRobot with your browser. Turn on your SumoRobot and hit GO! it should pop up a window with bluetooth device that it found. You should be able to see a device called SumoRobot. Select the device and click Pair.

[![control_panel](/assets/img/sumorobot_interface_control_panel.png)](https://sumo.robokoding.com)

## Blockly interface

![battery_disconnected](/assets/img/sumorobot/sumointerface/battery_disconnected.png)
![battery_empty_charging](/assets/img/sumorobot/sumointerface/battery_empty_charging.png)
![battery_half](/assets/img/sumorobot/sumointerface/battery_half.png)
![battery_full_charging](/assets/img/sumorobot/sumointerface/battery_full_charging.png)  
Once the SumoInterface is connected to the SumoRobot you can see the battery icon (up right corner) red, orange or green. This shows the battery charge status of your SumoRobot. Red means that the battery is pretty empty and it should be charged as soon as possible. Your SumoRobot can randomly reset at times when it has low battery. When your SumoRobot is not connected or disconnects from the SumoInterface the battery icon will be with a red cross. Then you can try to reset your SumoRobot by pressing the RESET button underneath the SumoRobot next to he micro USB port. The lightning icon works on SumoBoard v0.4.0 and higher and indicates if the micro USB cable is connected to the SumoRobot to charge the battery.

To program your SumoRobot move available blocks from the left toolbox (gray) to the right workspace (white) (see on the image below). You can delete code by dragging it to the trash bin or to the the left toolbox (gray). You can also observe the MicroPython code on the right that is created using the blocks. Once **Start** is pressed the MicroPython code on the right gets executed and the block highlight (bright) starts to work (see on the image below). The highlight shows how the SumoRobot is executing the code that you have made. The code is executed from top to bottom.

![if_do](/assets/img/sumorobot/sumointerface/if_do.png)  
The if_do command block is used to make conditions with opponent and/or line. This allows you to execute commands when a certain condition is true. For example when the SumoRobot sees something in front of it or it sees a line under it.
The first condition (if) has the highest priority, the SumoRobot checks all conditions from top to bottom. If they are true it executes the commands that are in the slot of that condition (see image below). When no condition is true the commands in the else slot are executed. Add more conditions by clicking the "cog" like icon on the block and trag an else_if slot is between the if and else block in the small popup.

![move](/assets/img/sumorobot/sumointerface/move.png)  
The move command block is used to move the SumoRobot in different directions. It usually is used in combination with the wait (orange) block.

![wait](/assets/img/sumorobot/sumointerface/sleep.png)  
The wait cmmand block is used to wait before executing the next command. It is usually used in combination with the move (red) blocks to program a sequence of movements. The wait command makes the SumoRobot wait until it moves on to the next direction / command.

![sonar](/assets/img/sumorobot/sumointerface/opponent.png)  
The sonar logic block is used for the frontal distance sensor to detect other SumoRobots or objects in front of the SumoRobot. Use it together with the if_do (green) block. Notice also the blue LED on the SumoRobot reacting to your hand in front of it.

![line](/assets/img/sumorobot/sumointerface/line.png)  
The line logic block is used for the 2 line sensors below the SumoRobot, left and right. Use it together with the if_do (green) block. Notice also the yellow LEDs on the SumoRobot reacting when you lift or place the SumoRobot on the ground.

![servo](/assets/img/sumorobot/sumointerface/servo.png)  
The servo command block is used to move the SumoRobots left or right servo with different speeds. First select the left or right servo and then add the speed from -100 to 100. The number specifies the speed and direction. It usually is used in combination with the sleep (orange) block.

![led](/assets/img/sumorobot/sumointerface/led.png)  
The led command block is used to turn ON or OFF the SumoRobot LEDs. Choose the LED you want to turn ON or OFF. Try using it together with the if_do (green) block or the sleep (orange).

![sonar_distance](/assets/img/sumorobot/sumointerface/opponent_distance.png)  
The sonar with distance logic block is used for defining a distance the SumoRobot can detect object in front of it. You can choose numbers between 1 - 200. Use it together with the if_do (green) block. Notice also the blue LED on the SumoRobot reacting to your hand in front of it. Keep in mind that the distance the SumoRobots blue LED reacts to objects is fixed to a different value. This can be changed in the calibration panel (see below).

## Hotkeys

Hold the Alt key in combination with different keys to enable different feature in the interface:
* alt + p = MicroPython mode (see further below)
* alt + t = to open the calibration panel, change the SumoRobot name, calibrate the sensors and motors (see below)
* alt + arrow keys = to move the SumoRobot around
* alt + c = show control panel (to change the connected SumoRobot)
* alt + f = disable or enable the LED feedback loop on the SumoRobot (allows to use LEDs in your code)

## Calibration panel

In this panel you can change your SumoRobot name. Just change the name anything you like and hit DONE. Also remember to restart the SumoRobot to see the new name in the Bluetooth window when you press GO!.

Some SumoRobots motors are different and they need to be calibrated so the SumoRobot can move properly. If you see some issues with the SumoRobot moving in any direction then use these sliders to figure out the fastest speeds for both motors in both direction. When you start adjusting the values, see how the motors behave, the smaller valuues on the left should be make the motors go the fastest possible to one direction and the bigger values on the right to the other direction. When all seems good, click DONE.

For line calibration place the SumoRobot on the white surface of the SumoField (can be also black, if the field is inverted colors). Then press alt + t, the SumoRobot will read the current brightness of the surface and remember it. It will use that value to differenciate that to other values it observes over time. In case it sees something trastically different, it will recognize that as the line and switch on the yellow LED (check both, left and right sensor). Furthermore the threshold value can be adjusted if the black colored line is not trastically different from the white part of the SumoField. When pressing alt + t in the additional popup the threshold can be adjusted. Lower the value, let go of the slider and see if the SumoRobot starts to recognize the line by checking the yellow LED (check both, left and right sensor). Be sure that the SumoRobot sees the line around the whole SumoField by dragging it around (check both, left and right sensor). Once that is done, the DONE can be pressed in the popup. Finally you have managed to calibrate the line sensors, great job!

![control_panel](/assets/img/sumorobot_interface_blockly.png)

## MicroPython interface

Press alt + p for entering the MicroPython mode. Here you can program the SumoRobot with using MicroPython code, a minified version of Python3. So you can import libraries, use variables, classes, definitions like usual to Python. The functions that are specific to the SumoRobot are explained below.

**sumorobot.move(LEFT)**  
This will move the SumoRobot to different directions, use LEFT, RIGHT, FORWARD, BACKWARD or SEARCH. SEARCH is a function that helps to find the other SumoRobot during the SumoMatch. It will rotate the SumoRobot for a while and then make it drive a bit forward. Try it out!

**sumorobot.sleep(1000)**  
This will make the SumoRobot move in a direction for a certain time in case used together with multiple moves and waits. Use wait after each move. Then also adjust the delay value which is in milliseconds, a 1000 milliseconds is 1 second.

**sumorobot.is_sonar()**  
This will return if the SumoRobot sees something in front of it or not. It is mainly used to detect the other opponent SumoRobot on the SumoField, but it can be used also to see any other objects in front of the SumoRobot. The SumoRobot is set by default to see 40cm. Use this in combination with a if, else clause and move command.

**sumorobot.is_line(LEFT)**  
This will return if the SumoRobot sees a line under the LEFT or RIGHT sensor. Therefore you can use LEFT or RIGHT with this command. Use it together with a if, else clause and a move command.

**sumorobot.set_servo(LEFT, 100)**  
This will set the speed for a single servo motor. Use LEFT or RIGHT and values between -100 to 100. The negative values are for one direction and the positive values for the opposite direction.

**sumorobot.set_led(STATUS, False)**  
This will set the states of STATUS, LEFT_LINE, RIGHT_LINE and OPPONENT LEDs. Use False or True. Currently the LEFT_LINE, RIGHT_LINE and OPPONENT LED will be overwritten by the feedback code, that shows if the SumoRobot sees a line or opponent.

**sumorobot.get_sonar_value()**  
This will return the distance value of the distance sensor, that is in front of the SumoRobot, in centimeters. Use this to see objects even futher away or react to objects that are closer to the SumoRobot. Use it in a if, else clause to compare it with different values. The returned value will be 0 to 200.

**sumorobot.get_line(LEFT)**  
This will return the brightness value from the line sensors, will be a value between 0 to 4096. Use it in a if, else clause to compare it with different values, it might be possible to detect different colors.

**sumorobot.get_battery_level()**  
This will return the battery voltage of the SumoRobot, it will be a value between 3.0 to 4.2. Use it in a if, else clause to compare it with different values, to detect how empty or full the battery is. This can be used for charging indication or other purposes.

![control_panel](/assets/img/sumorobot_python_code.png)

## Debugging problems

In case you are facing some problems with the SumoRobot you can contact [letstalk@robokoding.com](#)
In case you are interested to debug problems yourself you can head over to [GitHub](https://github.com/robokoding) to find all the design files and software.
