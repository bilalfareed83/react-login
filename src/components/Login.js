import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem('token')
        let isLoggedIn = false         
        if (token == null) {
            isLoggedIn = false
        }
        
        this.state = {
            username: "",
            password: "",
            isLoggedIn
            
        }
       
       
    }
    
   

    handler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        
        if (username === 'a' && password === 'b') {
            localStorage.setItem('token', 'adasfhsdfhsdfhsdfhsdfh')
            this.setState({
                isLoggedIn: true
            })
        }


    }
    render() {
        const {isLoggedIn}= this.state
        if (isLoggedIn ) {
            return <Redirect to='/admin' />
        }
        return (
            <div>
                <h1>Login page</h1>
                <form onSubmit={this.formSubmit}>
                    <input type='text' name="username" placeholder="username" value={this.state.username} onChange={this.handler} />
                    <br/>
                    <input type='password' name="password" placeholder="password" value={this.state.password} onChange={this.handler} />
                    <br />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

