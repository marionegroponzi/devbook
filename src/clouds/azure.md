# Azure

- configure organization
  ```
  az devops configure --defaults organization <organization url, e.g. https://dev.azure.com/...>
  ```

- configure PAT for all commands
  ```
  export AZURE_DEVOPS_EXT_PAT=<personal_pat>
  ```

- Get the list of builds for a pipeline
  ```
  az pipelines build list --project <projectname> --definition-ids <definition_id>
  ```
