---
layout: page
title: SumoManager
permalink: "/sumomanager/"
---

<span>1. Click scan and select the USB device</span>
<br>
<span>2. Enter WiFi network details</span>
<br>
<span>3. Click add WiFi network</span>
<br>

<input type="text" placeholder="No USB device selected" id="device" readonly>
<button style="margin-top: 5px;" type="button" id="device-scan">1. Scan USB</button>
<br>
<br>
<input type="text" placeholder="2. SSID" id="ssid">
<input type="password" placeholder="2. Password" id="password">
<button style="margin-top: 5px;" type="button" id="add-wifi-button">3. Add WiFi network</button>

<script>
  let button = document.getElementById('device-scan');
  button.addEventListener('click', async () => {
    navigator.usb.requestDevice({ filters: [{ vendorId: 0x10C4 }] }).then(selectedDevice => {
         device = selectedDevice;
         return device.open(); // Begin a session.
       })
      .then(() => device.selectConfiguration(1)) // Select configuration #1 for the device.
      .then(() => device.claimInterface(2)) // Request exclusive control over interface #2.
      .then(() => device.controlTransferOut({
          requestType: 'class',
          recipient: 'interface',
          request: 0x22,
          value: 0x01,
          index: 0x02})) // Ready to receive data
      .then(() => device.transferIn(5, 64)) // Waiting for 64 bytes of data from endpoint #5.
      .then(result => {
        let decoder = new TextDecoder();
        console.log('Received: ' + decoder.decode(result.data));
      })
      .catch(error => { console.log(error); });
  });
</script>
