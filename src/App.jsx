import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './route/router';

const App = () => {
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        // Disable right-click context menu
        const handleContextMenu = (e) => e.preventDefault();
        document.addEventListener('contextmenu', handleContextMenu);

        // Disable specific keys for inspect element
        const handleKeyDown = (e) => {
            // F12 or Ctrl+Shift+I/Ctrl+Shift+J/Ctrl+Shift+C
            if (
                e.keyCode === 123 ||
                (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) ||
                (e.ctrlKey && e.keyCode === 85) // Ctrl+U to view source
            ) {
                e.preventDefault();
                setShowWarning(true); // Show warning message
                setTimeout(() => setShowWarning(false), 2000); // Hide after 2 seconds
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        // Clean up event listeners on unmount
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            {showWarning && (
                <div style={styles.warningOverlay}>
                    <div style={styles.warningMessage}>Inspect not allowed</div>
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
        // backgroundColor: '#333',
        borderRadius: '8px',
        textAlign: 'center',
    },
};

export default App;
