# git

- [Add submodules](https://devconnected.com/how-to-add-and-update-git-submodules/)
- Show the content of a file in git (any branch, etc.) [git cat-file](https://git-scm.com/docs/git-cat-file)   
  `git cat-file main:book.toml`  
- Rename current (local only) branch  
  `git branch -m <newname>`
- Show local branch name  
  `git rev-parse --abbrev-ref HEAD`
- Update and merge main in the current branch
  ```
  git fetch origin main:main
  git merge main
  ```
- Push all branches  
  `git push -u origin --all`
- Swap remote  
  `git remote set-url origin <new_origin_url>`

- Check which branches have been merged.  
  `git branch --merged`
- Analyze your git repo ([git-sizer](https://github.com/github/git-sizer) or [git-filter-repo](https://github.com/newren/git-filter-repo))  
  `brew install git-sizer`  
  `git-sizer`  
  or  
  `pip install git-filter-repo`
  `git-filter-repo --analyze`
  `open .git/filter-repo/analysis`

- Remove large files from git and history (see [git-filter-repo](https://github.com/newren/git-filter-repo))
  ```
  git-filter-repo --invert-paths --path '<filename>'
  ```
  or use a text file with the list of paths to be deleted
  ```
  git-filter-repo --invert-paths --paths-from-file <tobedeleted_file_list>
  ```
- Find a file in any branch
  ```
  git log --all -- <filepath>
  ```
  or
  ```
  git log --all -- '**/<filename>'
  ```
  (if your git log does not show the branch name you can go with
  ```
  % git log --all -- somefile
    ...
    commit 123456767668

  % git branch -a --contains 123456767668
    otherbranch
  ```
  )
- show the commit tree in the cli
  ```
  git log --pretty=oneline --graph --decorate --all
  ```
- remove untracked files (the first only shows what would be deleted)
  ```
  git clean -n
  git clean -f
  ```
- show full branch tree
  ```
  git log --pretty=oneline --graph --decorate --all
  ```
  
