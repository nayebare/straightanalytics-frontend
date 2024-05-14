import React, { Component} from 'react';
import { Card, CardBody, CardHeader, Col, Row, Input, FormGroup, Button, Label, CardFooter, ListGroup,ListGroupItem, Badge } from 'reactstrap';
import { uploads } from '../CSV/Component.CSV'

class ViewUploadCSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csv_file: '',
    };
  }

handleFileChange = (e) => {
    // const file = e.target.files[0];
  };

 handleFileUpload = () => {
  const  csv_file = this.state

    // Perform actions with the uploaded CSV file, e.g., send it to a server
    if ( csv_file) {
      
      // // You can use the FileReader API to read the content of the file
      // const reader = new FileReader();
      // reader.onload = (event) => {
      //   const csvContent = event.target.result;
      //   console.log(csvContent);
      //   // Now you can use the csvContent as needed
      // };
      // reader.readAsText( csv_file);
      uploads.uploadCsv().then(data => this.setState(
        {
          csv_file: csv_file,
        }));
    }
  };

  // componentDidMount() {
  //   uploads.uploadCsv().then(data => this.setState(
  //     {
  //       data: data.data,
  //       hostname: data.hostname,
  //       version: data.version,
  //       username: data.username
  //     }));
  // }


  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const { handleFileChange, handleFileUpload } = this.state;
    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardHeader>
                Merge 2 Csv files
              </CardHeader>
              <CardBody>

                <Row>
                To merge two Cvs together ensure the following. That CSV contain at least one column that has the same name and an equal number of rows
                </Row>

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Upload First Csv</Label>
                      <Input type="file" id="file-input" name="" accept=".csv" onChange={handleFileChange} />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Upload Second Csv</Label>
                      <Input type="file" id="file-input" name="" accept=".csv" onChange={handleFileChange} />
                    </FormGroup>
                  </Col>
                </Row>

                <CardFooter>
                  <Button type="submit" size="lg" color="success" onClick={handleFileUpload}><i className="fa fa-dot-circle-o"></i> Merge</Button>
                </CardFooter>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col>
            <Card>
              <CardHeader>
                Your Merged Csv File
              </CardHeader>
              <CardBody>

              <ListGroup>
                  <ListGroupItem className="justify-content-between">Cras justo odio <Badge className="float-right" pill>14</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge className="float-right" pill>2</Badge></ListGroupItem>
                  <ListGroupItem className="justify-content-between">Morbi leo risus <Badge className="float-right" pill color="warning">1</Badge></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default ViewUploadCSV;
