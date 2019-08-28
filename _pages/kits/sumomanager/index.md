---
layout: page
title: SumoManager
permalink: "/kits/sumorobot/sumomanager/"
---

## Download SumoManager
Choose your operating system

<a href="https://github.com/robokoding/sumorobot-manager/releases/latest/download/SumoManager.deb" class="icon alt fa-linux"></a>
<a href="https://github.com/robokoding/sumorobot-manager/releases/latest/download/SumoManager.dmg" class="icon alt fa-apple"></a>
<a href="https://github.com/robokoding/sumorobot-manager/releases/latest/download/SumoManager.exe" class="icon alt fa-windows"></a>

## Download Driver
Additionally on Windows and MAC OS you will need a driver software so your computer  
can successfully communicate with the SumoRobot.

<a href="https://wiki.wemos.cc/_media/ch341ser_mac-1.4.zip" class="icon alt fa-apple"></a>
<a href="https://wiki.wemos.cc/_media/file:ch341ser_win.zip" class="icon alt fa-windows"></a>

## Add permissions
Additionally on Linux you need to add user permissions to communicate with the robot. Use the following line in the terminal, just type it in, press enter, enter the root password and press enter again. Then log out and in again or try a reboot.
```bash
sudo adduser $(whoami) dialout
```

## Connecting the SumoRobot
Once you have your SumoRobot assembled you will need to upload it's software  
(SumoFirmware) on it. This can be done with the SumoManager, you can download it above.  
Once you launch the SumoManager you will see that it asks you to connect your SumoRobot  
with your computer using a micro USB cable.  
![sumomanager](/assets/img/sumomanager_connecting.png)

## Updating SumoFirmware
SumoFirmware is the code that runs on the SumoRobots. Once the SumoRobot is connected you  
can upload the newest SumoFirmware on the SumoRobot. Click **Update SumoFirmware**,  
then wait until the SumoFirmware downloads and gets uploaded to the SumoRobot. Once the  
SumoFirmware is uploaded successfully the SumoRobot can be connected to the browser.  
![sumomanager](/assets/img/sumomanager_update_firmware.png)

## Debugging problems

In case you are facing some problems with the SumoRobot you can contact [letstalk@robokoding.com](#)
In case you are interested to debug problems yourself you can head over to [GitHub](https://github.com/robokoding) to find all the design files and software.
