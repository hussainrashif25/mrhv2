import React, { Component } from 'react';
import './work.css';
import cabana from '../../images/cabana.png';
import scorpion from '../../images/scorpion.jpg';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


class work extends Component {
    render() {
        return(
            <div class="Container">
                <div class="header">
                    <Fade bottom>
                    <h1>Work Experience</h1>
                    </Fade>
                </div>
                <div class="row spacing">
                    <div class="one-half column picture">
                        <Slide left>
                        <div>
                        <img src={cabana} class="picture"/>
                        </div>
                        </Slide>
                    </div>
                    <div class="one-half column text">
                        <Slide right>
                        <h4>Cabana Health</h4>
                        <p>Currently working here! Developing a social health iOS app using SwiftUI and Google Firebase that will revolutionize how we accomplish health goals.</p> 
                        </Slide>
                    </div>
                </div>
                <div class="row spacing">
                    <div class="one-half column picture">
                        <Slide left>
                        <div>
                        <img src={scorpion} class="picture"/>
                        </div>
                        </Slide>
                    </div>
                    <div class="one-half column text">
                        <Slide right>
                        <h4>Freelance Work</h4>
                        <p>In progress. Developing a website for a local contractor, using React.js.</p> 
                        </Slide>
                    </div>
                </div>

            </div>
        );
    }
}

export default work;