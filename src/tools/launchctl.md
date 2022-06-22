# Launchctl

## Set environment variables in macOS for GUI apps

In general environemt variables for GUI apps in macOS are stored in `/etc/launchd.conf`.

Otherwise one can:

```
launchctl setenv <KEY> "<VALUE>"
```