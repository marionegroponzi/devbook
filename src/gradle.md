# Gradle

- [Test Retry Plugin](https://plugins.gradle.org/plugin/org.gradle.test-retry)

- Create a gradle task that runs a script (example)

```gradle
task myTask(dependsOn: ['assembleDebug', 'assembleRelease']) {
    group 'My group'
    description 'My description'
    doLast {
        exec {
            executable "sh"
            args "-c", "runscript.sh"
        }
    }
}

```  

In Kotlin

```Kotlin
tasks.register("myTask") {
    doLast {
        val result = exec {
            commandLine("echo", "hi")
        }
        println(result.exitValue)
    }
}
```

- Remove old-ish cache
```
find ~/.gradle -type f -atime +30 -delete
find ~/.gradle -type d -mindepth 1 -empty -delete
```