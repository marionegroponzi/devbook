# Java

The **keystore** format has changed around Java 8.0.3xx
(check value of JAVA_HOME)

Using an older version of Java one gets an error
```
[old_java]/bin/keytool -list -v -keystore "$HOME/.android/debug.keystore" 
    -alias androiddebugkey -storepass android -keypass android
```
Using an newer version of Java everything works
```
[new_java]/bin/keytool -list -v -keystore "$HOME/.android/debug.keystore" 
    -alias androiddebugkey -storepass android -keypass android
```