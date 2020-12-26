import React, { Component } from 'react';
import Header from '../header';
import Menu from '../menu';

import './leftSide.css';

export default class LeftSide extends Component {
    render() {
        return (
            <div className="leftSide">
                <Header 
                    text="Меню" 
                    showHidden={true}
                />
                <Menu {...this.props}/>
            </div>
        )
    }
};
