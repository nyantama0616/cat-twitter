import React from "react";
import { useIsSignedIn } from '../User/User';
import { ProfileScene } from "../ProfileScene/ProfileScene";
import { Link } from "react-router-dom";

import "./HomeScene.scss";

export function HomeScene() {
    return (
        <div className="home-scene">
            {useIsSignedIn() ?
                <ProfileScene/>
                :
                <div className="welcome">
                    <h1>Welcome to "Cat Twitter"</h1>
                    <p>If You have the account for this site, please sign in.</p>
                    <p>If not, please go to sign up page.</p>
                    <div>
                        <Link to="/sign-up" className="btn btn-primary">Sign up</Link>
                        <Link to="/sign-in" className="btn btn-success">Sign in</Link>
                    </div>
                </div>
            }
        </div>
    );
}

export default HomeScene;
 