import React, { Component } from "react";
import { Button } from 'reactstrap';

class CreateThread extends Component{
    constructor(){
        super();

        this.state = {
            thread_title: "",
            thread_author: ""
        }
    }
    updateThread = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    render(){
        console.log(this.props, 'this is props')
        return(
            <form onSubmit={this.props.addThread.bind(null, this.state)}>
                <label>
                    Topic:
                    <input type="text" name="thread_title" onChange={this.updateThread}/>
                </label>
                <label>
                    Author:
                    <input type="text" name="thread_author" onChange={this.updateThread}/>
                </label> 
                <Button type="submit" color="primary">Submit</Button>
            </form>
        )
    }
}

export default CreateThread;