# Xcode

- Xcode command line uploader (e.g. for Log4j) - possibly outdated

  `xcrun iTMSTransporter`

- Accept Xcode license

  `sudo xcodebuild -license accept`

- [xcodes](https://github.com/XcodesOrg/xcodes) to download multiple xcode versions

- Install Xcode and runtimes
```
unxip --version || brew install unxip
unxip Xcode_15.1.xip
sudo mv -f ./Xcode.app /Applications/Xcode_15.1.app
sudo xcode-select -s /Applications/Xcode_15.1.app
sudo xcodebuild -license accept
sudo xcrun simctl runtime add "./iOS_17.4_Simulator_Runtime.dmg"

```
