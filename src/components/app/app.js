import React, { Component }  from 'react';
import './app.css';
import TableapiService from '../../services/tableapi-service';
import {TableapiServiceProvider} from '../tableapi-service-context';
import LeftSide from '../leftSide';
import RightSide from '../rightSide';


export default class App extends Component {
    state = {
        id: "",
    }  
    TableapiService = new TableapiService();

    updateID = (id) => {
        this.setState({
            id: id,
        });
    };
    
    render () {
        const {id, sort} = this.state;

        return (
            <TableapiServiceProvider 
                value={this.TableapiService}
            >
                <main className="main">
                    <LeftSide updateID={this.updateID}/>
                    <RightSide id={id}/>
                </main>
            </TableapiServiceProvider>
        )
    }    
}