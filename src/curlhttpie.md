# curl/httpie

## curl

- Follow redirects  
  `curl -L ...`

- Upload form file: 
  ```
  curl -F ‘data=@path/to/local/file’ UPLOAD_ADDRESS
  ```
- Add user agent
  ```
  curl -A "user-agent-name-here" [URL]
  e.g. "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/81.0"
  ```


- Access Token DevOps with git
  ```
  MY_PAT=yourPAT # replace "yourPAT" with "PatStringFromWebUI"
  B64_PAT=$(printf ":%s" "$MY_PAT" | base64)
  git -c http.extraHeader="Authorization: Basic ${B64_PAT}" clone https://dev.azure.com/yourOrgName/yourProjectName/_git/yourRepoName
  ```

- Access Token DevOps with curl (e.g. for feed)
  ```
  MY_PAT=yourPAT # replace "yourPAT" with "PatStringFromWebUI"
  B64_PAT=$(printf ":%s" "$MY_PAT" | base64)
  curl -L -H "Authorization: Basic ${B64_PAT}" "https://feeds.dev.azure.com/${org}/${project}}/_apis/Packaging/Feeds/$feed/Packages" | jq ".value[0].versions[0].version
  ```  

- Extra header
  ```
  curl https://whatever
   -H "X-Custom-Header: value"
   -H "Content-Type: application/json"
   -H "Authorization: bearer ********"
  ```

- Extra header
  ```
  curl https://whatever
   -H "X-Custom-Header: value"
   -H "Content-Type: application/json"
   -H "Authorization: basic ********"
  ```

## httpie
- [Docs](https://httpie.io/docs)
- [Cheatsheet](https://devhints.io/httpie)