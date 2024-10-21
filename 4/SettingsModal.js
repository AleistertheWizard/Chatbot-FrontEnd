import React from 'react';

const SettingsModal = ({ isOpen, onClose, toggleTheme, isDarkMode }) => {
    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Settings</h2>
                <label>
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={toggleTheme}
                    />
                    Dark Mode
                </label>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SettingsModal;