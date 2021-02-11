import React, { Component } from 'react';
import '../work/work.css';
import MyForm from './form';

class contact extends Component {
    render() {
        return(
            <div class="Container">
                <div class="header">
                    <h1>Contact Me</h1>
                </div>
                <div>
                    <MyForm/>
                </div>
            </div>
            
        );
    }
}

export default contact;