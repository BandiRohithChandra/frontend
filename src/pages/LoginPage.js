import {useState} from 'react'

const Loginpage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        })

        const data = await response.json()
        alert(data.msg)
        if(data.msg === 'Login successful'){
            localStorage.setItem('username', username)
            window.location.href = '/dashboard'
        }
    }

    return(
        <div>
            <h1>Login page</h1>
            <form onSubmit = {handleSubmit}>
                <label>
                    User Name:
                    <input text = 'text' value={username} onChange={(event) => setUsername(event.target.value)} required />
                </label>
                <br/>
                <label>
                    Password:
                    <input type = 'password' value={password} onChange={(event) => setPassword(event.target.value)} required />
                </label>
                <br/>
                <button type = "submit">Login</button>
            </form>
        </div>
    )
}

export default Loginpage