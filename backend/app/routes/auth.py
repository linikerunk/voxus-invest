from fastapi import FastAPI, Depends, HTTPException, status
from auth import AuthHandler
from schemas import AuthDetails


app = FastAPI()

auth_handler = AuthHandler()
users = []


@app.get("/")
async def root():
    return {"message": "you're in root"}


@app.post('/api/register', status_code=201)
async def register(auth_details: AuthDetails):
    if any(user['username'] == auth_details.username for user in users):
        raise HTTPException(status_code=400, detail='Username is taken')
    hashed_password = auth_handler.get_password_hash(auth_details.password)
    users.append({
        'username': auth_details.username,
        'email': auth_details.email,
        'password': hashed_password,
        'confirm_password': hashed_password
    })
    return {
        'response': 'User created successfully',
        'status_code': status.HTTP_201_CREATED
    }


@app.post('/api/login')
async def login(auth_details: AuthDetails):
    user_auth = None
    for user in users:
        if user['username'] == auth_details.username:
            user_auth = user
            break
    if (user_auth is None) or (not auth_handler.verify_password(
        auth_details.password, user['password'])
    ):
        raise HTTPException(
            status_code=401,
            detail='Invalid user and/or password'
        )
    token = auth_handler.encode_token(user['username'])
    return {'token': token}


@app.get('/api/unprotected')
async def unprotected():
    return {'response': 'you are unprotected'}


@app.get('api/protected')
async def protected(username=Depends(auth_handler.auth_wrapper)):
    return {'name': username}