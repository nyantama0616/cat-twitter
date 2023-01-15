from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import conn
from models import users
from schemas import User
from sqlalchemy import text
from sqlalchemy import exc

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

@app.post("/sign-up")
async def sign_up(user: User):
    print("sign up")

    message = ""
    try:
        conn.execute(users.insert().values(
            user_id=user.user_id,
            password=user.password
        ))
        
        return {"Success": "true"}
    except exc.IntegrityError as e:
        if e.orig.args[0] == 1062:
            print("duplicate id")
            message = f"User ID: {user.user_id}は既に使われています。"

    return {"Success": "false", "message": message}
    # print(res.Row)

    # result = conn.execute(text("SELECT * FROM users"))
    # print(list(result))
