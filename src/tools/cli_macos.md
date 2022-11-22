# macOS CLI

1. How to get the CPU name
   ```
   sysctl -a | grep machdep.cpu.brand_string
   ```

2. Collection #1: https://switowski.com/blog/favorite-cli-tools
3. Collection #2: from [here](https://twitter.com/amilajack/status/1479328649820000256?s=27)
    1. `bat` is `cat` with syntax highlighting and line numbers
    2. diff-so-fancy shows best-looking diffs you'll ever see
    3. fx is the best JSON viewer you'll ever use
    4. fzf is an insanely fast fuzzy search written in @golang
    5. exa is `ls` but with coloring
    6. duff shows a better du summary
    7. htop is a modern `top` replacement
    8. hexyl is a beautiful hex viewer
    9. @fig is next-gen autocompletion

4. restart from terminal
   
   ```
   sudo shutdown -r now
   ```

5. sudo with no password
   
   ```
   sudo visudo
   ...
   <username> ALL=(ALL) NOPASSWD:ALL
   ```

   If one wants to just increase the time before re-entering the sudo password, add

   ```
   Defaults    timestamp_timeout=3
   ```

6. update command line tools

   ```
   sudo xcode-select -s /Applications/Xcode_13.2.1.app
   sudo rm -rf /Library/Developer/CommandLineTools
   sudo xcode-select --install
   softwareupdate --all --install --force
   ```

   Note: this leaves the popup open in the GUI...

7. Create a build agent like those on Github

   https://github.com/actions/virtual-environments/issues/1783
   https://github.com/actions/virtual-environments/blob/main/images/macos/templates/macOS-12.json
