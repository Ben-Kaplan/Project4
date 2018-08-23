import React from "react";
import { Button, ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';
import { Media } from 'reactstrap';
import "./posts.css"


const Posts = (props) => {
    console.log(props);
    const postsList = props.posts.map((post, i) => {
        if (post.thread_id === props.threadId) {
            return (
                <Container>
                    <Row id="postDetails" >
                        <Col>
                            <ListGroup>
                                <ListGroupItem>
                                    <div key = {post.id}>
                                        <Media>
                                            <Media left href="#">
                                            <Media object src="https://i.imgur.com/00hmTnv.png" alt="" />
                                            </Media>
                                            <Media body>
                                                {post.post_author}: {post.post_content}
                                                <br/>
                                                <Button color="danger" size="sm" onClick={props.deletePost.bind(null,post.id)}> Delete </Button>
                                                <Button color="primary" size="sm" onClick={props.showModal.bind(null,post.id)}> Edit </Button>
                                            </Media>
                                        </Media>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            )
        }
    })
    return (
        <div>
            {postsList}
        </div>
    )
}

export default Posts