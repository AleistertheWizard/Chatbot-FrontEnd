import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Username" required className="dark-input" />
                    <input type="password" placeholder="Password" required className="dark-input" />
                    <button type="submit">Login</button>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default LoginModal;