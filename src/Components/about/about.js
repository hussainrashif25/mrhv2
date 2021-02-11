import React, { Component } from 'react';
import './about.css';
import pp from '../../images/profilepic.jpg';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class about extends Component {
    render() {
        return (
            <div class="Container">
                <div class="header">
                    <Fade bottom>
                    <h1>About Me</h1>
                    </Fade>
                </div>
                <div class="row spacing">
                    <div class="one-half column profile-picture">
                        <Slide left>
                        <div>
                        <img src={pp} class="profile-picture"/>
                        </div>
                        </Slide>
                    </div>
                    <div class="one-half column text">
                        <Slide right>
                        <p>Thank you for stopping by! My name is Mohammad and I am a Computer Engineering Student at Ryerson University. <br/> 
                        Here is a preview of my past projects and work. I have always been interested in computers and software and would love <br/>
                        to share my knowledge and skills. You can find my contact information below!</p>
                        </Slide>
                    </div>
                </div>
            </div>
        );
    }
}

export default about;