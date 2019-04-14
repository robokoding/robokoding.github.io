---
layout: page
title: SumoInterface
permalink: "/kits/sumorobot/sumointerface/"
---

Access the SumoRobot Programming Interface [here](http://sumo.robokoding.com).  
The source code of the SumoRobot Programming Interface lies [here](https://github.com/silbo/silbo.github.io).

## Control panel

Below is how the control panel looks like for the SumoInterface. Here you can add our SumoRobot ID that you can find in the SumoManager app when you connect your SumoRobot with the micro USB cable. It is a 8 character unique identifier for your SumoRobot. Once having entered the SumoRobot ID press GO! or hit the enter key on the keyboard. To come back to the control panel or close it, you can use the keyboard combination Alt + C.

![control_panel](/assets/img/sumorobot_interface_control_panel.png)

## Blockly interface

![battery_disconnected](/assets/img/sumorobot/sumointerface/battery_disconnected.png)
![battery_empty_charging](/assets/img/sumorobot/sumointerface/battery_empty_charging.png)
![battery_half](/assets/img/sumorobot/sumointerface/battery_half.png)
![battery_full_charging](/assets/img/sumorobot/sumointerface/battery_full_charging.png)  
Once the SumoInterface is connected to the SumoRobot you can see the battery icon (up right corner) red, orange or green. This shows the battery charge status of your SumoRobot. Red means that the battery is pretty empty and it should be charged as soon as possible. Your SumoRobot can randomly reset at times when it has low battery. When your SumoRobot is not connected or disconnects from the SumoInterface the battery icon will be with a red cross. Then you can try to reset your SumoRobot by pressing the RESET button underneath the SumoRobot next to he micro USB port. The lightning icon works on SumoBoard v0.4.0 and higher and indicates if the micro USB cable is connected to the SumoRobot to charge the battery.

To program your SumoRobot move available blocks from the left toolbox (gray) to the right workspace (white) (see on the image below). You can delete code by dragging it to the trash bin or to the the left toolbox (gray). You can also observe the Python code on the right that is created using the blocks. Once **Start** is pressed the Python code on the right gets uploaded to the SumoRobot and the block highlight (bright) and Python code highlight (yellow) starts to work (see on the image below). The highlight shows how the SumoRobot is executing the code that you have made. The code is executed in a loop (unlimited times) from top to bottom.

![if_do](/assets/img/sumorobot/sumointerface/if_do.png)  
The if_do control block is used to make conditions with opponent and/or line. This allows you to execute commands when a certain condition is true. For example when the robot sees something in front of it or it sees a line under it.
The first condition (if) has the highest priority, the SumoRobot checks all conditions from top to bottom. If they are true it executes the commands that are in the slot of that condition (see image below). When no condition is true the commands in the else slot are executed. Add more conditions by clicking the "cog" like icon on the block and trag an else_if slot is between the if and else block in the small popup.

![move](/assets/img/sumorobot/sumointerface/move.png)  
The move control block is used to move the robot in different directions. Use it in combination with the sleep (orange) block.

![sleep](/assets/img/sumorobot/sumointerface/sleep.png)  
The sleep control block is used to add sleep into the program. It is usually used in combination with the move (red) blocks to program a sequence of movements. The sleep command makes the robot wait until it moves on to the next direction / instruction.

![opponent](/assets/img/sumorobot/sumointerface/opponent.png)  
The opponent logic block is used for the frontal ditance sensor to detect other "opponent" robots or objects in front of the SumoRobot. Use it together with the if_do (green) block. Notice also the blue LED on the robot reacting to your hand in front of it.

![line](/assets/img/sumorobot/sumointerface/line.png)  
The line logic block is used for the 2 line sensors below the robot, left and right. Use it together with the if_do (green) block. Notice also the yellow LEDs on the robot reacting when you lift or place the robot on the ground.

## Hotkeys

Hold the Alt key in combination with different keys to enable different feature in the interface:
* alt + p = MicroPython mode (see further below)
* alt + l = Livestream mode (this feature we use for live programming sessions)
* alt + t = to calibrate the line sensors (see below)
* alt + arrow keys = to drive the SumoRobot around
* alt + c = show control panel (to change or see the name of the connected SumoRobot)
* alt + u = fetches the last uploaded code from the SumoRobot (in case multiple users are programming one robot)
* alt + o = disable or enable the loop execution of the code in the SumoRobot (your program will only execute once)
* alt + f = disable or enable the LED feedback loop on the SumoRobot (allows to use LEDs in MicroPython mode)

## Line calibration

For line calibration place the robot on the white surface of the SumoField (can be also black, if the field is inverted colors). Then press alt + t, the robot will read the current brightness of the surface and remember it. It will use that value to differenciate that to other values it observes over time. In case it sees something trastically different, it will recognize that as the line and switch on the yellow LED (check both, left and right sensor). Furthermore the threshold value can be adjusted if the black colored line is not trastically different from the white part of the SumoField. When pressing alt + t in the additional popup the threshold can be adjusted. Lower the value, let go of the slider and see if the SumoRobot starts to recognize the line by checking the yellow LED (check both, left and right sensor). Be sure that the SumoRobot sees the line around the whole SumoField by dragging it around (check both, left and right sensor). Once that is done, the DONE can be pressed in the popup. Finally you have managed to calibrate the line sensors, great job!

![control_panel](/assets/img/sumorobot_interface_blockly.png)

## MicroPython interface

Press alt + p for entering the MicroPython mode. Here you can program the SumoRobot with using MicroPython code, a minified version of Python3. So you can import libraries, use variables, classes, definitions like usual to Python. The functions that are specific to the SumoRobot are explained below.

**sumorobot.move(LEFT)**  
This will move the robot to different directions, use LEFT, RIGHT, FORWARD, BACKWARD or SEARCH. SEARCH is a function that helps to find the other robot during the SumoMatch. It will rotate the robot for a while and then make it drive a bit forward. Try it out!

**sumorobot.sleep(1000)**  
This will make the robot move in a direction for a certain time in case used together with multiple moves and sleeps. Use sleep after each move. Then also adjust the delay value which is in milliseconds, a 1000 milliseconds is 1 second.

**sumorobot.is_opponent()**  
This will return if the SumoRobot sees something in front of it or not. It is mainly used to detect the other opponent SumoRobot on the SumoField, but it can be used also to see any other objects in front of the SumoRobot. The SumoRobot is set by default to see 40cm. Use this in combination with a if, else clause and move command.

**sumorobot.is_line(LEFT)**  
This will return if the SumoRobot sees a line under the LEFT or RIGHT sensor. Therefore you can use LEFT or RIGHT with this command. Use it together with a if, else cluase and a move command.

**sumorobot.set_servo(LEFT, 100)**  
This will set the speed for a single servo motor. Use LEFT or RIGHT and values between -100 to 100. The negative values are for one direction and the positive values for the opposite direction.

**sumorobot.set_led(STATUS, False)**  
This will set the states of STAUTS, LEFT_LINE, RIGHT_LINE and OPPONENT LEDs. Use False or True. Currently the LEFT_LINE, RIGHT_LINE and OPPONENT LED will be overwritten by the feedback code, that shows if the SumoRobot sees a line or opponent.

**sumorobot.get_opponent_distance()**  
This will return the distance value of the ultrasonic sensor that is in front of the robot in centimeters. Use this to see objects even futher away or react to objects that are closer to the SumoRobot. Use it in a if, else clause to compare it with different values. The returned value will be 0 to 200.

**sumorobot.get_line(LEFT)**  
This will return the brightness value from the line sensors, will be a value between 0 to 4096. Use it in a if, else caluse to compare it with different values, it might be possible to detect different colors.

**sumorobot.get_battery_voltage(LEFT)**  
This will return the battery voltage of the SumoRobot, it will be a value between 3.0 to 4.2. Use it in a if, else caluse to compare it with different values, to detect how empty or full the battery is. This can be used for charging indication or other purposes.

**sumorobot.calibrate_line_value()**  
This will set the line value to the current one the robot is seeing with both sensors. So it's best to place the robot to the white area of the SumoField or on a surface where it should not recognize a line.

**sumorobot.calibrate_line_threshold(1000)**  
This will set the threshold for the line sensors, meaning how big the brightness difference is between the white area and line. Change the value between 5 - 1000, it might be able to detect different colors.

![control_panel](/assets/img/sumorobot_python_code.png)

## Debugging problems

In case you are facing some problems with the SumoRobot you can contact [letstalk@robokoding.com](#)
In case you are interested to debug problems yourself you can head over to [GitHub](https://github.com/robokoding) to find all the design files and software.
