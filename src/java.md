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

## Jenv
Easy setup multiple environments, like pyenv for Python or rbenv for Ruby.
It does not install Java on its own. but one can use `jenv add <java_home>` to add an existing one.

## java_home
Remember `/usr/libeexec/java_home`


## Jshell
Jshell could be used as REPL
Jshell can be picky with the environment and complain it can't find java.
It seems some JDK do not include jshell.
With the java provided by `brew install --cask temurin` works.

For commands whithin Jshell type `/`

