import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./createPost.css"


class CreatePost extends Component{
    constructor(props){
        super(props);

        this.state = {
            post_content: "",
            post_author: "",
            thread_id: this.props.threadId,
        }
    }
    updatePost = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value});
    }

    render(){
        return(
            <div>
                <Container>
                    <Row id="makeAPost">
                        <Form inline onSubmit={this.props.addPost.bind(null, this.state)} >
                            <Col sm="auto">
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Input type="text" placeholder="Author" name="post_author" onChange={this.updatePost} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Input type="textarea" placeholder="Content" name="post_content" onChange={this.updatePost} />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup id="formButton" className="mb-2 mr-sm-2 mb-sm-0">    
                                    <Button color="primary" type="submit">Submit</Button>
                                </FormGroup>
                            </Col>    
                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CreatePost;