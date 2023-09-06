# Azure

- configure organization
  ```
  az devops configure --defaults organization <organization url, e.g. https://dev.azure.com/...>
  ```

- configure PAT for all commands
  ```
  export AZURE_DEVOPS_EXT_PAT=<personal_pat>
  ```

- [more info about using PAT tokens with git](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Linux).  
  (also works using "Authorization: Bearer $PAT" instead of basic and b64).  
  For git LFS use something like:
  ```
  git config http.$origin_url.extraheader "AUTHORIZATION: bearer $SYSTEM_ACCESSTOKEN"
  git fetch -f origin develop:develop
  git config --unset http.$origin_url.extraheader
  ```

- Get the list of builds for a pipeline
  ```
  az pipelines build list --project <projectname> --definition-ids <definition_id>
  ```

- Use Java 11 in Azure DevOps pipelines
  ```
  - script: |
      echo "##vso[task.setvariable variable=JAVA_HOME]$(JAVA_HOME_11_X64)"
      echo "##vso[task.setvariable variable=PATH]$(JAVA_HOME_11_X64)/bin:$(PATH)"
    displayName: "Set java 11"
  ```

- [Create work items in Azure Boards](https://docs.microsoft.com/en-us/cli/azure/boards/work-item?view=azure-cli-latest#az-boards-work-item-create)

- [Set a full environment in Bash](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/bash?view=azure-devops)

- Call REST API:
  Get PAT Token
  Make REST call using Basic Authentication with username and PAT (as password)
  e.g. 
  ```
  curl "https://dev.azure.com/cbsp-abnamro/_apis/projects?api-version=7.0" -u "mario.negro.ponzi:<PAT>"
  ```

- [Creating Azure Function with REST API](https://zikalino.github.io/blog/2019/03/27/creating-azure-function-app-using-rest-api/)

- [REST call with Azure CLI](https://docs.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest#az-rest)

- [PAT Editing REST API](https://docs.microsoft.com/en-us/rest/api/azure/devops/tokens/pats/create?view=azure-devops-rest-7.1)

- [Format output](https://learn.microsoft.com/en-us/azure/devops/pipelines/scripts/logging-commands?view=azure-devops&tabs=bash#formatting-commands)  
  TL;DR
  ```
  ##[group]Beginning of a group
  ##[warning]Warning message
  ##[error]Error message
  ##[section]Start of a section
  ##[debug]Debug text
  ##[command]Command-line being run
  ##[endgroup]
  ```

- Use pipeline parameters in bash
  ```
  parameters:
  - name: publish
    displayName: Publish?
    type: boolean
    default: true

  ...

  - bash: |
    echo ${{ parameters.publish }}

    if [ ${{ parameters.publish }} == 'True' ]
    then
      echo "true"
    else
      echo "false"
    fi
  displayName: 'Echo and check'

  ```
