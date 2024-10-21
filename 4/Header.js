// src/Header.js
import React, { useState } from 'react';
import './Header.css';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Header = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSignupOpen, setSignupOpen] = useState(false);

    return (
        <>
            <header className="header">
                <button className="header-button">New Conversation</button>
                <div className="header-buttons">
                    <button className="header-button" onClick={() => setLoginOpen(true)}>Login</button>
                    <button className="header-button" onClick={() => setSignupOpen(true)}>Signup</button>
                </div>
            </header>

            <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
            <SignupModal isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} />
        </>
    );
};

export default Header;