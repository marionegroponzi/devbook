# Python

- [Request](https://zetcode.com/python/requests/)

- ### Virtualenv
    ```
    python -m venv .env
    source .env/bin/activate
    pip install -r requirements.txt
    python main.py
    deactivate
    ```
- ### Requirements
    ```
    pip freeze -r > requirements.txt
    ```
    
    or

    ```
    pip install pipreqs
    pipreqs path/to/project
    ```