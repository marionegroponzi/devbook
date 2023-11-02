# zsh

- [Directly run a command](https://superuser.com/questions/91881/invoke-zsh-having-it-run-a-command-and-then-enter-interactive-mode-instead-of)

- `cp -a` preserves flags and dates (and implies -r)

- execute a command every time one cd-ing into a foler:
```
function cd {
    # actually change the directory with all args passed to the function
    builtin cd "$@"
    # if there's a regular file named "todo.txt"...
    if [ -f "todo.txt" ] ; then
        # display its contents
        cat todo.txt
    fi
}
```