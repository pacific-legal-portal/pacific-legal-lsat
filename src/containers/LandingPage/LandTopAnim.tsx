import React from "react";

import {Button } from "@material-ui/core";
import TopAnim from '../../Assets/img/animation-final.gif';
import history from '../../history';

import './LandingPageStyle.css';

function goToChatbotPage() {
    history.push('/assessment')
}

export default function LandTopAnim() {
    return (
        <div className="LandTopwithPic">
            <div className="landleftwords">
                <span className="h1title">LSALT2.0</span>
                <span className="h2title">Legal compliance simplified</span>
                <div className="topwords">We understand that non-profits are driven by passion, and we want to help you focus on your contributions to society and making this world a better place.
</div>
                <Button variant="contained" className="start-btn" onClick={() => goToChatbotPage()}>Start Survey</Button>
            </div>
            <img src={TopAnim}></img>

        </div>
    );
}
