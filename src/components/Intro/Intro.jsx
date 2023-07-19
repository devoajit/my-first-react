import React from "react";
import './Intro.css';

const Intro = ()=>{
    return(
        //two divs
        <div className="intro">
            <div className="i-left">
                <h1>Hy! I Am</h1>
                <h1 className="i-name">Ajit Gupta</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, aliquid. Eos quaerat necessitatibus unde.</p>
                <button className="button">Hire Me</button>
            </div>
            <div className="i-right">hello</div>
        </div>
    )
}

export default Intro;