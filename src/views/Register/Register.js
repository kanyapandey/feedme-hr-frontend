import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from "reactstrap";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCode = this.getCode.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  /* LOCALHOST  */
  // getCode(){
  //   axios({
  //       method: "post",
  //       url: "http://localhost:1337/api/v1/register/register-email",
  //       data: {
  //           email: this.state.email,
  //         }
  //     }).then(response => {
  //       if (response.data.success === true) {
  //           console.log("response",response.data);
  //       //   this.props.history.push("/employee");
  //       } else {
            
  //         alert(response.data.msg);
  //       }
  //     });

  // }

  getCode(){
    axios({
        method: "post",
        url: "https://iamfeedme.herokuapp.com/api/v1/register/register-email",
        data: {
            email: this.state.email,
          }
      }).then(response => {
        if (response.data.success === true) {
            console.log("response",response.data);
        //   this.props.history.push("/employee");
        } else {
            
          alert(response.data.msg);
        }
      });

  }
  render() {
    return (
      <div className="animated fadeIn">
          <div>
            <Row>
              <Col xs="12" md="12">
                <Card>
                  <CardHeader>
                    <strong>User Info</strong>
                  </CardHeader>
                  <CardBody className="card-body">
                    <Form
                      action=""
                      method="post"
                      encType="multipart/form-data"
                      className="form-horizontal"
                    >
                      <FormGroup row>
                        <Col xs="12" sm="6">
                          <Row>
                            <Col xs="12" sm="4">
                              <Label>User Email</Label>
                            </Col>
                            <Col xs="12" sm="8">
                              <Input
                                id="email"
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                              />
                              
                            </Col>
                            <Col xs="12" sm="8">
                             <Button color="secondary" onClick={this.getCode} className="three px-2" size="sm">Register</Button>
                            </Col>
                          </Row>
                          <br />
                        </Col>
                      </FormGroup>

                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
      </div>
    );
  }
}
export default Register;
