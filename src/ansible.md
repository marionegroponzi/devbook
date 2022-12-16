# Ansible

- [Basic course](https://www.redhat.com/en/services/training/do007-ansible-essentials-simplicity-automation-technical-overview?extIdCarryOver=true&sc_cid=701f2000001OH7YAAW&section=Overview)

- How to run commands directly
  ```
  ansible -i agents.txt all -a 'zsh -c "ls"'
  ```

- How to run commands with a playbook
  ```
  ansible-playbook -i agents.txt commands.yml
  ```
