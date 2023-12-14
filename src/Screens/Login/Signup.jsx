import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    //timeout


    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
    console.log(
        'Name :' + name + '|' +
        'Email :' + email + '|' +
        'Password :' + password + '|'
    )

    // Showing success message
    const successMessage = (e) => {

        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <p> <span className='primaryclr'>{name}</span>,  You have successfully registered!! your form</p>
            </div>
        );
        
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h3>Please enter All Valid Details!!!</h3>
            </div>
        );
    };

    return (
        <>
            <div id='signup-form'>
                <div className="loginpagemain">
                    <div className='message1'>
                        {successMessage()}
                    </div>
                    <div className="loginpagein">
                        {/*succesfully message */}

                        <div className="form">
                            <div>
                                <h1>User Registration</h1>
                            </div>

                            {/*error message*/}
                            <div className="messages2">
                                {errorMessage()}

                            </div>

                            <form className='signup-form'>


                                <input onChange={handleName} className="input"
                                    value={name} type="text" placeholder='Username:' />
                                <br />

                                <input onChange={handleEmail} className="input"
                                    value={email} type="email" required placeholder='Email:' />
                                <br />

                                <input onChange={handlePassword} className="input"
                                    value={password} type="password" placeholder='Password:' />
                                <br />
                                <button onClick={handleSubmit} className="btn" type="submit">
                                    Submit
                                </button><br />
                                <Link to="/"><button>Login</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Signup }
