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

# Managing iOS Simulators
(from [here](https://gist.github.com/patriknyblad/be3678bf6b515f11b602051530b5ac3e))

### List all simulators created
```
$ xcrun simctl list --json
```

### Delete old and unavailable simulators
```
$ xcrun simctl delete unavailable
```

### Open Simulator.app
```
$ open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/
```

### Boot specific simulators
You can find the id/name by listing all simulators `$ xcrun simctl list`.
```
$ xcrun simctl boot AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEE // UUID Hex string
$ xcrun simctl boot "iPhone XS Max" // Name of simulator
```

### Create a simulator with a specific name
You can name simulators and use them for specific purposes.
```
$ xcrun simctl create iPhone7-my-app com.apple.CoreSimulator.SimDeviceType.iPhone-8 com.apple.CoreSimulator.SimRuntime.iOS-10–3
```

### Shutdown Simulator
```
$ xcrun simctl shutdown booted
$ xcrun simctl shutdown AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEE
$ xcrun simctl shutdown "iPhone7-my-app"
$ xcrun simctl shutdown "iPhone XS"
$ xcrun simctl shutdown all
```

### Erase contents in Simulator
Similar to running a factory restore on your device
```
$ xcrun simctl erase AAAAAAAA-BBBB-CCCC-DDDD-EEEEEEEEEE
$ xcrun simctl erase "iPhone7-my-app"
$ xcrun simctl erase "iPhone XS"
$ xcrun simctl erase all
```

### Add media to simulator
```
$ xcrun simctl addmedia booted ./video_01.mp4
$ xcrun simctl addmedia "iPhone XS" ./video_01.mp4
```

# Working with apps

### Install App
```
$ xcrun simctl install booted "./path/to/ios-app.app"
$ xcrun simctl install "iPhone XS Max" "./path/to/ios-app.app"
```

### Uninstall App
```
$ xcrun simctl uninstall booted com.mycompany.myapp
$ xcrun simctl uninstall "iPhone XS Max" com.mycompany.myapp
```

### Launch app
```
$ xcrun simctl launch booted com.mycompany.myapp
$ xcrun simctl launch "iPhone XS Max" com.mycompany.myapp
```

### Terminate app
```
$ xcrun simctl terminate booted com.mycompany.myapp
$ xcrun simctl terminate "iPhone XS Max" com.mycompany.myapp
```

### Open URL
Can also be used to open an app, if you open the app using a url the first time it will give you an alert asking if you want to navigate to that app.
```
$ xcrun simctl openurl booted https://google.com
$ xcrun simctl openurl "iPhone XS Max" https://google.com

$ xcrun simctl openurl booted myapp://
$ xcrun simctl openurl "iPhone XS Max" myapp://
```

### Record simulator video
```
$ xcrun simctl io booted recordVideo — type=mp4 ./simulator-record_001.mp4
$ xcrun simctl io "iPhone XS Max" recordVideo — type=mp4 ./simulator-record_001.mp4
```

### Screenshot simulator
```
$ xcrun simctl io booted screenshot ./simulator-screenshot_001.png
$ xcrun simctl io "iPhone XS Max" screenshot ./simulator-screenshot_001.png
```

### More help provided using help command
```
$ xcrun simctl help
```

# Example scripts

### Run an app on many simulators
I created and use this script for running the app I am developing in all possible screen sizes at once to verify that everything looks and works as intended.
```
#!/bin/bash

# List of simulators: `$ xcrun simctl list`
SIMULATORS=("iPhone SE" "iPhone 8" "iPhone 8 Plus" "iPhone XS" "iPhone XS Max" "iPhone XR")

# Comment or remove variables to skip a step
APP_PATH="/path/to/my/build/directory/when/running/a/build/in/xcode/app.app"
APP_IDENTIFIER="com.mycompany.myapp" # Identifier from info.plist
OPEN_URL="myapp://some/page/in/app" # Deep linking

echo "Running on ${#SIMULATORS[*]} simulators."
for index in ${!SIMULATORS[*]}
do
    SIMULATOR=${SIMULATORS[$index]}
    echo "Booting ${SIMULATOR}..."
    xcrun simctl boot "${SIMULATOR}"

    if [ ! -z "$APP_PATH" ]
    then
        echo "${SIMULATOR} installing: ${APP_PATH##*/}"
        xcrun simctl install "${SIMULATOR}" "${APP_PATH}"
    fi

    if [ ! -z "$APP_IDENTIFIER" ]
    then
        echo "${SIMULATOR} opening app: ${APP_IDENTIFIER}"
        xcrun simctl launch "${SIMULATOR}" "${APP_IDENTIFIER}"
    fi

    if [ ! -z "$OPEN_URL" ]
    then
        echo "${SIMULATOR} opening url: ${OPEN_URL}"
        xcrun simctl openurl "${SIMULATOR}" "${OPEN_URL}"
    fi

done
```

###### References:
* https://medium.com/@ankitkumargupta/ios-simulator-command-line-tricks-ee58054d30f4
* https://medium.com/xcblog/simctl-control-ios-simulators-from-command-line-78b9006a20dc
* https://nshipster.com/simctl/
* https://www.linuxjournal.com/content/bash-arrays