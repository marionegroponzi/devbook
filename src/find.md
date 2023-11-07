## Find

1. find and zip: `find . -name "<pattern>" | zip ./targets.zip -m@`
2. find and execute on all results: `find . -name "<pattern>" -exec cmd {} +`