import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class Admin extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem('token')
        let loggedIn = true 
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        const { loggedIn } = this.state
        if (!loggedIn) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h1>This is Admin page.</h1>
                <Link to='/logout'>Logout</Link>
            </div>
        )
    }
}
