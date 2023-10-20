# iOS

- Start simulator  
  `open -a Simulator.app`

- Simulate location in Simulator  
  `xcrun simctl location {booted_device.udid} start --speed 10 {lat},{lng} {lat},{lng} {lat},{lng} ...`   
  Note that `{booted_device.udid}` can be replaced by `booted`

- List simulators
  `xcrun simclt list`

- Select Xcode
  `sudo xcode-select -s /Applications/<Xcode version>`

- Run stuff as if on x86
  `arch -x86_64 <cmd>`

- Run stuff forcing arm (when within a x86 app)
  `arch -arm64 <cmd>`

- Generic xcodebuild command
  `env NSUnbufferedIO=YES xcodebuild -workspace <workspace filename> -scheme <scheme name> -derivedDataPath ./DerivedData -destination 'platform=iOS Simulator,name=iPhone SE (3rd generation),arch=x86_64' -resultBundlePath './output/result.xcresult' OTHER_SWIFT_FLAGS=<other flags> build test`  
  Note the arch parameter in the destination if you want to force running with Rosetta2