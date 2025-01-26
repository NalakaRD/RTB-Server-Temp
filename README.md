# Install and run

Create .env file and create the env variables

Install dependencies

```bash
npm install
```

```If npm is not allowed by the terminal run 
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
```


Run server

```bash
npm run dev
```

TESTING in POSTMAN
Once logged in (have to do each time when logging in)
Copy the token
Goto postman tab's Autherization header
```
Type -> Bearer token
Token -> paste token
```
