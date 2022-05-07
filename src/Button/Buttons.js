import React from "react";
import "./button.css"
import "./button.scss";
import {Link} from "react-router-dom";

function Buttons(){
    return(
        <div className="ButtonsMainDiv">
            <div>
                <button className="Button-Design-1">Button-1</button>
            </div>
            <div>
                <button className="Button-Design-2">Button-2</button>
            </div>
            <div>
                <button className="Button-Design-3">Button-3</button>
            </div>
            <div>
                <button className="Button-Design-4">Button-4</button>
            </div>
            <div>
                <button className="Button-Design-5">Button-5</button>
            </div>
            <div>
                <button className="Button-Design-6">Button-6</button>
            </div>
            <div>
            <button className="Button-Design-7">Button-7</button>
            </div>
            <div>
            <Link className="Button-Design-8">Button-8</Link>
            </div>
            <div>
                <Link href="#" className="Button-Design-9"><span>Button-9</span></Link>
            </div>
            <div>
            <Link href="#" class="Button-design-10" data-back="Back-Button-10" data-front="Front-Button-10"></Link>
            </div>
            <div>
                <Link href="#" class="Button-Design-11">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Button
                </Link>
            </div>
        </div>
    )
}

export default Buttons;