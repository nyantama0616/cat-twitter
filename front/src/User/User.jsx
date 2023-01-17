import { createContext, useState, useContext } from "react";
import axios from "axios";

class User {
    constructor(data) {
        this.user_id = data.user_id;
    }
}

export const UserContext = createContext(null);

export function UserProvider(props) {
    const [currentUser, setCurrentUser] = useState(null);

    function signIn(user_id, password, callback) {
        console.log("sign in");
        const url = "http://127.0.0.1:8000/sign-in/";
        const data = {
            "user_id": user_id,
            "password": password
        }
        
        axios.post(url, data).then((res) => {
            if (res.data.status === "success") {
                console.log("success!");
                setCurrentUser(new User(res.data.user_data));
            }

            callback(res.data.status);
        });
    }

    const ucValue = {
        currentUser: currentUser,
        signIn: signIn,
    };

    return (
        <UserContext.Provider value={ucValue}>
            {props.children}
        </UserContext.Provider>
    );
}

export function useIsSignedIn() {
    const ucValue = useContext(UserContext);
    return ucValue.currentUser !== null;
}
