# CLI (macOS)

- restart from terminal
   
   ```
   sudo shutdown -r now
   ```

- Check if the cpu thermal throttle (does not work on M1)

  `pmset -g thermlog`

- Performance benchmarking: [Hyperfine](https://github.com/sharkdp/hyperfine)

  - [Other tools](https://gist.github.com/denji/8333630)

  - Load generator: [wrk](https://github.com/wg/wrk)

- Check comman line uploader (e.g. for Log4j)

  `xcrun iTMSTransporter`


