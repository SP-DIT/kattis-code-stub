# Kattis Code Stubs

[![SP-DIT - kattis-code-stub](https://img.shields.io/static/v1?label=SP-DIT&message=kattis-code-stub&color=blue&logo=github)](https://github.com/SP-DIT/kattis-code-stub "Go to GitHub repo")
[![stars - kattis-code-stub](https://img.shields.io/github/stars/SP-DIT/kattis-code-stub?style=social)](https://github.com/SP-DIT/kattis-code-stub)

## Contribution guide

1. Fork the repository [![forks - kattis-code-stub](https://img.shields.io/github/forks/SP-DIT/kattis-code-stub?style=social)](https://github.com/SP-DIT/kattis-code-stub)
2. Choose a problem to convert in the issues list and assign it to yourself [![issues - kattis-code-stub](https://img.shields.io/github/issues/SP-DIT/kattis-code-stub)](https://github.com/SP-DIT/kattis-code-stub/issues) 
3. Create a branch for each challenge
4. Duplicate an existing challenge
5. Rename the folder (**Note:** Ensure that folder name matches the id of the challenge on Kattis)
6. Use Hackerrank's DSL to code stub feature to generate.
7. Update the files accordingly
8. Open a pull request

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
