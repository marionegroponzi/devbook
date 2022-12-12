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
    
