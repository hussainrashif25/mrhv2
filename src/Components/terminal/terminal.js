import React, { Component } from 'react';
import './terminal.css';
import Typed from 'typed.js';
import Fade from 'react-reveal/Fade';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import { IconContext } from "react-icons";


class termnial extends Component {

    componentDidMount() {
        var options = {
          strings: ['> console.log("Mohammad Rashif Hussain")', 
          '> console.log("Computer Engineering Student")',
          '> Welcome to my site!!!' ],
          typeSpeed: 40,
          fadeOut: true
        }
        var typed = new Typed(this.el, options);
      };

    

    render() {

        return (
            <div>
                <div class="fakeMenu">
                    <div class="fakeButtons fakeClose"></div>
                    <div class="fakeButtons fakeMinimize"></div>
                    <div class="fakeButtons fakeZoom"></div>
                </div>

                <div class="fakeScreen">
                    <div className="nameHeading">
                        <Fade bottom delay={3000}>
                        <h2>Mohammad</h2>
                        </Fade>
                        <Fade bottom delay={4000}>
                        <h2>Rashif</h2>
                        </Fade>
                        <Fade bottom delay={5000}>
                        <h2>Hussain</h2>
                        </Fade>
                        <Fade bottom delay={7000}>
                        <h3>Computer Engineering Student</h3>
                        </Fade>
                    </div>

                    <h1>
                        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                            <Fade bottom delay={8000}>
                                <button 
                                onClick={(e)=>{
                                    e.preventDefault();
                                    window.location.href='https://github.com/hussainrashif25';
                                }}>
                                <FaGithub/>
                                </button>
                                </Fade>
                            <Fade bottom delay={9000}>
                                <button className="icon"
                                onClick={(e)=>{
                                e.preventDefault();
                                window.location.href='https://www.linkedin.com/in/mohammad-hussain';
                                }}>
                                <FaLinkedinIn/>
                                </button>
                            </Fade>
                            <Fade bottom delay={10000}>
                                <button className="icon"
                                onClick={(e)=>{
                                e.preventDefault();
                                window.location.href='mailto:hussainrashif25@gmail.com';
                                }}>
                                <FaEnvelope/>
                                </button>
                            </Fade>
                        </IconContext.Provider>
                    </h1>

                 <div className="terminaltext">
                    <span ref={(el) =>{this.el = el;}}/>
                 </div>
                    
                </div>
            </div>
        );
    }
}

export default termnial;