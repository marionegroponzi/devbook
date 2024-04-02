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

- time how long it takes to load zsh: `/usr/bin/time zsh -i -c exit`

- optimize nvm loading time:
    ```bash
    export NVM_DIR="$HOME/.nvm"
    # [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm (commented out)
    [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
    alias nvm="unalias nvm; [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"; nvm $@" # added
  ```


- ~/.zshrc
```
export HISTFILE=~/.zsh_history
export HISTFILESIZE=1000000000
export HISTSIZE=1000000000
setopt INC_APPEND_HISTORY
export HISTTIMEFORMAT="[%F %T] "
setopt EXTENDED_HISTORY
setopt HIST_IGNORE_ALL_DUPS

# Lang
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8

# Example aliases
alias zshconf="code ~/.zshrc"

# comment for performance
# test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"

# Editor
export EDITOR=nano
export VISUAL=nano

# Homebrew
export PATH=/opt/homebrew/bin:/usr/local/sbin:/usr/local/bin:$PATH

# OpenSSL - prioritise to Homebrew openssl so PyEnv and RbEnv use it for Python installations
export PATH="/usr/local/opt/openssl@3/bin:$PATH"
export RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@3)"

# for compilers
# export LDFLAGS="-L/opt/homebrew/opt/openssl@1.1/lib"
# export CFLAGS="-L/opt/homebrew/opt/openssl@1.1/lib"
# export CPPFLAGS="-I/opt/homebrew/opt/openssl@1.1/include"

# Java
export JAVA_STUDIO_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home"
export JAVA_IDEA_HOME="/Applications/IntelliJ IDEA CE.app/Contents/jbr/Contents/Home"
export JAVA_GRAALVM_HOME="/Library/Java/JavaVirtualMachines/graalvm-community-openjdk-17.0.9+9.1/Contents/Home"

alias jstudio='export JAVA_HOME="$JAVA_STUDIO_HOME" && export PATH="$JAVA_HOME/bin:$PATH"'
alias jidea='export JAVA_HOME="$JAVA_IDEA_HOME" && export PATH="$JAVA_HOME/bin:$PATH"'
alias j11='export JAVA_HOME="`/usr/libexec/java_home -v 11`";export PATH="$JAVA_HOME/bin:$PATH"'
alias jgraal='export JAVA_HOME="$JAVA_GRAALVM_HOME" && export PATH="$JAVA_HOME/bin:$PATH"'

# Default to IntelliJ JBR
jidea


# Android
export ANDROID_HOME=$HOME/Library/Android/sdk
export ANDROID_SDK=$ANDROID_HOME
export ANDROID_SDK_ROOT=$ANDROID_HOME
export PATH="$ANDROID_HOME/platform-tools:$ANDROID_HOME/cmdline-tools/latest/bin:$PATH"

# RbEnv
export PATH="$HOME/.rbenv/bin:$PATH:"
eval "$(rbenv init -)"

# PyEnv
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

# jenv
# export PATH="$HOME/.jenv/bin:$PATH"
# eval "$(jenv init -)"

# Flutter
export PATH="$HOME/Developer/flutter/bin:$PATH"

# Dart
export PATH="$PATH":"$HOME/.pub-cache/bin"

# alias px-off="unset http_proxy https_proxy ALL_PROXY JAVA_OPTS JAVA_TOOL_OPTIONS"
# alias px-on="source ~/.zshrc"

# mongodb
export PATH="/usr/local/opt/mongodb-community@4.4/bin:$PATH"

# cli apps
export PATH="$HOME/cliapps:$PATH"


# aliases
alias g='git'

alias hh='history -E -1000'
alias ls='exa -lag --header'
alias up='brew update && brew upgrade && flutter upgrade'
alias gt='gtime -f "time result\ncmd:%C\nreal %es\nuser %Us \nsys  %Ss \nmemory:%MKB \ncpu %P"'
alias fd='fd -HI'

alias push='git push'
alias pull='git pull'
alias merge='git merge'
alias commit='git commit'
alias switch='git switch'
alias branch='git branch'
alias checkout='git checkout'
alias status='git status'
alias clone='git clone'
alias glog='git log --graph --decorate --oneline'
alias worktree='git worktree'
alias gtree='git worktree'
alias gdiff='git diff'
alias greset='git reset'

alias certs='$HOME/certs/certs.sh'

export PATH="/Applications/sonar-scanner-5.0.1.3006-macosx/bin/:$PATH"

# Node
export NVM_DIR="$HOME/.nvm"
  # [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
  alias nvm="unalias nvm; [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"; nvm $@"

# export PATH="/opt/homebrew/opt/node@18/bin:$PATH"

eval "$(starship init zsh)"

function cd {
    # actually change the directory with all args passed to the function
    builtin cd "$@"
    # if there's a regular file named "readme.md"...
    if [ -f "readme.md" ] ; then
        # display its content
        cat readme.md
    fi
}
```

