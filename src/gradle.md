# Gradle

- [Test Retry Plugin](https://plugins.gradle.org/plugin/org.gradle.test-retry)

- Create a gradle task that runs a script (example)

```
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