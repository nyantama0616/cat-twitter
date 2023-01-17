from schemas import User

def validate_sign_up(user: User):
    return (3 <= len(user.user_id) and len(user.user_id) <= 20 and
            6 <= len(user.password) and len(user.password) <= 20)
