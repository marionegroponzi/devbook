# git

- Show file content (any branch): `git cat-file main:<filename>`  
  Ref. [git cat-file](https://git-scm.com/docs/git-cat-file) 

- Rename current branch: `git branch -m <newname>`

- Show local branch name: `git rev-parse --abbrev-ref HEAD`

- Update and merge main into current branch: 
  - `git fetch origin main:main`
  - `git merge origin/main`

- Push all branches: `git push -u origin --all`

- Swap remote: `git remote set-url origin <new_origin_url>`

- Check which branches have been merged  : `git branch --merged`

- Compare 2 branches: `git diff branch1..branch2`

- Show commits in the current branch only  
`git log <branchoff_name>^..HEAD`  
  (where branchoff_name is the name of the branch the current one has been branched off from)

- Remove last (local-only) commit: `git reset --soft HEAD~`

- Remove more than one (N) commit: `git reset --soft HEAD~N`
  
- Change case of a file when working on macOS: `git mv UPPERCASE uppercase`

- Fix broken commits and push: [On undoing, fixing, or removing commits in git](https://sethrobertson.github.io/GitFixUm/fixup.html)

- Cleaning up repos

  - Analyze ([git-sizer](https://github.com/github/git-sizer) or [git-filter-repo](https://github.com/newren/git-filter-repo))  
    `brew install git-sizer`  
    `git-sizer`  

    or  

    `pip install git-filter-repo`
    `git-filter-repo --analyze`
    `open .git/filter-repo/analysis`

  - Remove files from history Ref. [git-filter-repo](https://github.com/newren/git-filter-repo)  
    `git-filter-repo --invert-paths --path '<filename>'`  
    or use a text file with the list of paths to be deleted  
    `git-filter-repo --invert-paths --paths-from-file <tobedeleted_file_list>`

- Find a file in any branch
  - `git log --all -<filepath>`  

  or

  - `git log --all -'**/<filename>'`

- Find branch where a file is

  - `git log --all -somefile`
    
    returns commit_nr

  `git branch -a --contains <commit_nr>`
  
    returns otherbranch

- Show the commit tree in the cli: `git log --pretty=oneline --graph --decorate --all`

- Remove untracked files
  - `git clean -n` (dry run)
  - `git clean -f`

- Automate access token

  - For multiple repos
    ```
    B64_PAT=$(printf ":%s" "$SYSTEM_ACCESSTOKEN" | base64)
    git config --global http.https://dev.azure.com/.extraheader "Authorization: Basic $B64_PAT"
    git config --global --unset http.https://dev.azure.com/.extraheader
    ```

    But the above leaves the token in the git config file. So remember to remove it with:  
    `git config --global --unset http.https://dev.azure.com/.extraheader`

  - For only one repo  
    `git -c http.extraheader="Authorization: Basic $B64_PAT" clone ...`

  Note: Bearer often does not work.

- Squash commits on merge

  `git merge --squash # automatic, might fail`
  `git rebase -i # interactive`

- [git tag](https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-tag#:~:text=Checking%20Out%20Tags&text=This%20puts%20the%20repo%20in,by%20the%20commits%20SHA%20hash.)

- Work with multiple branch at the same time
  ```
  git worktree add <path> <branch_name>
  git worktree list
  git worktree remove <worktree-name>
  ```

- Rename local and remote branch
  ```
  git checkout <old_name>
  git branch -m <new_name>
  git push origin -u <new_name>
  git push origin --delete <old_name>
  ```

- Rewrite commit author and committer
  ```
  git filter-branch --commit-filter '
        if [ "$GIT_COMMITTER_EMAIL" = "WRONG_COMMITTER_EMAIL" ];
        then
                GIT_AUTHOR_NAME="RIGHT_COMMITTER";
                GIT_AUTHOR_EMAIL="RIGHT_COMMITTER_EMAIL";
                GIT_COMMITTER_NAME="RIGHT_COMMITTER";
                GIT_COMMITTER_EMAIL="RIGHT_COMMITTER_EMAIL";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD
  git push -f --all
  ```

## Submodules
[External ref.](https://devconnected.com/how-to-add-and-update-git-submodules/)
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


## References
- [50 Shades of git](https://trinhngocthuyen.com/posts/tech/50-shades-of-git-remotes-and-authentication/)