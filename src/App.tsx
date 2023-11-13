
import React from 'react';
import logo from './static/secretguardian-logo.webp';
import './static/input.css';
import { useState } from 'react';

export default function App() {
    const [input, setInput] = useState('')
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [encrypt, setEncrypt] = useState(true);

    return (
        <>
            <div className='container text-lg text-black h-[37.5rem] w-[50rem] p-4 bg-slate-50'>

                <div className='grid grid-cols-3'>
                    <img src={logo} alt="SecretGuardian's logo" className='w-72 mb-4 col-span-1 col-end-4'/>
                </div>

                <div className='grid grid-cols-4 gap-2 place-items-center'>
                    <div className='col-start-1 gap-4 my-4 p-2'>
                        <div className='flex gap-4 place-items-center'>
                            <input type="radio" name="radio" className="radio" checked={encrypt} onClick={() => setEncrypt(true)} />
                            <p>Encrypt Text</p>
                        </div>
                    </div>
                    <div className='col-start-2 gap-4 my-4 p-2'>
                        <div className='flex gap-4 place-items-center'>
                            <input type="radio" name="radio" className="radio" checked={!encrypt} onClick={() => setEncrypt(false)}/>
                            <p>Decrypt Text</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3'>
                    <textarea 
                    required 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={encrypt ? 'Type the text to be encrypted here' : 'Paste the encrypted text here'}
                    className='textarea textarea-bordered col-span-3 h-48 focus:outline-none bg-transparent' 
                    />
                </div>

                <div className='grid grid-cols-4 m-4 place-items-center'>
                    <div className='col-span-3 justify-self-start ml-2'>
                        <div className='flex place-items-center'>
                            <input 
                            required 
                            value={password}
                            type={visible ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={encrypt ? 'Create your key' : 'Inform your key'}  
                            className='input w-full max-w-xs border-b-slate-300 border-t-0 border-r-0 border-l-0 rounded-none focus:outline-none bg-transparent' 
                            />

                            <div 
                            onClick={() => setVisible(!visible)}
                            className='mx-4 hover:cursor-pointer'
                            >
                                {visible ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-slate-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-slate-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                }
                            </div>
                        </div>

                        <div 
                        className="tooltip my-2 tooltip-right" 
                        data-tip="The key is a special code that locks and unlocks your secret text. The purpose
                        of a key when encrypting text, is that this key will define the randomness of your encryption. 
                        By creating your own key, you add an extra layer of security to your encryption and ensure 
                        that your text cannot be broken. Here, you can create a personalized key and therefore only 
                        you and those with access to this key can decrypt the text. A key can be any word you desire 
                        mixed or not with numbers. Examples of keys are 'LoveMyCat' or 'k9JDI4ehu'. We suggest you 
                        using 6-8 characters for your key. ATTENTION: when you create a key, you have to memorize 
                        it. If you lose this key, you won't be able to decrypt your text ever again. If someone has 
                        access to your key, this person will be able to decrypt your text."
                        >
                            <button className="btn btn-xs">Why do I need a key?</button>
                        </div>
                    </div>


                    <button 
                    className='btn w-40 justify-self-start col-start-4 bg-black text-slate-50 hover:bg-slate-500 ' 
                    disabled={input.trim() === '' || password.trim() === ''}
                    >
                        {encrypt ? 'Encrypt Text' : 'Decrypt Text'}
                    </button>
                </div>

            </div>
        </>
    );
}
