# Maven

1. How to manually download a dependency (e.g. robolectric)
```
mvn -DgroupId=org.robolectric -DartifactId=android-all-instrumented -Dversion=11-robolectric-6757853-i4 dependency:get
```

1.1 Better yet
```
mvn org.apache.maven.plugins:maven-dependency-plugin:2.8:get -Dartifact=groupId:artifactId:version:packaging -Dtransitive=false
```
Using a .m2/settings.xml like
```
<settings>

<servers>
    <server>
        <id>central</id>
    </server>
    <server>
        <id>google</id>
    </server>
    <server>
        <id>jcenter</id>
    </server>
    <server>
        <id>github</id>
        <username>[username]</username>
        <password>[github token]</password>
    </server>
</servers>

 <profiles>

   <profile>
     <id>myprofile</id>
     <repositories>
       <repository>
        <id>central</id>
        <url>https://repo1.maven.org/maven2/</url>
       </repository>
       <repository>
        <id>jcenter</id>
        <url>https://jcenter.bintray.com/</url>
       </repository>

       <repository>
        <id>google</id>
        <url>https://maven.google.com/</url>
       </repository>

       <repository>
         <id>github</id>
         <name>Github</name>
         <url>https://maven.pkg.github.com/...</url>
       </repository>
     </repositories>
   </profile>

 </profiles>

 <activeProfiles>
   <activeProfile>myprofile</activeProfile>
 </activeProfiles>

 </settings>
```

2. How to upload a jar dependency to a local folder for testing
```
mvn deploy:deploy-file -Dfile=./test.jar -Durl=file:///Users/marionegroponzi/Developer/Workspace/tbd/deploy -DgroupId=com.org -DartifactId=test -Dversion=1.0 -DgeneratePom=true
```
