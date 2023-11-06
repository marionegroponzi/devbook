# ssh

1.  Create ssh keypair

    `ssh-keygen -t rsa`

2.  Example config file

    Putting the file below (named `config`) within the .ssh folder one can connect using `ssh server1`

    ```
    host *
        AddKeysToAgent yes
        ServerAliveInterval 100
        ServerAliveCountMax 2
        ForwardAgent yes
        IdentityFile $HOME/.ssh/myuser/id_rsa
        user myuser
        StrictHostKeyChecking no
        ConnectTimeout 3

    host server1
        # here it uses the user myuser
        hostname xxx.xxx.xxx.xxx
    host server2
        IdentityFile $HOME/.ssh/anotheruser/id_rsa
        user anotheruser
        hostname yyy.yyy.yyy.yyy
        
    ```

## scp

1.  copy files among remote machines (directly)
    ```
    scp [OPTION] [user@]SRC_HOST:]file1 [user@]DEST_HOST:]file2
    ```
2.  same as above but passing through the local machine
    ```
    scp [OPTION] -3 [user@]SRC_HOST:]file1 [user@]DEST_HOST:]file2
    ```
3.  [source of the 2 items above](https://linuxize.com/post/how-to-use-scp-command-to-securely-transfer-files/)

4. [more](https://haydenjames.io/linux-securely-copy-files-using-scp/)