+++
title = "Hugo Cli"
date = 2025-02-14
draft = false
author = "jaiganesh"
tags = ["config"]
featured_image = "images/thumbnails/hugo-cli.webp"
summary = ""
+++

# Enable Hugo Auto-Completion in Bash

If you want auto-completion for Hugo commands in the terminal (CLI), you can enable shell completion for Bash. Hugo provides built-in auto-completion scripts.

## **1. Generate and Apply Auto-Completion Script**

Run the following command to generate the Hugo auto-completion script and apply it to your current session:

```bash
hugo completion bash | tee /etc/bash_completion.d/hugo
source /etc/bash_completion.d/hugo
```

If you don’t have root permissions, save it in your home directory instead:

```bash
hugo completion bash > ~/.hugo_completion.sh
echo "source ~/.hugo_completion.sh" >> ~/.bashrc
source ~/.bashrc
```

## **2. Test Auto-Completion**

Once this is enabled, you can type `hugo` followed by pressing `Tab` to see available subcommands:

```bash
hugo [TAB][TAB]
```

This should suggest Hugo commands like `new`, `server`, `config`, etc.

## **3. Verify Auto-Completion**

To check if auto-completion is working correctly, restart your terminal and try:

```bash
hugo server[TAB]
```

If completion does not work, ensure that Bash completion is installed:

```bash
sudo apt install bash-completion  # Debian/Ubuntu
sudo yum install bash-completion  # RHEL/CentOS
brew install bash-completion      # macOS
```

After installation, reload your shell:

```bash
exec bash
```

Now, Hugo auto-completion should work seamlessly in your terminal. 🚀

