from typing import Optional
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    devs = [{'nome': 'Liniker'}, {'nome': 'Marlyson'}]
    return devs


@app.get("/items/{item_id}")
def read_item(item_id: int, nome: Optional[str] = None):
    return {"item_id": item_id, "nome": nome}


@app.post("/users/{user_id}")
def get_user(user_id: int, nome: Optional[str] = None):
    return {"user_id": user_id, "nome": nome}
