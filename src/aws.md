# Random notes on AWS

1. How to send an email using SES

    ```
    sudo pip install awscli
    aws configure
    aws ses send-email \
    --from "john@gmail.com" \
    --destination "ToAddresses=mike@gmail.com" \
    --message "Subject={Data=from ses,Charset=utf8},Body={Text={Data=ses says hi,Charset=utf8},Html={Data=,Charset=utf8}}"
    ```