# Android

- list avds

  `$ANDROID_HOME/emulator/emulator -list-avds`

- start avd

  `$ANDROID_HOME/emulator/emulator -avd <avd-name>`

- app default location

  `./build/outputs/apk/develop/debug/app.apk`
  
- test app deafault location

  ` ./build/outputs/apk/androidTest/develop/debug/app.apk`

- run single instrumentation test class (-q is for quiet)

  `./gradlew -q -Pandroid.testInstrumentationRunnerArguments.class=<full classpath>#<test name> <app>:connected<Variant Name>AndroidTest`

- run single instrumentation test (-q is for quiet)

  `./gradlew -q -Pandroid.testInstrumentationRunnerArguments.class=<full classpath> <app>:connected<Variant Name>AndroidTest`

