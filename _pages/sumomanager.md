---
layout: page
title: SumoManager
permalink: "/sumomanager/"
---

<select id="devices"></select>
<br>
<input type="text" placeholder="SSID" id="ssid">
<input type="password" placeholder="Password" id="password">
<br>
<button type="button" id="device-scan">Scan USB</button>
<button type="button" id="addWifiButton">Add wifi network</button>

<script>
  let button = document.getElementById('device-scan');
  button.addEventListener('click', async () => {
    let device;
    try {
      device = await navigator.usb.requestDevice({ filters: [{
          vendorId: 0x10C4
      }]});
    } catch (err) {
      // No device was selected.
      return;
    }

    if (device !== undefined) {
      document.getElementById('devices').innerHTML = JSON.stringify(device);
    }
  });
</script>
