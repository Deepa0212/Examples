import { useReducer, useState } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'email':
            return { ...state, email: action.payload }
        case 'password':
            return { ...state, password: action.payload }
        case 'error':
            return { ...state, error: action.payload }
        case 'isLoading':
            return { ...state, isLoading: !state.isLoading }
    }
}

function LoginForm() {
    const [state, dispatch] = useReducer(reducer, { email: "", password: "", error: "", isLoading: false })
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [error, setError] = useState("")
    // const [isLoading, setIsLoading] = useState("")
    // const [isValid, setIsValid] = useState(false)
    const { email, password, error, isLoading } = state

    const disableBtn = isLoading || password.length < 6 || !email

    // const handlePassword = (e) => {
    //     if (password.length > 6) {
    //         setPassword(e.target.value)
    //         setError("")
    //     } else {
    //         setError("Invalid Password")
    //     }
    // }

    const login = async ({ email, password }) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (password === 'password123' && !!email) {
                    resolve();
                } else {
                    reject(new Error("Invalid email or password"))
                }
            }, 3000)
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // setError("")
        dispatch({ type: "error", payload: "" })
        // setIsLoading(true)
        dispatch({ type: "isLoading" })
        
        try {
            await login({ email, password })
            alert('success')
        } catch (error) {
            // setError(error.message)
            dispatch({ type: "error", payload: error.message })
        }
        // setIsLoading(false)
        dispatch({ type: "isLoading" })
    }

    return (
        <div>
            <h1>Login Form</h1>
            {isLoading && <p>Loading..</p>}
            <p style={{ color: 'red' }} >{error}</p>
            <form>
                <input name="Email" type="text" placeholder="Email" onChange={(e) => dispatch({ type: "email", payload: e.target.value })} value={email} />
                <br></br>
                <br></br>
                <input name="Password" type="text" placeholder="Password" onChange={(e) => dispatch({ type: "password", payload: e.target.value })} value={password} />
                <br></br>
                <br></br>
                <button onClick={handleSubmit} disabled={disableBtn} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default LoginForm;