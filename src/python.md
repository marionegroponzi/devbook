# Python

1. [Request](https://zetcode.com/python/requests/)

2. ### Virtualenv
    ```
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    python main.py
    deactivate
    ```
3. ### Requirements
    ```
    pip freeze -r > requirements.txt
    ```
    
    or

    ```
    pip install pipreqs
    pipreqs path/to/project
    ```
4. ### Install with custom certificate
    ```
    pip --cert $HOME/certs/MYCERT.pem install ...
    ```
    
    or find the certificate repos (e.g. in the current virtual environment)
    ```
    fd -e pem . venv
    cat $HOME/certs/MYCERT.pem >> venv/lib/python3.9/site-packages/pip/_vendor/certifi/cacert.pem
    ```
    
