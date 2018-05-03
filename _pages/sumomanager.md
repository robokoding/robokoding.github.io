---
layout: page
title: SumoManager
permalink: "/sumomanager/"
---

<div id="devices"></div>
<button type="button" id="device-scan">Scan USB</button>

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
