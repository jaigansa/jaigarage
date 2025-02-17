+++
date = '2025-01-15T10:39:51+05:30'
draft = false
title = 'Mobile Screencast'
featured_image = "images/thumbnails/mobile-screencast.webp"
+++

## Screen cast android to obs media source

### rtmp method

> Install rtmp app to phone 
1. [PRISM Live Studio](https://play.google.com/store/apps/details?id=com.prism.live&pcampaignid=web_share)

2. [Larix](https://play.google.com/store/apps/details?id=com.wmspanel.larix_screencaster&pcampaignid=web_share)




#### serve screen the rtmp 

> system-ip-address:port `192.168.0.100:1935`

> key  `streamkey`



#### NGINX 

```bash
sudo apt-get update && sudo apt-get install nginx libnginx-mod-rtmp vlc
sudo nano /etc/nginx/nginx.conf
```

```bash
rtmp {
        server {
                listen 1935;
                chunk_size 4096;

                application live {
                        live on;
                        record off;
                }
        }
}

```
```bash
sudo nginx -t && sudo systemctl restart nginx
nmap -sT localhost

```

#### ffmpeg reserve rtmp

```bash
ffmpeg -f flv -listen 1 -i rtmp://<system-ip-address:port>/live/<key> -c copy -f flv -listen 1 rtmp://<localhost:1935>/live/<key>
```

#### obs source input

> media source

> Input `rtmp://localhost:1935/live/streamkey`

> Input Format `rtmp`


## IP Camera to obs media source

> find camera ip address

`namp -sn routerip/subnet`

### ccplus rtsp ip

> media source

> Input `rtsp://username:password@192.168.0.50:554/camrealmonitor?channel=1&subtype=0`

> Input Format `rtsp`