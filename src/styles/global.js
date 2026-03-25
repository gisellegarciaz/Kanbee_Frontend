import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        // --- CORES TEMA CLARO (Padrão)
        
        --erroricon-color: #0d6efd;
        --bg-color: #f5f5f5;             
        --text-color: #333333;           
        --subtitle-color: #474747;
        --input-color: #ebebeb;          
        --shadow-bg: rgba(255, 255, 255, 0.25); 
        --card-bg: #ffffff;  

        --modal-bg: #ffffff;
        --modal-cancel: #e0e0e0;
        --modal-cancel-hover: #d0d0d0;            
        --modal-delete: #ff4444;
        --modal-delete-hover: #fe2020;
        --modal-save: #0093c9;
        --modal-save-hover: #0093c9;
        
        --border-color: #f3f9ff;         
        --primary-color: #0093c9;
        --secondary-color: #006098;
        --switch-color: rgba(96, 122, 186, 0.5); 
        --link-color: #394c91;

        // --- EFEITO GLASSMORPHISM (Light Mode)
        --glass-fill: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(211, 211, 211, 0.1) 100%);
        --glass-border: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.6) 100%);
        --glass-shadow: 0px 10px 5px rgba(230, 230, 230, 0.1), inset 0px 100px 0px rgba(221, 221, 221, 0.1);
        
        // --- BOTAO VOLTAR (Light Mode)
        --botao-fill: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(128, 154, 181, 0.1) 100%);
        --botao-border: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(206, 212, 216, 0.6) 100%);
        --botao-shadow: 0px 7px 10px rgba(100, 100, 100, 0.2);

        // --- OVERLAY DE NOTIFICAÇÕES (Light Mode)
        --notification-overlay-bg: rgba(219, 233, 241, 0.55);
        --notification-overlay-shadow: 0px 20px 40px rgba(15, 15, 15, 0.18);

        //-- CORES DAS COLUNAS
        --column-glass-fill: linear-gradient(180deg, rgba(88, 141, 222, 0.4) 0%, rgba(203, 244, 252, 0.2) 100%);
        --column-glass-border: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(0, 18, 56, 0.2) 100%);
        --column-glass-shadow: 0px 10px 8px rgba(16, 16, 16, 0.2);
    }

    html.dark {
        // --- CORES TEMA ESCURO (Dark Mode)
        --erroricon-color: #49b4db;
        --bg-color: #202020;
        --input-color: #454545;
        --text-color: #e0e0e0;
        --subtitle-color: #9d9d9d;       
        --shadow-bg: rgba(210, 210, 210, 0.25);

        --card-bg: #232323;
        --modal-bg: #212121;
        --modal-cancel: #818181;
        --modal-cancel-hover: #cceeff;
        --modal-delete: #ff4444;
        --modal-delete-hover: #dd1919;
        --modal-save: #0076a1ff;
        --modal-save-hover: #00ccff;
        
        --border-color: #333333;
        --primary-color: #0093c9;
        --secondary-color: #7cd3e9;
        --switch-color: rgba(255, 255, 255, 0.5);
        --link-color: #dba6fd;

        // --- EFEITO GLASSMORPHISM (Dark Mode)
        --glass-fill: linear-gradient(180deg, rgba(136, 136, 136, 0.1) 0%, rgba(11, 11, 11, 0.1) 100%);
        --glass-border: linear-gradient(135deg, rgba(149, 149, 149, 0.3) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(242, 242, 242, 0.1) 100%);
        --glass-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5), inset 0px 1px 0px rgba(255, 255, 255, 0.1);

        // --- BOTAO VOLTAR (Dark Mode)
        --botao-fill: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.9) 100%);
        --botao-border: linear-gradient(135deg, rgba(225, 232, 233, 0.9) 0%, rgba(255, 248, 248, 0.6) 100%);
        --botao-shadow: 0px 1px 5px rgba(205, 205, 205, 0.2), inset 0px 100px 0px rgba(175, 175, 175, 0.1);

        // --- OVERLAY DE NOTIFICAÇÕES (Dark Mode)
        --notification-overlay-bg: rgba(0, 0, 0, 0.6);
        --notification-overlay-shadow: 0px 24px 50px rgba(0, 0, 0, 0.85);

        //-- CORES DAS COLUNAS
        --column-glass-fill: linear-gradient(180deg, rgba(16, 57, 124, 0.4) 0%, rgba(137, 165, 170, 0.2) 100%);
        --column-glass-border: linear-gradient(135deg, rgba(137, 137, 137, 0.8) 0%, rgba(0, 18, 56, 0.2) 100%);
        --column-glass-shadow: 0px 10px 8px rgba(16, 16, 16, 0.2);
    }

    html {
        font-size: 18px; 
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-color);        
        font-family: 'Roboto', sans-serif;
        transition: background-color 0.3s, color 0.3s;
        margin: 0;
        padding: 0;
        width: fit-content;
    }

    button {
        font-family: inherit;
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    /* Animações para notificações */
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }

    // -- Estilos para scrollbar
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: var(--bg-color);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--border-color);
        border-radius: 4px;
        
        &:hover {
            background: var(--primary-color);
        }
    }

    /* --- Estilos para seleção de texto */
    ::selection {
        background-color: var(--primary-color);
        color: white;
    }

    /* --- Remove outline em foco para elementos não interativos */
    *:focus:not(:focus-visible) {
        outline: none;
    }

    /* --- Estilo para foco acessível */
    *:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }

    /* --- Reset para listas */
    ul, ol {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    /* --- Box sizing para todos os elementos */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
`;