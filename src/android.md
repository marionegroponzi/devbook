# Android

- How to list the avds available on the computer

  `$ANDROID_HOME/emulator/emulator -list-avds`

- How to start an avd

  `$ANDROID_HOME/emulator/emulator -avd <avd-name>`

- What is the default location of the develop app built for Android in gradle

  `./build/outputs/apk/develop/debug/app.apk`
  
- What is the default location of the test app (using Espresso)

  ` ./build/outputs/apk/androidTest/develop/debug/app.apk`

- How to run single instrumentation test class (-q is for quiet). For multiple classes, they can be comma-separated

  `./gradlew -q -Pandroid.testInstrumentationRunnerArguments.class=<full classpath>#<test name> <app>:connected<Variant Name>AndroidTest`

- How to run a single instrumentation test (-q is for quiet)

  `./gradlew -q -Pandroid.testInstrumentationRunnerArguments.class=<full classpath> <app>:connected<Variant Name>AndroidTest`

- How to run an instrumented test using adb

  `./gradlew install<Variant Name>AndroidTest`

  `adb shell am instrument -w -e class com.example.MyInstrumentationTest#testFoo  com.example.test/android.support.test.runner.AndroidJUnitRunner`

- How to list all dependencies for an app

  `./gradlew app:dependencies`

  For more insights:

  `./gradlew :app:dependencyInsight --configuration compile --dependency <name>`
  
  `./gradlew :app:dependencyInsight --configuration testCompile --dependency <name>`
  
  `./gradlew :app:dependencyInsight --configuration androidTestCompile --dependency <name>`
  
- How to compile and run a dex file directly on an Android phone

  ```
  javac <file.java>
  java <classname>
  dx –dex –output=<file.dex> <file.class>
  adb push <file.dex> </data/local/tmp>
  adb shell dalvikvm –cp </data/local/tmp><file.dex> <classname>
  ```
  
  
  
  
  
