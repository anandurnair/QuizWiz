import React from 'react'

const InstructorSignup = () => {
  return (
    <div className="">
            <h2> Instructor SignUP</h2>
            <div className="signup-inputs">
                <div className="">
                    <label htmlFor="username">Enter username</label>
                    <input type="text" name="username" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="">
                    <label htmlFor="email">Enter email</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="">
                    <label htmlFor="password">Enter password</label>
                    <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
                <Link href='/'>Login</Link>
            </div>
        </div>
  )
}

export default InstructorSignup
