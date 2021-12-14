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

- Use Java 11 in Azure DevOps pipelines
  ```
  - script: |
      echo "##vso[task.setvariable variable=JAVA_HOME]$(JAVA_HOME_11_X64)"
      echo "##vso[task.setvariable variable=PATH]$(JAVA_HOME_11_X64)/bin:$(PATH)"
    displayName: "Set java 11"
  ```