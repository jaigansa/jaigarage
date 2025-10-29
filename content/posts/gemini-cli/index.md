---
title: "Gemini-CLI Setup in Linux"
date: 2024-10-29T11:00:00+00:00
draft: false
---

## Introduction

This guide will walk you through setting up the Gemini CLI on a Linux system. The Gemini CLI is a powerful tool for interacting with Google's Gemini models from your command line.

## Installation

1.  **Download the binary:** Download the appropriate binary for your Linux distribution from the official Gemini releases page.

2.  **Make it executable:**
    ```bash
    chmod +x gemini-cli-linux
    ```

3.  **Move to a directory in your PATH:**
    ```bash
    sudo mv gemini-cli-linux /usr/local/bin/gemini
    ```

## Configuration

1.  **Get your API key:** Obtain your API key from Google AI Studio.

2.  **Set the API key as an environment variable:**
    ```bash
    export GEMINI_API_KEY="YOUR_API_KEY"
    ```
    You can add this line to your `~/.bashrc` or `~/.zshrc` file to make it permanent.

## Basic Usage

1.  **Check the version:**
    ```bash
    gemini --version
    ```

2.  **Run a prompt:**
    ```bash
    gemini "Hello, world!"
    ```

3.  **Use with pipes:**
    ```bash
    cat my_code.py | gemini "Explain this code"
    ```
