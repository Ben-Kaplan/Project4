import React, { Component } from 'react';
import EditPost from "./components/EditPost/edit.jsx"
import CreateThread from "./components/CreateThread/createThread.jsx"
import Threads from "./components/Threads/threads.jsx"
import ThreadsDetails from "./components/ThreadsDetails/threadsDetails.jsx"
import Nav from "./components/Nav/nav.jsx"
import { Route } from "react-router-dom";


class MainContainer extends Component {
    constructor(){
        super();

        this.state = {
            posts: [],
            inputValue: "",
            threads: [],
            editPostId: null,
            postToEdit: {
                post_title: '',
                post_content: ''
            }
        }
    }
    componentDidMount(){
        this.getPosts().then((response)=>{
            this.setState({
                posts: response
            })
        }).catch((err)=>{
            console.log(err)
        }); 
        this.getThreads().then((response)=>{
            this.setState({
                threads: response
            })
        }).catch((err)=>{
            console.log(err)
        }); 
    }
    getThreads = async() => {
        const threads = await fetch ("http://localhost:8000/threads/", {
            method: "GET"
        });
        console.log("threads:", threads)
        const threadsJson = await threads.json();
        console.log("threadsJson:", threadsJson)
        return threadsJson
    }
    addThread = async (thread, e) =>{
        console.log("this is thread", thread)
        e.preventDefault();
        try { 
            const createThread = await fetch("http://localhost:8000/threads/", {
                method: "POST",
                body: JSON.stringify(thread),
                headers:{
                    "Content-Type": "application/json"
                }
            });
            console.log("this is created thread", createThread)
            const parsedResponse = await createThread.json();
            console.log("this is parsed response", parsedResponse)
            this.setState({threads: [...this.state.threads, parsedResponse]})
            this.props.history.push({
                pathname:"/home/"
            })
        } catch(err){
            console.log(err)
        }
    }
    deleteThread = async (id, e) => {
        e.preventDefault();
        console.log(id, "this is deleteThread id");
        
        try { 
            const deleteThread = await fetch("http://localhost:8000/threads/" + id, {
                method: 'DELETE',
                body: JSON.stringify({"id": id}),
                headers: {
                  'Content-Type': 'application/json'
            }});
            console.log("STAGE 1")
            console.log("deleteThread:", deleteThread)
            const parsedResponse = deleteThread;
            // console.log("parsedResponse:", parsedResponse)
            console.log("STAGE 2")
            if(parsedResponse.status === 204){
                this.setState({threads: this.state.threads.filter((threads,i) => threads.id !== id)});
                this.props.history.push({
                    pathname:"/home/",
                    state: {threadPotato: ""}
                })
            } else {
                console.log("There is a problem with delete")
            }
        } catch(err) {
            console.log(err)
        }
    }
    getPosts = async() => {
        const posts = await fetch ("http://localhost:8000/posts/", {
            method: "GET"
        });
        const postsJson = await posts.json();
        return postsJson
    }
    addPost = async (post, e) =>{
        e.preventDefault();
        console.log("post:", post)
        try { 
            const createPost = await fetch("http://localhost:8000/posts/", {
                method: "POST",
                body: JSON.stringify(post),
                headers:{
                    "Content-Type": "application/json"
                }
            });
            console.log("createPost:", createPost)
            const parsedResponse = await createPost.json();
            console.log("parsedResponse:", parsedResponse)
            this.setState({posts: [...this.state.posts, parsedResponse]})
        } catch(err){
            console.log(err)
        }
    }
    deletePost = async (id, e) => {
        e.preventDefault();
        console.log(id, "this is deletPost id");
        
        try { 

            const deletePost = await fetch("http://localhost:8000/posts/" + id, {
                method: 'DELETE'
            });

            const parsedResponse = deletePost;

            if(parsedResponse.status === 204){
                this.setState({posts: this.state.posts.filter((posts,i) => posts.id !== id)});
            } else {
                console.log("There is a problem with delete")
            }
        } catch(err) {
            console.log(err)
        }
    }
    showModal =(id, e) => {
        const postToEdit = this.state.posts.find((post) => post.id === id);
        this.setState({
            showEdit: true,
            editPostId: id,
            postToEdit: postToEdit
        }); 
    }
    closeAndEdit = async (e) => {
        e.preventDefault();
        try{
            const editResponse = await fetch('http://localhost:8000/posts/' + this.state.editPostId,{
                method: "PUT",
                body: JSON.stringify(this.state.postToEdit),
                headers:{
                    "Content-Type":"application/json"
                }
            });

            const parsedResponse = await editResponse.json();

            const editedPostArray = this.state.posts.map((post) => {
                if(post.id === this.state.editPostId){
                    post.post_content = parsedResponse.post_content;
                }
                return post
            });

            this.setState({
                posts: editedPostArray,
                showEdit: false
            });

        }catch(err){
            console.log(err);
        }   
    }
    handleFormChange = (e) => {
        this.setState({
          postToEdit: {
            ...this.state.postToEdit,
            [e.target.name]: e.target.value
          }
        });
    }
    updateInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleSearch = (e) => {
        e.preventDefault();
        return this.state.inputValue

    }
    render(){
        
        return(
            <div>
                 <Nav history={this.history} addThread={this.addThread} />
                 
                 <div>
                    <Route exact path="/home/" render ={(props) => {
                        return(
                            <div>
                                <Threads {...props} threads = {this.state.threads} inputValue={this.state.inputValue} updateInputValue = {this.updateInputValue} handleSearch = {this.handleSearch}
                                 />
                            </div>
                        )
                    }}
                    />
                    <Route exact path ="/new/" 
                    render={(props) => {
                     return (
                         <div>
                            <CreateThread {...props}
                            addThread = {this.addThread}
                            />
                         </div>
                     )
                    }}
                    />  
                    <Route exact path = "/show/:id" 
                    render={(props) => {
                     return (
                         <div>
                            <ThreadsDetails {...props}
                            deleteThread = {this.deleteThread}
                            addThread = {this.addThread}
                            addPost = {this.addPost}
                            posts = {this.state.posts}
                            deletePost={this.deletePost}
                            showModal={this.showModal}
                            />
                            {this.state.showEdit ? <EditPost closeAndEdit={this.closeAndEdit} handleFormChange={this.handleFormChange} postToEdit={this.state.postToEdit}/> : null}
                         </div>
                     )
                    }}
                    />
                </div>
            </div>
           
        );
    }
}

export default MainContainer;

