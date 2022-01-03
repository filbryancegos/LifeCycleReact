import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Header extends Component {
    render() {
        return (
            <div className="container m-auto text-center">
                <h1 className="text-3xl text-black uppercase font-bold">Book Management</h1>
                <div className="mt-4">
                    <ul className="flex space-x-4 items-center justify-center">
                        <li className="text-purple-500 font-bold text-xl"><Link to="/">Book</Link></li>
                        <li className="text-purple-500 font-bold text-xl"><Link to="/create">Add Book</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
