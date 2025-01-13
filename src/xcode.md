# Xcode

- Xcode command line uploader (e.g. for Log4j) - possibly outdated

  `xcrun iTMSTransporter`

- [xcodes](https://github.com/XcodesOrg/xcodes) to download multiple xcode versions

- Install Xcode and runtimes
```
unxip --version || brew install unxip
unxip Xcode_15.1.xip
sudo mv -f ./Xcode.app /Applications/Xcode_15.1.app
sudo xcode-select -s /Applications/Xcode_15.1.app
sudo xcodebuild -license accept
sudo /Applications/${{ xcode.Value.targetFileName }}/Contents/Developer/usr/bin/xcodebuild -runFirstLaunch
xcodebuild -downloadPlatform iOS

```

- Kill all Simulator instances: `killall Simulator`
