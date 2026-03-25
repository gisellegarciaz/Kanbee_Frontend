import React, { createContext, useState, useContext, useEffect } from 'react';

const AccessibilityContext = createContext({});

export const AccessibilityProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('tarefiz-theme') || 'light';
    });

    const [fontSize, setFontSize] = useState(() => {
        const savedSize = localStorage.getItem('tarefiz-font-size');
        return savedSize ? parseInt(savedSize) : 100;
    });

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove('light', 'dark');
        root.classList.add(theme);

        localStorage.setItem('tarefiz-theme', theme);
    }, [theme]);

    useEffect(() => {
        const root = window.document.documentElement;
        root.style.fontSize = `${fontSize}%`;
        localStorage.setItem('tarefiz-font-size', fontSize);
    }, [fontSize]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const increaseFont = () => {
        setFontSize((prev) => (prev < 150 ? prev + 10 : prev));
    };

    const decreaseFont = () => {
        setFontSize((prev) => (prev > 90 ? prev - 10 : prev));
    };

    return (
        <AccessibilityContext.Provider
            value={{
                theme,
                toggleTheme,
                fontSize,
                increaseFont,
                decreaseFont,
            }}
        >
            {children}
        </AccessibilityContext.Provider>
    );
};

export const useAccessibility = () => {
    return useContext(AccessibilityContext);
};