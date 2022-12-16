# Fastlane

Assuming *Fastlane match* is setup and profiles are stored in a git repo.
1. Create the bundle id in the Apple portal
2. Add a development profile using match
    ```
    bundle exec fastlane match development --app_identifier "com.negroponzi.dev.*"
    ```
3. have all team use it
    ```
    bundle exec fastlane match --readonly development
    ```
