# Homebrew

- [Dependencies](https://blog.jpalardy.com/posts/untangling-your-homebrew-dependencies/)
  - list all installed packages

    `brew list`

  - list isntalled cask packages

    `brew installed --cask`

  - General package info

    `brew info X`

  - What are X dependencies

    `brew deps X`

  - What depends on X
    
    `brew uses X --installed`

  - Do not use brew leaves to find what can be uninstalled (see link above)

  - Save current brew installed list (to Brewfile)

    `brew bundle dump`

    To restore

    `brew bundle install`

  
- [Java](https://formulae.brew.sh/cask/temurin)

