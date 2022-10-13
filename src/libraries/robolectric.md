# Robolectric

1. [Robolectric](https://robolectric.org/) downloads dynamically dependencies. It does not respect the repositories settings. To amke sure it uses a source that is not MavenCentral one must add the following in the root build.gradle.kts file.

```
allprojects {
    tasks.withType<Test> {
        systemProperty("robolectric.dependency.repo.id", "nexus")
        systemProperty("robolectric.dependency.repo.url", "https://p-nexus-3.development.nl.eu.abnamro.com:8443/repository/android-group/")
        systemProperty("javax.net.ssl.trustStoreType", "JKS")  // required for Robolectric 4.3.1 and JDK11
        systemProperty("robolectric.logging", "stdout")
    }
}
```