
import React from 'react';
import logo from './static/secretguardian-logo.webp';
import './static/input.css';

export default function App() {
    return (
        <>
            <div className='container text-lg text-black h-[37.5rem] w-[50rem] p-4'>

                <div className='grid grid-cols-3'>
                    <img src={logo} alt="SecretGuardian's logo" className='w-72 mb-4 col-span-1 col-end-4'/>
                </div>

                <div className='grid grid-cols-3 gap-2'>
                    <div className='col-start-1 gap-4 my-4 p-2'>
                        <div className='flex gap-4 content-end'>
                            <input type="radio" name="radio" className="radio" checked />
                            <p>Encrypt Text</p>
                        </div>
                    </div>
                    <div className='col-start-2 gap-4 my-4 p-2'>
                        <div className='flex gap-4 content-end'>
                            <input type="radio" name="radio" className="radio" />
                            <p>Decrypt Text</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3'>
                    {/* add a useState to change according to the radio button selected */}
                    <textarea className="textarea textarea-bordered col-span-3 h-48" required placeholder="Type your text here"></textarea>
                    {/* <textarea className="textarea textarea-bordered col-span-3 h-48" placeholder="Paste your text here"></textarea> */}
                </div>

                <div className='grid grid-cols-3 m-4 content-center'>
                    {/* add a useState to change the info according to the radio button selected */}
                    <div className='text-center'>
                        <p>Type your key</p>
                        <div className="tooltip my-2" data-tip="hello">
                            <button className="btn btn-xs">Why do I need a key?</button>
                        </div>
                    </div>
                    <input type="password" required placeholder="Type your key" className="input w-full max-w-xs" />
                    <button className="btn w-40 justify-self-end" disabled >Encrypt Text</button>
                    {/* <button className="btn">Encrypt Text</button> */}
                </div>

            </div>
        </>
    );
}

