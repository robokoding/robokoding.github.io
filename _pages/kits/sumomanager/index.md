---
layout: page
title: SumoManager
permalink: "/kits/sumorobot/sumomanager/"
---

## Download SumoManager
Choose your operating system

<a href="https://github.com/robokoding/sumomanager-desktop/releases/download/v0.6.1/SumoManager.deb" class="icon alt fa-linux"></a>
<a href="https://github.com/robokoding/sumomanager-desktop/releases/download/v0.6.1/SumoManager.dmg" class="icon alt fa-apple"></a>
<a href="https://github.com/robokoding/sumomanager-desktop/releases/download/v0.6.1/SumoManager.exe" class="icon alt fa-windows"></a>

## Download Driver
Additionally on Windows and MAC OS you will need a driver software so your computer  
can successfully communicate with the SumoRobot.

<a href="https://wiki.wemos.cc/_media/ch341ser_mac-1.4.zip" class="icon alt fa-apple"></a>
<a href="https://wiki.wemos.cc/_media/file:ch341ser_win.zip" class="icon alt fa-windows"></a>

## Connecting the SumoRobot
Once you have your SumoRobot assembled you will need to upload it's software  
(SumoFirmware) on it. This can be done with the SumoManager, you can download it above.  
Once you launch the SumoManager you will see that it asks you to connect your SumoRobot  
with your computer using a micro USB cable. Once your SumoRobot is connected the  
SumoManager will try to load the WiFi networks the SumoRobot sees around him. This will  
fail as there is no SumoFirmware on the SumoRobot yet.  
![sumomanager](/assets/img/sumomanager_connecting.png)

## Updating SumoFirmware
SumoFirmware is the code that runs on the SumoRobots. Once the SumoRobot is connected you  
can upload the newest SumoFirmware on the SumoRobot. From the application menu choose  
**File > Update SumoFirmware**. Then wait until the SumoFirmware downloads and gets  
uploaded to the SumoRobot. Once the SumoFirmware is uploaded successfully the SumoManager  
tries to reload the WiFi networks.  
![sumomanager](/assets/img/sumomanager_update_firmware.png)

## Adding a WiFi network
Finally you can add your Wifi network to your SumoRobot, so it can remember it and  
automatically connect to it once you turn the SumoRobot on. Select the network  
name from the list and enter the network password in the field below. Finally click  
on the **Add WiFi network** button. You can also add more networks, so you can use it  
in several locations.  
![sumomanager](/assets/img/sumomanager_add_wifi.png)
