from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import conn
from models import users
from schemas import User
from sqlalchemy import text
from sqlalchemy import exc
from validation import *

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/sign-in")
async def sign_in(user: User):
    res = conn.execute(f"select * from users where user_id=\"{user.user_id}\";")
    users = list(res)
    # if len(users) == 1:
    if len(users) == 1 and user.password == users[0][1]: #user_idが存在し、passwordが一致するか
        return {"status": "success", "user_data": user}
    else:
        return {"status": "fail"}

@app.post("/sign-up")
async def sign_up(user: User):
    print("sign up")

    if not validate_sign_up(user):
        return {"status": "fail", "message": "Invalid input."}

    message = None
    try:
        conn.execute(users.insert().values(
            user_id=user.user_id,
            password=user.password
        ))
        
        return {"status": "success"}
    except exc.IntegrityError as e:
        if (e.orig.args[0] == 1062):
            message = f"User ID \"{user.user_id}\"is already used."

    return {"status": "fail", "message": message}
