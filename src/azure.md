# Random notes on Azure

- How to set an organization as default using the az cli
  ```
  az devops configure --defaults organization <organization url, e.g. https://dev.azure.com/...>
  ```

- How to set a Personal Access Token (PAT) for all az commands
  ```
  export AZURE_DEVOPS_EXT_PAT=<personal_pat>
  ```

- How to use git with PAT: [PAT tokens with git](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Linux).  
  (also works using "Authorization: Bearer $PAT" instead of basic and b64).  
  For git LFS use something like:
  ```
  git config http.$origin_url.extraheader "AUTHORIZATION: bearer $SYSTEM_ACCESSTOKEN"
  git fetch -f origin develop:develop
  git config --unset http.$origin_url.extraheader
  ```

- How to get the list of builds for a pipeline
  ```
  az pipelines build list --project <projectname> --definition-ids <definition_id>
  ```

- How to enforce using Java 11 in Azure DevOps pipelines
  ```
  - script: |
      echo "##vso[task.setvariable variable=JAVA_HOME]$(JAVA_HOME_11_X64)"
      echo "##vso[task.setvariable variable=PATH]$(JAVA_HOME_11_X64)/bin:$(PATH)"
    displayName: "Set java 11"
  ```

- How to create WorkItems in Azure boards via cli: [Create work items in Azure Boards](https://docs.microsoft.com/en-us/cli/azure/boards/work-item?view=azure-cli-latest#az-boards-work-item-create)

- [Set a full environment in Bash](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/bash?view=azure-devops)

- How to call the Azure DevOps REST API:
  Get PAT Token
  Make REST call using Basic Authentication with username and PAT (as password)
  e.g. 
  ```
  curl "https://dev.azure.com/cbsp-abnamro/_apis/projects?api-version=7.0" -u "mario.negro.ponzi:<PAT>"
  ```

  - Also usfeul: [REST call with Azure CLI](https://docs.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest#az-rest)  

- How to create Azure Functions with the REST API: [Creating Azure Function with REST API](https://zikalino.github.io/blog/2019/03/27/creating-azure-function-app-using-rest-api/)

- How to edit a PAT via REST API: [PAT Editing REST API](https://docs.microsoft.com/en-us/rest/api/azure/devops/tokens/pats/create?view=azure-devops-rest-7.1)

- How to format the output in the pipelines in azure DevOps: [Format output](https://learn.microsoft.com/en-us/azure/devops/pipelines/scripts/logging-commands?view=azure-devops&tabs=bash#formatting-commands)  
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

- How to use pipeline parameters and read them in a bash script
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
