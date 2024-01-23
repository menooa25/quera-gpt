## For Deploy

First create **.env** file and fill with following example

```
OPENAI_API_KEY=Your_open_ai_secret_api_key

POSTGRES_DB=mydatabase
POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword

DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}?schema=public"
```

For start, run following command. Notice that server gonna run on port **3000**.

```
docker-compose up --build
```

I have established the database on port **5432** for anyone interested in reviewing the questions posed to the GPT data.


## Overview

https://github.com/menooa25/quera-gpt/assets/58942186/341884d2-cfde-4de1-ba44-ed602d51e20a

