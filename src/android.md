# Android

- list avds

  `$ANDROID_HOME/emulator/emulator -list-avds`

- start avd

  `$ANDROID_HOME/emulator/emulator -avd <avd-name>`

- app default location

  `./build/outputs/apk/develop/debug/app.apk`
  
- test app default location

  ` ./build/outputs/apk/androidTest/develop/debug/app.apk`

- run single instrumentation test class (-q is for quiet). Classes can be comma-separated

  `./gradlew -q -Pandroid.testInstrumentationRunnerArguments.class=<full classpath>#<test name> <app>:connected<Variant Name>AndroidTest`

- run single instrumentation test (-q is for quiet)

  `./gradlew -q -Pandroid.testInstrumentationRunnerArguments.class=<full classpath> <app>:connected<Variant Name>AndroidTest`

- Alternative method using adb

  `./gradlew install<Variant Name>AndroidTest`

  `adb shell am instrument -w -e class com.example.MyInstrumentationTest#testFoo  com.example.test/android.support.test.runner.AndroidJUnitRunner`

- List dependencies

  `./gradlew app:dependencies`

  For more insights:

  `./gradlew :app:dependencyInsight --configuration compile --dependency <name>`
  
  `./gradlew :app:dependencyInsight --configuration testCompile --dependency <name>`
  
  `./gradlew :app:dependencyInsight --configuration androidTestCompile --dependency <name>`
  
- Run dex files directly on phone

  ```
  javac <file.java>
  java <classname>
  dx –dex –output=<file.dex> <file.class>
  adb push <file.dex> </data/local/tmp>
  adb shell dalvikvm –cp </data/local/tmp><file.dex> <classname>
  ```
  
  
  
  
  
