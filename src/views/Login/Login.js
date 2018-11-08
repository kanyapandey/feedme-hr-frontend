import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, CardHeader, CardFooter, CardBody, Form, FormGroup,
  FormText, Card, Button, Label, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
import axios from 'axios';
class Login extends Component {
constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this); 
    this.signUp = this.signUp.bind(this);
    this.Info = this.Info.bind(this);
}  
handleChange(event)  {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}
signUp(event){
  this.props.history.push('signup');
};
Info(event){
  this.props.history.push('info');
}
checkLogin(event){
  axios({
    method: "post",
    url: "http://localhost:1337/api/v1/users/authenticate/",
    data: {   
        username: this.state.username,
        password: this.state.password   
    }
  }).then(response => {
    if (response.data.success === true) {
      localStorage.setItem('token', response.data.token);
        this.props.history.push('/dashboard');
      }
    else {
      alert(response.data.msg);
    }
  });
}
render() {
    return (
<div className="app flex-row align-items-center">
        <Container>
        <Row className="justify-content-center">
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Login</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="user-input">Username</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="username" name="username" value={this.state.username}
                        onChange={this.handleChange} placeholder="User Name"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password-input">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password" name="password" value={this.state.password}
                        onChange={this.handleChange} placeholder="Password"/>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Row>
                      <Col xs="6">
                        <Button color="primary" onClick={this.Info} className="px-4">Login</Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" onClick={event=>this.signUp(event)} className="px-0">Sign Up ?</Button>
                      </Col>
                      {/* <Col xs="3" className="text-right">
                        <Button color="link" className="px-0">Forgot password?</Button>
                      </Col> */}
                    </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
