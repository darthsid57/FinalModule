import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from '../Users/SearchBar';
import List from './vesselList';
import { Grid, Button, Segment } from 'semantic-ui-react';

export default class Vessel extends Component{

    constructor(props){
        super(props);
        this.state = {
            vessels: [],
            store: []
        };
    }

    filterNames(e){
        this.setState({vessels: this.state.store.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))})
    }

    componentDidMount(){
        axios.get('http://localhost:8080/vessels')
            .then(json => json.data.data.map(data => (
                {
                    name: `${data.vessel_name}`,
                    id: `${data.vessel_id}`,
                    flag: `${data.vessel_flag}`,
                    company: `${data.vessel_company}`
                }
            )))
            .then( newData => this.setState({vessels: newData, store: newData}))
            .catch(error => alert(error))
    }

    render(){
        const {vessels} = this.state
        return (
            <div>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
                <Grid>
                  <Grid.Row >
                      <Grid.Column >
                        <SearchBar searchFunc={(e) => this.filterNames(e)}/>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                      <Grid.Column>
                        <List vessels={vessels}/>
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
            </div>
        );
    }

}