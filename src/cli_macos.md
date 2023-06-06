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

   ```bash
   sudo xcode-select -s /Applications/Xcode_13.2.1.app
   sudo rm -rf /Library/Developer/CommandLineTools
   sudo xcode-select --install
   softwareupdate --all --install --force
   ```

   Note: this leaves the popup open in the GUI...

7. Create a build agent like those on Github

   https://github.com/actions/virtual-environments/issues/1783
   https://github.com/actions/virtual-environments/blob/main/images/macos/templates/macOS-12.json


8. Check which process is listening to which port

   ```bash
   sudo lsof -i -P | grep LISTEN | grep :$PORT
   ```

9. Follow the end of a log (e.g. mongo)

   ```bash
   tail -f /opt/homebrew/var/log/mongodb/mongo.log
   ```

10. access the keychain from cli. In the command $USER refer to the current user keychain [source](https://medium.com/@johnjjung/how-to-store-sensitive-environment-variables-on-macos-76bd5ba464f6)

   ```bash
   # store environment variable
   security add-generic-password -a "$USER" -s 'name_of_your_key' -w 'passphrase'
   # retrieve key to environment variable
   security find-generic-password -a "$USER" -s 'name_of_your_key' -w
   # store it locally
   NAME_OF_YOUR_KEY=$(security find-generic-password -a "$USER" -s "name_of_your_key" -w)
   # or
   NAME_OF_YOUR_KEY=`security find-generic-password -a "$USER" -s 'name_of_your_key' -w`
   ```

11. Debug startup time in the terminal
   
      Write all steps in the file `trace`
      ```bash
      PS4='+%D{%s.%9.}:%N:%i>' zsh -c -i -x exit > trace 2>&1
      ```

      Make times differential
      ```bash
      <trace awk -F: '{printf "+%.09f", $1 - t; t=$1; $1=""; print}'
      ```
