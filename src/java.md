# Java


# Android keystore
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

- Support multiple java environments (same line as PyEnv and RbEnv): [jenv](https://www.jenv.be/)
- java_home: remember the command `/usr/libexec/java_home`
- Add a certificate: `$JAVA_HOME/bin/keytool -importcert -file "<filepath.cer>" -cacerts -alias "<alias>" -storepass changeit`
- Delete a certificate: `keytool -delete -alias <alias> -keystore -storepass changeit`
- List certificates: `keytool -list -v -cacerts -storepass changeit`
- [Java Keystore commands](https://www.sslshopper.com/article-most-common-java-keytool-keystore-commands.html)


- Show java properties: `java -XshowSettings:properties -version` 
- Show java settings `java -XshowSettings:all -version`
- Automate the creation of native macOS java apps with installers: [MacJava](https://centerkey.com/mac/java/)