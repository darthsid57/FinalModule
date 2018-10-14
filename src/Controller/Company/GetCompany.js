import React, { Component } from 'react';
import axios from 'axios'
import {Grid} from 'semantic-ui-react'
import List from './CompanyList';

export default class CompanyList extends Component{
    constructor(props){
        super(props);
        this.state = {
            company: [],
            store: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:8080/company')
            .then(json => json.data.data.map(data => (
                {
                    id: `${data.id}`,
                    companyName: `${data.company_name}`,
                    companyCity: `${data.company_city}`,
                    companyCountry: `${data.company_country}`,
                    companyEmail:`${data.company_email}`,
                    companyPhone: `{data.company_phone}`,
                    companyStatus: `${data.company_status}`
                }
            )))
            .then( newData => this.setState({company: newData, store: newData}))
            .catch(error => alert(error))
    }

    render(){
        const {company} = this.state
        return(
            <div>
            <Grid>
                <List companies={company} />
            </Grid>
            </div>
        )
    }
}