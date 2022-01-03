import React, { Component } from 'react'

export default class FetchClass extends Component {
    constructor (props) {
        super(props)
        this.state = {
            query:1,
            title:''
        }
    }

    fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.query}`)
        const data = await response.json()
        this.setState({
            title: data.title
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    handleIncrement = () => {
        this.setState({
            query: this.state.query + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            query: this.state.query - 1
        })
    }

    componentDidUpdate(previousProps, previousState) {
        console.log(previousProps, previousState);

        if (previousState.query !== this.state.query) {
            this.fetchData()
        }        
    }

    render() {
        const { title, query } = this.state
        return (
            <div className="w-1/2 m-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-black text-2xl font-bold">Item no: <span>{query}</span></h1>
                    <div className="space-x-2">
                        <button onClick={this.handleIncrement} className="bg-blue-500 py-2 px-4 text-white">Increment</button>
                        <button onClick={this.handleDecrement} className="bg-blue-500 py-2 px-4 text-white">Decrement</button>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <h1 className="text-3xl text-black">{title}</h1>
                </div>
            </div>
        )
    }
}
