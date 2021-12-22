# ssh

1. copy files among remote machines (directly)
   ```
   scp [OPTION] [user@]SRC_HOST:]file1 [user@]DEST_HOST:]file2
   ```
2. same as above but passing through the local machine
   ```
   scp [OPTION] -3 [user@]SRC_HOST:]file1 [user@]DEST_HOST:]file2
   ```
3. [source of 1 and 2](https://linuxize.com/post/how-to-use-scp-command-to-securely-transfer-files/)