# GitHub_Webhook
## Gui Interface
![Screen Shot 2021-11-19 at 15 48 06](https://user-images.githubusercontent.com/21170255/142643983-5b7a6b8a-1f71-48e7-bf71-b69f97d69175.png)

## Response From `http://localhost:3000/`
![Screen Shot 2021-11-19 at 14 25 56](https://user-images.githubusercontent.com/21170255/142644178-86bbe1ca-4e83-46d5-a6c3-1b9f84878ca7.png)

## Ngrok script
<img width="1059" alt="Screen Shot 2021-11-18 at 18 45 41" src="https://user-images.githubusercontent.com/21170255/142644384-e0a9e40a-ed46-4dc6-b20a-e25ec9afb1a5.png">

First, we need to install a program that exposes our localhost to the internet. If you already use another program, expose port `3000` and skip to the second step.

1. Signup to [ngrok](https://ngrok.com), [download and install](https://ngrok.com/download).
2. Expose port 3000:

   ```bash
   ./ngrok http 3000
   ```

3. Copy the url from the second `Forwarding` line, should look like `https://xxxxxxxx.ngrok.io`.
4. Goto Settings/Webhooks in your repository, and fill in the form:

   - Payload URL: `https://xxxxxxxx.ngrok.io`
   - Content type: `application/json`
   - Secret: The `GITHUB_SECRET` defined in your environment, you could generate a random string using:

     ```bash
     node -p "crypto.randomBytes(20).toString('hex')"
     ```

# Installation:
1) clone repo
2) cd repo/client
    - npm install
    - npm start
3) cd repo/server
    install pipenv
    - pipenv shell
    - pipenv lock -r
    - python manage.py makemigrations
    - python manage.py migrate
    - python manage.py runserver 0.0.0.0:3000
Enjoy!