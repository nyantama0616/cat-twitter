import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../User/User';
import { useContext } from "react";

import "./SignInScene.scss";

export function SignInScene(props) {
    const ucValue = useContext(UserContext);

    const useOnSubmit = (e) => {
        e.preventDefault();

        const data = {
            "user_id": e.target.user_id.value,
            "password": e.target.password.value,
        };
        
        ucValue.signIn(data.user_id, data.password, (status) => {
            if (status === "success") {
                console.log("sigin success");
            } else {
                console.log("sigin fail");
            }
        });
    }

    // function validateData(data) {
    //     return true;
    // }

    return (
        <div className="sign-in-scene">
            <h1>Sign In</h1>
            <Form onSubmit={useOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type="text" name="user_id" placeholder="Enter new User ID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter new password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default SignInScene;
