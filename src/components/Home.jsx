import React, { useRef } from 'react';

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
            </div>
        </div>
    );
}

export default Home;
