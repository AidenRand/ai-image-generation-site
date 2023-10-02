import React, { useRef } from 'react';
import '../styling/home.scss';
import SubmitIcon from '../assets/submit.png';

function Home() {
    const inputRef = useRef(0);
    return (
        <div className='home-container'>
            <div className='input-container'>
                <input
                    ref={inputRef}
                    className='input-box'
                    placeholder='A cat riding a dog while blepping'
                    type='text'
                ></input>

                <button className='submit-btn'>
                    <img src={SubmitIcon} alt='submit-icon' />
                </button>
            </div>
        </div>
    );
}

export default Home;
