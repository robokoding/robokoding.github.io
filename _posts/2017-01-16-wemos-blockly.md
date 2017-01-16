---
title: "Google Blockly on WEMOS"
date: 2017-01-16
---

Using the [PlatformIO](http://platformio.org/) it's easy to program any [ESP8266](http://www.esp8266.com/) based platform and upload files to it's on board SPI flash memory. When your platform has 4MB SPI flash memory you can also use over the air programming, which is very comfortable. Without configuring anything [Google Blockly](https://developers.google.com/blockly/) fits without all the media files on the [WEMOS D1 mini pro](https://www.wemos.cc/product/d1-mini-pro.html) SPI flash memory and can be served from it. When using no compression while compiling [Google Blockly](https://developers.google.com/blockly/), the essential files will be around 800KB. Check out the [WEMOS code and](https://github.com/robokoding/sumorobot-wemos) the [Blockly for sumorobots](https://github.com/robokoding/blockly).

<figure>
  <img src="/assets/images/wemos-blockly.jpg" alt="sumorobots">
  <figcaption>Google Blockly served from the WEMOS D1 mini pro</figcaption>
</figure>
