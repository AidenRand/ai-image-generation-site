import React, { useRef } from 'react';
import '../styling/home.scss';
import SubmitIcon from '../assets/submit.png';
import OpenAI from 'openai';

async function getImage(user_input) {
    const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
    });

    const response = await openai.createImage({
        prompt: user_input,
        n: 1,
        size: '1024x1024',
    });

    console.log(response);
}

function Home() {
    const inputRef = useRef(0);

    const handleInput = async () => {
        const user_input = inputRef.current.value;

        try {
            const response = getImage(user_input);
            console.log(response);
        } catch (err) {
            console.log('There was an error with the open ai call', err);
        }

        inputRef.current.value = '';
    };
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
                    <img
                        src={SubmitIcon}
                        alt='submit-icon'
                        onClick={handleInput}
                    />
                </button>
            </div>
        </div>
    );
}

export default Home;
