---
layout: page
title: SumoManager
permalink: "/sumomanager/"
---

<span>1. Click scan and select the USB device</span>
<br>
<span>2. Enter WiFi network details</span>
<br>
<span>3. Press add wifi network</span>
<br>

<input type="text" placehonder="Select USB device" id="device" readonly>
<br>
<input type="text" placeholder="SSID" id="ssid">
<input type="password" placeholder="Password" id="password">
<br>
<button type="button" id="device-scan">Scan USB</button>
<button type="button" id="add-wifi-button">Add WiFi network</button>

<script>
  let button = document.getElementById('device-scan');
  button.addEventListener('click', async () => {
    navigator.usb.requestDevice({ filters: [{ vendorId: 0x2341 }] }).then(selectedDevice => {
      document.getElementById('device').value = selectedDevice.productName;
    });
  });
</script>
