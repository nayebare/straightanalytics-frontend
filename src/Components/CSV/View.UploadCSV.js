import React, { Component} from 'react';
import { Card, CardBody, CardHeader, Col, Row, Input, FormGroup, Button, Label, CardFooter, ListGroup, ListGroupItem, NavLink } from 'reactstrap';
import { uploads } from '../CSV/Component.CSV'

class ViewUploadCSV extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",

      fileInfos: [],
    };
  }

  selectFile(event) {
    this.setState({
      selectedFiles: event.target.files,
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile: currentFile,
    });

    }
  

  componentDidMount() {
    uploads.getCsvs().then((response) => {
      console.log("view-component", response)
      this.setState({
        fileInfos: response,
      });
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const { 
      fileInfos ,
      selectedFiles,
      currentFile,
      progress,
      message,
       } = this.state;
    return (
      <div className="animated fadeIn">
        {currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        <Row>
          <Col>
            <Card>
              <CardHeader>
                Upload CSV
              </CardHeader>
              <CardBody>

                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Upload Csv</Label>
                      <Input type="file" id="file-input" name="" onChange={this.selectFile} accept=".csv"  />
                    </FormGroup>
                  </Col>
                </Row>

                <CardFooter>
                  <Button type="submit" size="lg" color="success" onClick={this.upload} disabled={!selectedFiles} ><i className="fa fa-dot-circle-o"></i> Upload File</Button>
                </CardFooter>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="alert alert-light" role="alert">
          {message}
        </div>


        <Row>
          <Col>
            <Card>
              <CardHeader>
                Your Uploaded Cvs
              </CardHeader>
              <CardBody>

              <ListGroup>
              {fileInfos &&
              fileInfos.map((file, index) => (
                
                <ListGroupItem className="justify-content-between" key={index}>      
                  <NavLink href="/csv/search">{file}</NavLink>
                  </ListGroupItem>
              ))}
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
