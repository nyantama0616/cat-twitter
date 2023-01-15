import "./SignUpScene.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

export function SignUpScene() {
    const url = "http://127.0.0.1:8000/sign-up/";

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            "user_id": e.target.userId.value,
            "password": e.target.password.value,
        };

        if (validateData(data)) {

        }

        axios.post(url, data).then((res) => {
            console.log(res.data.Success);
            if (res.data.Success == "false") {
                console.log(res.data.message);
            }
        });
    }

    function validateData(data) {
        return true;
    }

    return (
        <div className="sign-up-scene">    
            <h1>Sign Up</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type="text" name="userId" placeholder="Enter new User ID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter new password"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}


export default SignUpScene;
