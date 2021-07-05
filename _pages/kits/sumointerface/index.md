---
layout: page
title: SumoInterface
permalink: "/kits/sumorobot/sumointerface/"
---

The link to the SumoInterface: [sumo.robokoding.com](http://sumo.robokoding.com).  
The link to the source code of the SumoInterface: [https://github.com/robokoding/sumorobot-interface](https://github.com/robokoding/sumorobot-interface).

## Setup

The SumoInterface works only in chrome or chromium as it uses Web Bluetooth and Web Serial which are not supported on other browsers. You might have to enable the bluetooth feature manually by going to [chrome://flags#enable-experimental-web-platform-features](chrome://flags#enable-experimental-web-platform-features) and [chrome://flags#enable-web-authentication-ble-support](chrome://flags#enable-web-authentication-ble-support). Finally relaunch / restart your browser.

## Control panel

The control panel is the first screen you will encounter when opening the SumoInterface. Here you can update your SumoFirmware and start coding your SumoRobot. After assemling your SumoRobot you have to update the SumoFirmware. For updating you need to connect your SumoRobot via an USB calbe and on Mac OS & Windows you need to install the [driver](https://www.robokoding.com/kits/sumorobot/sumomanager). When the updating in browser does not work, please use the [SumoManager](https://www.robokoding.com/kits/sumorobot/sumomanager). After updating the SumoFirmware successfully you should see the yellow and blue LEDs light up when you move the SumoRobot. Then go back to the control panel and hit Start, it should pop up a window with bluetooth device that it found. You should be able to see a device called SumoRobot. Select the device and click Pair.

[![control_panel](/assets/img/sumorobot/sumointerface/control_panel.png)](https://sumo.robokoding.com)

## Blockly interface

![battery_disconnected](/assets/img/sumorobot/sumointerface/battery_disconnected.png)
![battery_empty_charging](/assets/img/sumorobot/sumointerface/battery_empty_charging.png)
![battery_half](/assets/img/sumorobot/sumointerface/battery_half.png)
![battery_full_charging](/assets/img/sumorobot/sumointerface/battery_full_charging.png)  
Once the SumoInterface is connected to the SumoRobot you can see the battery icon (up right corner) red, orange or green. This shows the battery charge status of your SumoRobot. Red means that the battery is pretty empty and it should be charged as soon as possible. Your SumoRobot can randomly reset at times when it has low battery. When your SumoRobot disconnects from the SumoInterface you should end up in the control panel. The lightning icon works on SumoBoard v0.4.0 and higher and indicates if the micro USB cable is connected to the SumoRobot to charge the battery (will still be visible even when the battery is fully charged).

To program your SumoRobot move available blocks from the left toolbox (gray) to the right workspace (white) (see on the image below). You can delete code by dragging it to the trash bin or to the the left toolbox (gray). You can also observe the MicroPython code on the right that is created from the blocks. Once **Start** is pressed the MicroPython code on the right is sent to the SumoRobot and starts to execute. The code is executed from top to bottom. If you want continous execution, use the repeat loops (see below).

![repeat_forever](/assets/img/sumorobot/sumointerface/repeat_forever.png)
The repeat forever command block implements the most simple loop. It will just execute the code that is placed inside it forever. The only way to terminate this loop is by clicking the **Stop** button on the bottom of the SumoInterface.

![repeat_while](/assets/img/sumorobot/sumointerface/repeat_while.png)
The repeat while & until command block implements a logic loop that can be combined with sensor values: line or sonar. If you choose while, it will keep executing the commands inside the loop while the condition is met: robot sees a line or sees something in front of it (depends which logic sensor block you used).  If you choose until, then the loop runs until the condition is not met. Again you can use the line or sonar and the loop should finish once there is a line or there is a object in front of the robot.

![if_do](/assets/img/sumorobot/sumointerface/if_do.png)  
The if do command block is used to make conditions with opponent and/or line. This allows you to execute commands when a certain condition is true. For example when the SumoRobot sees something in front of it or it sees a line under it.
The first condition (if) has the highest priority, the SumoRobot checks all conditions from top to bottom. If they are true it executes the commands that are in the slot of that condition (see image below). When no condition is true the commands in the else slot are executed. Add more conditions by clicking the "cog" like icon on the block and trag an else_if slot is between the if and else block in the small popup.

![sonar](/assets/img/sumorobot/sumointerface/sonar.png)  
The sonar logic block is used for the frontal distance sensor to detect other SumoRobots or objects in front of the SumoRobot. Use it together with the if do command (green). Notice also the blue LED on the SumoRobot reacting if you place your hand in front of your SumoRobot. NB: This block is only in the workshop interface.

![sonar_distance](/assets/img/sumorobot/sumointerface/sonar_distance.png)  
The sonar with distance logic block is used for defining a distance the SumoRobot can detect object in front of it. You can choose numbers between 1 - 200. Use it together with the if_do (green) block. Notice also the blue LED on the SumoRobot reacting to your hand in front of it. Keep in mind that the distance the SumoRobots blue LED reacts to objects is fixed to a different value. This can be changed in the calibration panel (see below).

![line](/assets/img/sumorobot/sumointerface/line.png)  
The line logic block is used for the 2 line sensors below the SumoRobot, left and right. Use it together with the if do (green) command. Notice also the yellow LEDs on the SumoRobot reacting when you lift or place the SumoRobot on the ground.

![move](/assets/img/sumorobot/sumointerface/move.png)  
The move command block is used to move the SumoRobot in different directions. Search is a special direction that is used in combination with a loop and if. It is very practical during a SumoRobot match, when the robots might not see each other in some cases, the search option will help the robots to find each other. The search will rotate the robot for a while and if it didn't see anything, it will drive a moment forward and rotate again. The move command is usually used in combination with the if do command, but can also be used with simple sleep command (orange).

![sleep](/assets/img/sumorobot/sumointerface/sleep.png)  
The sleep command block is used to wait before executing the next command. Also note that if a move command was executed before the sleep command, then the SumoRobot will continue moving in that direction. It is usually used in combination with the move (red) command to program a sequence of movements. The sleep command makes the SumoRobot wait until it moves on to the next direction / command.

![servo](/assets/img/sumorobot/sumointerface/servo.png)  
The servo command block is used to move the SumoRobots left or right servo with different speeds. First select the left or right servo and then add the speed from -100 to 100. The number specifies the speed (roughly in percentage) and direction (positive for forward, negative for backward). It usually is used in combination with the sleep command (orange).

![led](/assets/img/sumorobot/sumointerface/led.png)  
The led command block is used to turn ON or OFF the SumoRobot LEDs. Choose the LED you want to turn ON or OFF. Try using it together with the if do command (green) or the sleep command (orange).

## Hotkeys

Hold the Alt key in combination with different keys to enable different feature in the interface:
* alt + p = MicroPython mode (see further below)
* alt + t = to open the SumoConfig panel, change the SumoRobot name, calibrate the sensors and motors (see below)
* alt + arrow keys = to move the SumoRobot using the arrow keys
* alt + c = show control panel (to change the connected SumoRobot or update SumoFirmware)
* alt + f = disable or enable the LED feedback loop on the SumoRobot (allows to use LEDs in your code)

## Calibration panel

In this panel you can change your SumoRobot name. Just change the name to anything you like, it will show up next then when you try to connect to the SumoRobot.

Adjusting the Sonar is normally not necessary, but the threshold at which the sonar LED reacts, can be adjusted.

For line calibration place the SumoRobot on the white surface of the SumoField (can be also black, if the field is inverted colors). The SumoRobot will read the current brightness of the surface and remember it (this happens when you hit save). It will use that value to differenciate that to other values it observes over time. In case it sees something trastically different, it will recognize that as the line and switch on the yellow LED (check both, left and right sensor). Furthermore the threshold value can be adjusted if the black colored line is not trastically different from the white part of the SumoField (usually only on bright daylight outdoors). In case there are problems in some parts of the SumoField to recognize the line or it recognizes a line in the middle of the field, try adjusting the threshold value. Once adjusted, the value will be immediately sent to the SumoRobot and you can test if the issue persists. Make sure that the SumoRobot sees the line around the whole SumoField by dragging it around (check both, left and right sensor).

All the SumoRobots motors are slightly different and they can be calibrated so the SumoRobot can move more straight. If you see some issues with the SumoRobot moving in any direction then try calibrating the motors. When you start adjusting the values, see how the motors behave. The idea is to find the minimum and maximum speeds for both directions. When all seems good, click save, which will send the configuration to the SumoRobot and it will save it permanently.

![control_panel](/assets/img/sumorobot/sumointerface/blockly_coding.png)

## MicroPython interface

Press alt + p for entering the MicroPython mode. Here you can program the SumoRobot with using MicroPython code, a minified version of Python3. So you can import libraries, use variables, classes, definitions like usual to Python. To see all the features, classes and function visit the [MicroPython documentation page](https://docs.micropython.org/en/latest/esp32/quickref.html). The functions that are specific to the SumoRobot are explained below.

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

![control_panel](/assets/img/sumorobot/sumointerface/python_coding.png)

## Workshops

If you are planning to run a workshop using the SumoRobot platform, feel free to reach out to us for support letscode@robokoding.com Otherwise you can find the SumoInterface specificly for workshops here: [sumo.robokoding.com/workshop.html](https://sumo.robokoding.com/workshop.html) The interface is a limited version of the main SumoInterface to make it easier to navigate, as the workshops are usually limited to 90 minutes. The blocks are just enough to be able to perform at the SumoRobot competition. When preparing for the workshop, you can find the SumoRobot Blockly workshop slide deck [here](https://docs.google.com/presentation/d/1yOvRuZkmQG5vrYQIEvmpLXrxCw1R0N2aCSqZG6mZ3lQ) and Python workshop slide deck [here](https://docs.google.com/presentation/d/1Z2925ajG0nQ-A3-UEwYfQIlXQEZcUzUSZD8aXmTaE-E). Feel free to copy and modify and adjust it to your workshop needs. We would greatly appreciate if you mention us @robokoding on social media when you post images and videos.

## Debugging problems

In case you are facing some problems with the SumoRobot you can contact [letstalk@robokoding.com](#)
In case you are interested to debug problems yourself you can head over to [GitHub](https://github.com/robokoding) to find all the design files and software.
