import React, { Component } from 'react';
import { Card, CardHeader, Col, Row } from 'reactstrap';
import { uploads } from '../CSV/Component.CSV'
// import MUIDataTable from "mui-datatables";
// import DataTable from 'react-data-table-component';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

class SearchCsv extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: [],
            fileInfos: []

        };
    }

    componentDidMount() {

        uploads.getConvertedCsvs().then((response) => {
            this.setState({
                fileInfos: response.csv_data,
                columns: response.headers 
            });
        });
    }


    render() {

        const { fileInfos, columns } = this.state;

        return (
            <div className="animated fadeIn">

                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Search CSV
                            </CardHeader>
                            
                                {/* <MUIDataTable
                                    title={"Employee List"}
                                    data={fileInfos}  
                                    columns={columns}   
                                    />  */}

                                {/* <DataTable
                                    columns={columns}
                                    data={fileInfos}
                                /> */}
                                <div className="card">

                                <DataTable value={fileInfos} paginator rows={30} rowsPerPageOptions={[20, 40, 50]} showGridlines tableStyle={{ minWidth: '50rem' }}>
                                    {columns.map((col, i) => (
                                        <Column key={col.field} field={col.field} header={col.header} />
                                    ))}
                                </DataTable>
                                </div>


                          
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SearchCsv;
