import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import error from '../img/error.png'
import '../styles/error.css'
import Nav from './Nav'

export default function Notfound() {
    return (
        <div className='container'>
            <div className='containerSmall'>
                <div>< Nav /></div>
            </div>
            <div className='errorDiv'>
                <div>
                    <img alt='404 Image' src={error}/>
                </div>
            </div>
        </div>
    )
}