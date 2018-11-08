import React, {Component} from 'react';
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Input,
  Button,
  UncontrolledButtonDropdown,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const FEEDBACK_STATUS = {
    DONE: 'DONE',
    SUBMIT: 'SUBMIT',
    ACTION: 'ACTION',
};

class Feedback extends Component {
    constructor(props) {
        super(props);
    
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.select = this.select.bind(this);

        this.state = {
          dropdownOpen: false,
          value: 'Active',
          tableData: [
            {
              feedbackId: 'Vishnu Serghei',
              feedbackCat: 'bla',
              feedbackSub: 'problem',
              description: 'this is it',
              status: FEEDBACK_STATUS.DONE,
              response: 'i like this',
              rating: '4',
              clientId: '1234'
            },
            {
                feedbackId: 'Vishnu Serghei',
                feedbackCat: 'bla',
                feedbackSub: 'problem',
                description: 'this is it',
                status: FEEDBACK_STATUS.DONE,
                response: 'i like this',
                rating: '4',
                clientId: '1234'
            },
            {
                feedbackId: 'Vishnu Serghei',
                feedbackCat: 'bla',
                feedbackSub: 'problem',
                description: 'this is it',
                status: FEEDBACK_STATUS.DONE,
                response: 'i like this',
                rating: '4',
                clientId: '1234'
            },
            {
                feedbackId: 'Vishnu Serghei',
                feedbackCat: 'bla',
                feedbackSub: 'problem',
                description: 'this is it',
                status: FEEDBACK_STATUS.DONE,
                response: 'i like this',
                rating: '4',
                clientId: '1234'
            }
          ],
        };
    }
    
    handleEmailChange(event, index) {
        const { tableData } = this.state;
    
        tableData[index].email = event.target.value;
    
        this.setState({ tableData: tableData });
    }
    
    select(status, index) {
        const { tableData } = this.state;
    
        tableData[index].status = status;
    
        this.setState({ tableData: tableData });
    }

    render() {
        const { tableData } = this.state;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                            </CardHeader>
                            <CardBody>
                                <Table hover bordered striped responsive size="sm">
                                    <thead>
                                        <tr>
                                            <th>Feedback Id</th>
                                            <th>Feedback Category</th>
                                            <th>Feedback Subject</th>
                                            <th>Description</th>
                                            <th>Status</th>
                                            <th>Response</th>
                                            <th>Rating</th>
                                            <th>Client Id</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((row, index) => {
                                        return (
                                        <tr key={row.feedbackId}>
                                            <td>{row.feedbackId}</td>
                                            <td>{row.feedbackCat}</td>
                                            <td>{row.feedbackSub}</td>
                                            <td>{row.description}</td>
                                            <td>
                                            <UncontrolledButtonDropdown>
                                                <DropdownToggle caret size="sm">
                                                    {row.status}
                                                </DropdownToggle>

                                                <DropdownMenu>
                                                    <DropdownItem
                                                    onClick={() =>
                                                        this.select(FEEDBACK_STATUS.DONE, index)
                                                    }
                                                    >
                                                    DONE
                                                    </DropdownItem>
                                                    <DropdownItem
                                                    onClick={() =>
                                                        this.select(FEEDBACK_STATUS.SUBMIT, index)
                                                    }
                                                    >
                                                    SUBMIT
                                                    </DropdownItem>
                                                    <DropdownItem
                                                    onClick={() =>
                                                        this.select(FEEDBACK_STATUS.ACTION, index)
                                                    }
                                                    >
                                                    ACTION
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            </td>
                                            <td>{row.response}</td>
                                            <td>{row.rating}</td>
                                            <td>{row.clientId}</td>
                                        </tr>
                                        );
                                    })}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Feedback;