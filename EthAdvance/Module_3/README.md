# Storage Victim
This repository includes two .sol files: old_Storage_victim.sol, which has been rewritten into new_Storage_victim.sol. Additionally, Audit.md contains detailed documentation of all testing procedures and fixes applied.

## Executing program

requirements: slither installed on the system.

1. Clone the repo using `git clone https://github.com/Ms-10182/eth-advance-mod-3.git`.
2. Enter the following commands in teminal:
   ```javascript
   solc-select install 0.4.23
   solc-select use 0.4.23
   slither old_Storage_victim.sol
   ```
   and this will show the warnings bugs and issue with different severities in old_Storage_victim.sol.
3. To check for new_Storage_victim.sol execute the following commands:

```javascript
solc-select install 0.4.23
solc-select use 0.4.23
slither new_Storage_victim.sol
```

and this will show the warnings bugs and issue with different severities in new_Storage_victim.sol that is fixed so there will be no warnings and red issues.

## Authors

Ayush Kansal
[@Aykansal](https://linkedin.com/aykansal)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
