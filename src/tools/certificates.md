# Certificates

- [Old reference](https://akrabat.com/syncing-macos-keychain-certificates-with-homebrews-openssl/)
- [OpenSSL Cheat](https://gist.github.com/alvarow/1a42e608d74474ac39aa)
- [How to use OpenSSL to test SSL connectivity](https://docs.pingidentity.com/bundle/solution-guides/page/iqs1569423823079.html)
- [How to convert cer to pem](https://serverfault.com/questions/254627/how-do-i-convert-a-cer-certificate-to-pem)
- [How to check Python openssl](https://gist.github.com/therealmarv/10103946)
- [Various OpenSSL commands](https://cheapsslsecurity.com/blog/various-types-ssl-commands-keytool/)

## New

If one needs to add root certificates (e.g. because inside a corporate network) on macOS, having it in the keychain is not enough.

Root certificates must be added to all tools using their own keychain/keystore.

- Download the .cer and .pem file from the Keychain
- Get pem directly via cli:
  ```
  openssl s_client -showcerts -connect server.edu:443 </dev/null 2>/dev/null|openssl x509 -outform PEM >mycertfile.pem
  ```
- Android Studio (or similar Java)
  ```
  "/Applications/Android Studio.app/Contents/jre/Contents/Home/bin/keytool" -import -keystore "/Applications/Android Studio.app/Contents/jre/Contents/Home/lib/security/cacerts" -file "$HOME/Downloads/MYROOT.cer" -alias "MYROOT"
  ```
- Python
  ```
  ... libexec/lib/python3.10/site-packages/certifi/cacert.pem
  ... libexec/lib/python3.10/site-packages/pip/_vendor/certifi/cacert.pem
  ```
- Ruby
  ```
  export RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@1.1)"
  ```
  (and possibly also export PATH="/usr/local/opt/openssl@1.1/bin:$PATH")
- Npm
  ```
  npm config set cafile "$HOME/Downloads/certificates/MYROOT.pem"
  ```

