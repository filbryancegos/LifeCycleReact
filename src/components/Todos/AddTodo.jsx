import React, { Component } from 'react'

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todo: '',
        };
      }

    // static getDerivedStateFromProps(props, state) {
    //     console.log(props.name);
    //     return {todo: props.name };
    // }

    componentDidUpdate = () => {
        console.log("amang");
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { addTodo } = this.props
        addTodo(this.state.todo)
    }
    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
   
    render() {
        const { todo } = this.state
        return (
            <form onSubmit={this.onSubmit}>
                <div className="grid grid-cols-3 mt-4">
                    <input onChange={this.handleChange} value={todo} name={todo} type="text" className="block w-full col-span-2" placeholder="" />
                    <button className="bg-blue-500 px-12 text-white col-span-1">Add Todo</button>
                </div>
            </form>
        )
    }
}
