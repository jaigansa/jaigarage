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
