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
docker-compose up
```

I have established the database on port **5432** for anyone interested in reviewing the questions posed to the GPT data.
