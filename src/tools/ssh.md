# ssh

## Create ssh keypair

`ssh-keygen -t rsa`

## Example config file

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
