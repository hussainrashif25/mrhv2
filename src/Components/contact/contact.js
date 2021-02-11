import React, { Component } from 'react';
import '../work/work.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


class contact extends Component {
    render() {
        return(
            <div class="Container">
                <div class="header">
                    <h1>Contact Me</h1>
                </div>
                <div class="row">
                    <div class="column one-third link">
                        <Fade left>
                        <h3>
                        <a class="link" href="https://github.com/hussainrashif25">Github</a>
                        </h3>
                        </Fade>
                    </div>
                    <div class="column one-third link">
                        <Fade bottom>
                        <h3>
                        <a class="link" href="https://www.linkedin.com/in/mohammad-hussain">Linkedin</a>
                        </h3>
                        </Fade>
                    </div>
                    <div class="column one-third link">
                        <Fade right>
                        <h3>
                        <a class="link" href="mailto:hussainrashif25@gmail.com">Email</a>
                        </h3>
                        </Fade>
                    </div>
                </div>

            </div>
            
        );
    }

}

export default contact;