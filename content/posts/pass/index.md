+++
title = "Pass"
date = 2025-03-13
draft = false
author = "jaiganesh"
tags = ["cli","linux"]
featured_image = "images/thumbnails/pass.webp"
summary = "password manager"
+++

## Introduction

password manager cli

## Install
```bash
sudo apt install pass
```

## config

```bash
gpg --full-gen-key
# copy key

gpg --list-keys --keyid-format LONG

# copy pub key  rsa3072/

```

## use in pass

```bash
# init
pass init "paste pub key"

# password store
pass insert folder/title
# insert password 

#show password 
pass 

# list of title gpg files choose gpg phrase enter view the password 

```

## git and github

```bash

# git

pass git init

# github first time

pass git remote add orgin " "

```

## pass multiline password
``` pass insert -m ```

## Our Format multiline
```
username:
password:
url:


```

## gpg backup important

To back up your private key, you can export it to a file. This is a sensitive operation, so make sure the backup is securely stored, such as on an encrypted USB drive or a secure cloud storage.

Command to export the private key:

```bash
gpg --list-secret-keys
gpg --export-secret-keys --armor YOUR_KEY_ID > private-key-backup.asc
```

While your public key is not sensitive, it’s a good practice to back it up as well, especially if you plan to share it with others or need it for verification.

Command to export the public key:

```bash
gpg --export --armor YOUR_KEY_ID > public-key-backup.asc

```


## gpg import backup

```
gpg --import private-key-backup.asc
```
