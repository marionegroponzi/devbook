# Minimal Web Servers

Various solution for similar problems

- [Mongoose (C library)](https://github.com/cesanta/mongoose)

- `python -m http.server 8080`

- `while true; do nc -l 127.0.0.1 8889 < foo.html; done`

- `nc -l 127.0.0.1 8889 < foo.html`

- `while true ; do nc -l -p 1500 -c 'echo -e "HTTP/1.1 200 OK\n\n $(date)"'; done`

- `while true ; do nc -l -p 1500 -e /path/to/yourprogram ; done`


