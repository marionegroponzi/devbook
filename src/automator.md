# Utilities with Automator

## Paste cliboard as keyboard for the apps that don't allow cmd-v (e.g. for security)

- Launch Automator (yup it comes with BigSur and already installed, no need to install it)
- New Document
- Click Quick Action
- Change "Workflow Receives" to "No Input"
- On the left scroll down and double click "Run AppleScript"
- Erase the Template Text and Paste the Code above "I used the basic workflow script" (you dont need both scripts)
- Save the Script - I called mine Clip2Keystrokes
  NOTE: You will need to add the Automator and ANY app you plan to run this script on to the Accessibility Permissions.
- Copy your text to the clipboard
- Then switch to the App you want to paste in (in my case it was a Teamviewer session)
- Click the App name in the top left (next to the apple icon), you will see a Services Menu option.
- Mouse over the Services menu and you will see your script name, "Clip2Keystrokes" in my case.
- Be sure the cursor is already where you need it to be as clicking on the script will cause it to start typing.

### The script
```AppleScript
on run
    tell application "System Events"
        keystroke (the clipboard)
    end tell
end run
```

[Source](https://gist.github.com/sscotth/310db98e7c4ec74e21819806dc527e97)