# Expect

Automate the terminal. E.g.
```shell
#!/bin/bash
echo "Hello, who are you?"
read $REPLY
echo "Can I ask you some questions?"
read $REPLY
echo "What is your favorite topic?"
read $REPLY
```

```shell
#!/usr/bin/expect -f
set timeout -1
spawn ./questions
expect "Hello, who are you?\r"
send -- "Im Adam\r"
expect "Can I ask you some questions?\r"
send -- "Sure\r"
expect "What is your favorite topic?\r"
send -- "Technology\r"
expect eof
```

The second can be called directly.

Important comands for expect are:
1. spawn	Starts a script or a program.
2. expect	Waits for program output.
3. send	Sends a reply to your program.
4. interact	Allows you to interact with your program.

[Source](https://likegeeks.com/expect-command/)