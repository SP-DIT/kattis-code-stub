# Kattis Code Stubs

## Contribution guide

1. Fork the repository
2. Create a branch for each challenge
3. Duplicate an existing challenge
4. Rename the folder (**Note:** Ensure that folder name matches the id of the challenge on Kattis)
5. Use Hackerrank's DSL to code stub feature to generate.
6. Update the files accordingly
7. Open a pull request

## Testing the code stubs

Start by opening terminal in the respective folder. For example, if testing `gasstation`:

```powershell
cd gasstation
```

### 1. On Window's powershell

```powershell
Get-Content input.txt | node stub.js > output.txt
```

### 2. On Window's command prompt and MacOS Terminal

```bash
node stub.js < input.txt > output.txt
```
