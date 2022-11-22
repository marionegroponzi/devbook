# Maven

1. How to manually download a dependency (e.g. robolectric)
```
mvn -DgroupId=org.robolectric -DartifactId=android-all-instrumented -Dversion=11-robolectric-6757853-i4 dependency:get
```

2. How to upload a jar dependency to a local folder for testing
```
mvn deploy:deploy-file -Dfile=./test.jar -Durl=file:///Users/marionegroponzi/Developer/Workspace/tbd/deploy -DgroupId=com.org -DartifactId=test -Dversion=1.0 -DgeneratePom=true
```
