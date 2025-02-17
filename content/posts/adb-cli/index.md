+++
date = '2025-01-15T11:37:51+05:30'
draft = false
title = 'Adb CLI'
tags = ['config']
featured_image = "adb-cli.png"
summary = "images/thumbnails/adb connection setup"
+++



# abd connect  cli

## Install adb

> [ADB PLATFROM TOOLS](https://developer.android.com/tools/releases/platform-tools)

> [linux adb latest](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)


## debian install 

```bash 
sudo apt intall adb
```

## Direct usb connect to wifi

- plugin devices must

```bash
adb kill-server
adb devices
adb tcpip 5555
adb connect <device_ip_address>:5555
```


## wifi via connect devices


```bash
adb kill-server 
adb pair <device_ip_address>:<device_port> 
adb connect <device_ip_address>:<device_port> 
adb devices
``` 





> Related Video

