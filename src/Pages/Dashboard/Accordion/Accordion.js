
import React, {useState, useRef} from 'react';
import './Accordion.css';
import Chevron from './Chevron/Chevron';
import {FiMoreHorizontal} from 'react-icons/fi'
import {IoMdTrophy, IoMdStar} from 'react-icons/io';

export default function Accordion(props){
    const [active, setActive] = useState("")
    const [height, setHeight] = useState("0px")
    const [rotate, setRotate] = useState("accordion_icon")

    const content = useRef(null);

    function toggleAccordion(){
        setActive(active === "" ? "active" : "")
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotate(active === "active" ? "accordion_icon" : "accordion_icon rotate")
        console.log(content.current.scrollHeight)
    }
    return(
        <>
        <div className="highliht_section">
            <div class=" highliht_header bg-white block border-b-2 py-2 border-gray-400">
                <div class="hightlith_title_content bg-white block text-center md:text-left">
                    <label class="highlith_title mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300">
                        HIGHLITHS
                    </label>
                </div>
                <div className="space-y-2 mt-4">
                    <div className="text-gray-500 space-x-4">
                        <IoMdStar className="inline" size="1.5em" />
                        <span classname="text-gray-500"><b className="text-green-500">35 XP</b> . Level 1</span>
                    </div>
                    <div className="text-gray-500 space-x-4">
                        <IoMdTrophy className="inline" size="1.5em" />
                        <span>Top 25.84% this week</span>
                    </div>
                </div>
            </div>
            <div className="accordion_section">
                <div className="accordion">
                    <div className="accordion_title">
                        <div className="titlebox">
                            <p className="title">104</p>
                        </div>
                        <div className="titlebox">
                            <p className="title">95</p>
                        </div>
                        <div className="titlebox">
                            <p className="title">10</p>
                        </div>
                        <div className="titlebox">
                            <p className="title">9</p>
                        </div>
                        <div className="titlebox">
                            <p className="title">1002</p>
                        </div>
                        <div className={`titleboxbtn ${active}`} onClick={toggleAccordion}>
                            <p className="btn">
                                <FiMoreHorizontal size="2em"/>
                            </p>
                        </div>
                    </div>
                    <Chevron className={`${rotate}`} size={"1.5em"} color={"#444"} position={"right"}/>
                </div>
                <div
                    ref={content}
                    style={{maxHeight:`${height}`}}
                    className="accordion_content">
                    <div
                        className="accordion_text"
                    >
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}