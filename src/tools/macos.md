# macOS

1. restart from terminal
   
   ```
   sudo shutdown -r now
   ```

2. sudo with no password
   
   ```
   sudo visudo
   ...
   <username> ALL=(ALL) NOPASSWD:ALL
   ```

   If one wants to just increase the time before re-entering the sudo password, add

   ```
   Defaults    timestamp_timeout=3
   ```

3. update command line tools

   ```
   sudo xcode-select -s /Applications/Xcode_13.2.1.app
   sudo rm -rf /Library/Developer/CommandLineTools
   sudo xcode-select --install
   softwareupdate --all --install --force
   ```

   Note: this leaves the popup open in the GUI...

4. Create a build agent like those on Github

   https://github.com/actions/virtual-environments/issues/1783
   https://github.com/actions/virtual-environments/blob/main/images/macos/templates/macOS-12.json

