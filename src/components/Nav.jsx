import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Nav extends Component {
    render() {
        return (
            <div className="bg-blue-500 px-2 py-6">
                <div className="container m-auto text-white">
                    <ul className="flex space-x-4 items-center">
                        <li><Link to="/">Book</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                        <li><Link to="/weather">Weather</Link></li>
                        <li><Link to="/item">item</Link></li>
                        <li><Link to="/customhook">Custom Hook</Link></li>
                        <li><Link to="/fetch">Fetch Class</Link></li>
                        <li><Link to="/fetch2">FetchFunctional</Link></li>
                        <li><Link to="/infinite">Infinite</Link></li>
                        <li><Link to="/todousehook">todousehook</Link></li>
                        <li><Link to="/usereducer">UseReducer</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
