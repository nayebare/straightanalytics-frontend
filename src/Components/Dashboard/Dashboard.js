import React, { Component} from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { devices } from './../Devices/Component.Devices'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      hostname: '',
      system_name: '',
      version: '',
      username: ''
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }


  componentDidMount() {
    devices.getDevices().then(data => this.setState(
      {
        data: data.data,
        hostname: data.hostname,
        version: data.version,
        username: data.username
      }));
  }


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    // const {  } = this.state;
    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardHeader>
                About
              </CardHeader>
              <CardBody>
                <Row>
                  <hr className="mt-0" />
                  <Col xs="12" md="6" xl="6">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">System Name</small>
                          <br />
                          <strong className="h4">9,123</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-danger">
                          <small className="text-muted">Host Name</small>
                          <br />
                          <strong className="h4">22,643</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs="12" md="6" xl="6">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-warning">
                          <small className="text-muted">Version</small>
                          <br />
                          <strong className="h4">78,623</strong>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-success">
                          <small className="text-muted">Username</small>
                          <br />
                          <strong className="h4">49,123</strong>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
