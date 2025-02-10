+++
title = "Browsers"
date = 2025-02-10
draft = false
author = "jaiganesh"
tags = ["linux"]
featured_image = "images/google-chrome.webp"
summary = ""
+++

## Introduction

main use is chrome but like firefox

## Google Chrome

[Get Chrome](https://www.google.com/intl/en_in/chrome/)

## Firefox

## Install Firefox .deb on Debian-based Systems

Install Firefox using the APT repository:

```bash
# Create APT key directory
sudo install -d -m 0755 /etc/apt/keyrings

# Import Mozilla signing key
wget -q https://packages.mozilla.org/apt/repo-signing-key.gpg -O- | sudo tee /etc/apt/keyrings/packages.mozilla.org.asc > /dev/null

# Verify fingerprint (should be 35BAA0B33E9EB396F59CA838C0BA5CE6DC6315A3)
gpg -n -q --import --import-options import-show /etc/apt/keyrings/packages.mozilla.org.asc | awk '/pub/{getline; gsub(/^ +| +$/,""); if($0 == "35BAA0B33E9EB396F59CA838C0BA5CE6DC6315A3") print "\nKey matches: "$0"\n"; else print "\nVerification failed: "$0"\n"}'

# Add Mozilla APT repository
echo "deb [signed-by=/etc/apt/keyrings/packages.mozilla.org.asc] https://packages.mozilla.org/apt mozilla main" | sudo tee /etc/apt/sources.list.d/mozilla.list > /dev/null

# Set repository priority
echo 'Package: *\nPin: origin packages.mozilla.org\nPin-Priority: 1000' | sudo tee /etc/apt/preferences.d/mozilla

# Update & install Firefox
sudo apt-get update && sudo apt-get install firefox
```
