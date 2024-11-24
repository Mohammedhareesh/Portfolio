import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './route/router';

const App = () => {
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {

        
        const handleContextMenu = (e) => {
            e.preventDefault();
            setShowWarning(true);
            setTimeout(() => setShowWarning(false), 2000); // Display message for 2 seconds
        };

        const handleKeyDown = (e) => {
            if (
                e.keyCode === 123 || // F12
                (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I/J/C
                (e.ctrlKey && e.keyCode === 85) // Ctrl+U
            ) {
                e.preventDefault();
                setShowWarning(true);
                setTimeout(() => setShowWarning(false), 2000); // Display message for 2 seconds
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            {showWarning && (
                <div style={styles.warningOverlay}>
                    <div style={styles.warningMessage}>Sorry! Context Menu is Not Allowed</div>
                </div>
            )}
            <RouterProvider router={router} />
        </div>
    );
};

const styles = {
    warningOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    warningMessage: {
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
    },
};

export default App;
