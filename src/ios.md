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
