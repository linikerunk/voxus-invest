from fastapi import FastAPI
from routes.index import users, auth


app = FastAPI()

app.include_router(auth)
app.include_router(users)