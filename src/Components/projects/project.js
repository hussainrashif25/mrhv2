import React, { Component } from 'react';
import '../work/work.css';
import icount from '../../images/icount.gif';
import rps from '../../images/rps.gif';
import cit from '../../images/cit.gif';
import ocs from '../../images/ocs.gif';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


class project extends Component {
    render() {
        return(
            <div class="Container">
                <div class="header">
                    <Fade bottom>
                    <h1>Projects</h1>
                    </Fade>
                </div>
                <div class="row spacing">
                    <div class="one-half column picture-2">
                        <Slide left>
                        <div>
                            <img src={icount} class="picture-2" alt="Online Cleaning Service"/>
                        </div>
                        </Slide>
                    </div>
                    <div class="one-half column text">
                        <Slide right>
                        <h4>
                        <a class="link" href="/">iCount</a>
                        </h4>
                        <p>iCount, is my 4th year capstone project that used Machine Learning to help businesses track customers in physical retail locations (during the COVID epidemic). The application utilized the YOLOv3 Convolutional Neural Network for object detection and DeepSORT (Simple Online Realtime Tracking) for object tracking. Using a
customized dataset, the model was trained to detect if people were to close to eachother and to display a counter of the number of people in a store.   
                             </p>
                        </Slide>
                    </div>
                </div>
                <div class="row spacing">
                    <div class="one-half column picture-2">
                        <Slide left>
                        <div>
                            <a href="https://github.com/hussainrashif25/online-cleaning-service-system">
                                <img src={ocs} class="picture-2" alt="Online Cleaning Service"/>
                            </a>    
                        </div>
                        </Slide>
                    </div>
                    <div class="one-half column text">
                        <Slide right>
                        <h4>
                        <a class="link" href="https://github.com/hussainrashif25/online-cleaning-service-system">Online Cleaning Service</a>
                        </h4>
                        <p>A school project to create a "Software as a Service" website for customers looking to hire cleaners. 
                            The website is created with Express.js, Handlebars.js and MongoDB for the database. 
                            The site allows for "Customers" and "Workers" to register, login, hire/deny service, withdraw payments and search for workers.</p>
                        </Slide>
                    </div>
                </div>
                <div class="row spacing">
                    <div class="one-half column picture-2">
                        <Slide left>
                        <div>
                            <a href="https://rock-paperscissors.herokuapp.com/">
                                <img src={rps} class="picture-2" alt="Rock, Paper, Scissors"/>
                            </a>    
                        </div>
                        </Slide>
                    </div>
                    <div class="one-half column text">
                        <Slide right>
                        <h4>
                        <a class="link" href="https://rock-paperscissors.herokuapp.com/">Rock, Paper, Scissors</a>
                        </h4>
                        <p>Rock, Paper, Scissors is the classic game implemented as a web app using React, that leverages the use of "WebSockets" for multiplayer functionality.
                        Simply join the game with an opponent, make your move and see the result! All game logic is processed through a Express.js server using a REST API. 
                        Send the link to a friend and try it out!</p>
                        </Slide>
                    </div>
                </div>
                <div class="row spacing">
                    <div class="one-half column picture-2">
                        <Slide left>
                        <div>
                            <a href="https://comebackinthrity.netlify.app/">
                                <img src={cit} class="picture-2" alt="comebackinthirty"/>
                            </a>
                        </div>
                        </Slide>
                    </div>
                    <div class="one-half column text">
                        <Slide right>
                        <h4>
                        <a class="link" href="https://comebackinthrity.netlify.app/">comebackinthirty</a>
                        </h4>
                        <p>Comebackinthirty is a time managment app made with Vue.js. Using the client's localstorage, the app stores your daily events in thirty minute time slots.
                        Instead of logging events ahead of time, you would "comebackinthirty" to create, delete or update what you had done. In the future, I am looking forward to
                        implementing this as mobile app by utilzing "Vue Native".</p>
                        </Slide>
                    </div>
                </div>

                </div>

        );
    }
}

export default project;