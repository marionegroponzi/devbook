# git


- Show the content of a file in git (any branch, etc.) [git cat-file](https://git-scm.com/docs/git-cat-file)   
  `git cat-file main:book.toml`  
- Rename current (local only) branch  
  `git branch -m <newname>`
- Show local branch name  
  `git rev-parse --abbrev-ref HEAD`
- Update and merge main in the current branch
  ```
  git fetch origin main:main
  git merge origin/main
  ```
- Push all branches  
  `git push -u origin --all`
- Swap remote  
  `git remote set-url origin <new_origin_url>`

- Check which branches have been merged.  
  `git branch --merged`

- Compare 2 branches  
  `git diff branch1..branch2`

- See the commits in the current branch only
  `git log <branchoff_name>^..HEAD`  
  (where branchoff_name is the name of the branch the current one has been branched off from)

- Remove last (local-only) commit
  `git reset --soft HEAD~`

## Fix broken pushes
  - [On undoing, fixing, or removing commits in git](https://sethrobertson.github.io/GitFixUm/fixup.html)

## Cleaning up repos
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
- automate access token

  ```
  git config http.https://fabrikam.visualstudio.com/DefaultCollection/Fabrikam/_git/Fabrikam.extraheader "AUTHORIZATION: bearer ********"
  ```

  But the above leaves the token in the git config file. So better do
  ```
  git -c http.extraheader=AUTHORIZATION: bearer ********" ...
  ```

- squash commits on merge
  ```
  git merge --squash # automatic, might fail
  git rebase -i # interactive
  ```


## Submodules
- [External ref.](https://devconnected.com/how-to-add-and-update-git-submodules/)
- Add
  ```
  git submodule add http://submodule submodule
  git add .
  git commit -m “added submodule”
  git push
  ```
- Clone
  ```
  git clone --recursive --jobs 6 https://module
  cd module
  ```
- Pull
  ```
  git pull --recurse-submodules
  ```
- Update submodule updated elsewehre
  ```
  cd submodule
  git checkout master
  git pull # pull the latest commit from the submodule repo
  cd ..
  git add .
  git commit -m “updated submodule”
  git push
  ```
- Updated submodule with local changes
  ```
  cd submodule
  touch changedfile.txt
  git add .
  git commit -m “changes to submodule”
  git push
  cd ..
  git add .
  git commit -m “updated submodule”
  git push
  ```
- Avoid pushing module before submodule. 
  If we make the following mistake:
  ```
  cd submodule
  touch changedfile.txt
  git add .
  git commit -m “added changedfile.txt”
  # here we forget git push
  cd ..
  git add .
  git commit -m “updated submodule”
  git push
  ```
  We must correct it this way:
  ```
  git clone --recursive --jobs 6 https://module 
  # the above will return some errors trying to clone submodule
  cd module/submodule
  git checkout master
  git pull
  cd ..
  git add .
  git commit -m “fixed submodule”
  git push
  ```
- Remove a submodule
  ```
  git rm submodule
  git add .
  git commit -m “removed submodule”
  git push
  ```


  
