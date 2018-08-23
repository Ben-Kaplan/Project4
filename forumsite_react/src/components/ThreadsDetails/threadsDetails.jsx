import React, { Component } from 'react'
import { Button, ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';
import CreatePost from "../CreatePost/createPost.jsx"
import Posts from "../Posts/posts.jsx"
import "./threadsDetails.css"


class ThreadDetails extends Component {
    render() {
        const shownThread = this.props.location.state.threadPotato
        console.log("shownThread:", shownThread)
        return (
            <Container>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroupItem>
                                <div className="ThreadDetails" >
                                    <h1>{shownThread.thread_title}</h1>
                                    <h4>{shownThread.thread_author}</h4>
                                    <Button size="sm" color="danger" onClick={this.props.deleteThread.bind(null, shownThread.id)}>Delete</Button>
                                    <br/>
                                    <br/>
                                </div>
                            </ListGroupItem>
                            <ListGroupItem>
                            <h3 id="commentHead" >Comment on a thread</h3>
                                <CreatePost threadId = {shownThread.id} addPost = {this.props.addPost} />
                                <Posts threadId = {shownThread.id} deletePost={this.props.deletePost} posts = {this.props.posts} showModal={this.props.showModal} />
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default ThreadDetails;