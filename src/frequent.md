# Frequently used

## Git

- Remove local branches not in remote

```
git pull && git fetch --prune && git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D
```

## VSCode

- Select all occurrences of selected text: Cmd + F2

- Auto Indent Code: Shift + Option + F

- Goto recent file: Cmd + P

- Multi-Cursor: Option + Click

- Navigate Backward/Forward: Ctrl + - / Ctrl + Shift + -

- [Others](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

- Rulers: "editor.rulers": [80,120]

- Remove trailing spaces:
    - Code > Settings > Settings > User Settings > search for "files.trimTrailingWhitespace"

- Disable Sticky Scroll:
    - Code > Settings > Settings > Editor > Sticky Scroll (editor.stickyScroll.enabled)


## IntelliJ

- Select all occurences of seldcted text: ⌘⌃G (macOS) / Ctrl+Alt+Shift+J (Windows/Linux)

- Reformat Code: Cmd + Option + L

- Goto Declaration: Cmd + B

- Goto Implementation: Cmd + Option + B

- Search Everywhere: Double Shift

- Navigating Backward and Forward: Cmd + [/]

- How to change line width:
    - Settings > Editor > Code Style > Hard Wrap at
    - Settings > Editor > Code Style > Visual Guides
    - .editorconfig > max_line_length = ..

- Remove trailing spaces:
    - Settings > Editor > General > Strip trailing spaces on Save

- Disable Sticky Scroll
    - Right-click the sticky lines in the editor and click Disable

## macOS

- Update from the Terminal

    `echo '<password>' | sudo softwareupdate -iaR --user <username> --stdinpass && history -p && rm ~/.zsh_history`

- Restart from the Terminal

    `sudo shutdown -r now`

- System info

    `system_profiler SPSoftwareDataType SPHardwareDataType`

## Python [UV](https://github.com/astral-sh/uv)

```
### Install.
$ curl -LsSf https://astral.sh/uv/install.sh | sh
$ uv self update

### Sample
$ uv init example
Initialized project `example` at `/home/user/example`
$ cd example
$ uv add ruff
Creating virtual environment at: .venv
Resolved 2 packages in 170ms
   Built example @ file:///home/user/example
Prepared 2 packages in 627ms
Installed 2 packages in 1ms
 + example==0.1.0 (from file:///home/user/example)
 + ruff==0.5.0
$ uv run ruff check
All checks passed!

### Tools
$ uv tool install ruff
Resolved 1 package in 6ms
Installed 1 package in 2ms
 + ruff==0.5.0
Installed 1 executable: ruff

$ ruff --version
ruff 0.5.0
```

## Old Python dance
```
    python3 -m venv venv
    source venv/bin/activate
    pip3 install -r requirements.txt
    python3 main.py
    deactivate
```

