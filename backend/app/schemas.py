from pydantic import BaseModel


class AuthDetails(BaseModel):
    username: str
    email: str
    password: str
    confirm_password: str