# ripgrep

- [Fast search](https://mariusschulz.com/blog/fast-searching-with-ripgrep)
- Find log4j:
  ```
  sudo rg JndiLookup --binary -z / 2>/dev/null
  ```
- Find a string in files with extension:
  ```
  rg '<string>' -g '*.<ext>'
  ```