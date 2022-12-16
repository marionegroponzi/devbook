# git

- [Add submodules](https://devconnected.com/how-to-add-and-update-git-submodules/)
- Git cat-file: show the content of a file in git (any branch, etc.) E.g.
  ```
  git cat-file main:book.toml
  ```
  [git cat-file](https://git-scm.com/docs/git-cat-file)
- Rename current (local only) branch
  ```
  git branch -m <newname>
  ```
- Show local branch name
  ```
  git rev-parse --abbrev-ref HEAD
  ```
- Update and merge main in the current branch
  ```
  #!/bin/zsh
  set -euo pipefail
  MYBRANCH=`git rev-parse --abbrev-ref HEAD`
  git checkout main
  git pull
  git checkout $MYBRANCH
  git merge main
  ```  
  
