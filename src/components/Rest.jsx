import React from 'react';
import { useState, useEffect, useRef } from "react";



export default function Rest() {
    // const [intersecting, setIsintersecting] = useState(false);
    const [newStyle, setNewStyle] = useState('1');
    const [oldStyle, setOldStyle] = useState('50px');

    const myElement = useRef('');
    const content = useRef('');
    // const myElement3 = useRef('');
    // const myElement4 = useRef('');
    // const myElement5 = useRef('');
    // const myElement6 = useRef('');
    // const myElement7 = useRef('');

    const options = {
        rootmargin: '-100px 0px 0px 0px',
        threashold: 1
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const rightNow = entry.target
            if (entry.isIntersecting) {
                console.log(entry)
                rightNow.style.left = oldStyle;
                rightNow.style.opacity = newStyle;
                rightNow.style.transitionDelay = '0.2s';

                
            }else{
                return;
            }
        })
    }, options)

    const options1 = {
        rootmargin: '-120px 0px 0px 0px',
        threashold: 0.2
    }

    
    const Observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const rightNow = entry.target;
            if (entry.isIntersecting) {
                console.log(entry.isVisible)
                myElement.current.classList.add('red')

            } else {
                myElement.current.style.backgroundColor = '';
            }
        });
    }, options1);





    useEffect(() => {
        const nav = document.getElementsByTagName('nav');
        const content1 = content.current;
        const myElement1 = myElement.current;

        if (myElement.current && content.current) {
       

        
        console.log(myElement1, content1)
        Observer.observe(content1);
        }

       

        const elements = document.querySelectorAll('#lazyload');
        elements.forEach(el => {
            observer.observe(el);
        })

    })


    return (
        <div>
            <nav ref={myElement}>
                <ul>
                    <li>home</li>
                    <li>logo</li>
                    <li>lists</li>
                    <li>kokosamol</li>
                </ul>
            </nav>

            <div className="content" ref={content}>
                <div id="lazyload" className="div1">
                </div>
                <div id="lazyload" className="div2">
                </div>
                <div id="lazyload" className="div3">
                </div>
                <div id="lazyload" className="div4">
                </div>
                <div id="lazyload" className="div5">
                </div>
                <div id="lazyload" className="div6">
                </div>
                <div id="lazyload" className="div1">
                </div>
                <div id="lazyload" className="div2">
                </div>
                <div id="lazyload" className="div3">
                </div>
                <div id="lazyload" className="div4">
                </div>
                <div id="lazyload" className="div5">
                </div>
                <div id="lazyload" className="div6">
                </div>
                <div id="lazyload" className="div1">
                </div>
                <div id="lazyload" className="div2">
                </div>
                <div id="lazyload" className="div3">
                </div>
                <div id="lazyload" className="div4">
                </div>
                <div id="lazyload" className="div5">
                </div>
                <div id="lazyload" className="div6">
                </div>
            </div>
        </div>
    )
}