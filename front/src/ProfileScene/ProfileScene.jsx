// import { useState } from "react";
// import axios from "axios";

export function ProfileScene(props) {
    // const [okUser, setOkUser] = useState(false);
    
    // const url = "http://127.0.0.1:8000/users/" + id;
    // axios.get(url, (res) => {
    //     setOkUser(res.data != "none");
    // });

    return (
        <div className="profile-scene">
            <h1>My Profile</h1>
            {/* {
                okUser ? (
                    <div>
                        <h1>Profile</h1>
                        <ul>
                            <li>id: { }</li>
                        </ul>
                    </div>
                ) : (
                    <div className="error">
                        <p>This id does not exists.</p>
                    </div>
                )
            } */}
        </div>
    );
}

export default ProfileScene;
