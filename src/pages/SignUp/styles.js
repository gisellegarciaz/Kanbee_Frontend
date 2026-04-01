import styled from "styled-components";

export const HeroSection = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;

    background: radial-gradient(circle at top, #f8fafc, #eef2ff);
    box-sizing: border-box;
    `;

export const HeroContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 80px 24px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
    `;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 520px;

    @media (max-width: 900px) {
        align-items: center;
    }
    `;

export const HeroTitle = styled.h1`
    font-size: 3.2rem;
    line-height: 1.15;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
    `;

export const HeroText = styled.p`
    font-size: 1.1rem;
    color: #475569;
    margin-bottom: 32px;
    `;

export const HeroForm = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 12px;

    @media (max-width: 900px) {
        flex-direction: column;
        width: 100%;
    }
    `;

export const HeroInput = styled.input`
    flex: 1;
    padding: 14px 16px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    font-size: 0.95rem;
    outline: none;
    transition: 0.2s;

    &:focus {
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
    `;

export const HeroButton = styled.button`
    padding: 14px 20px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
        background: #1d4ed8;
        transform: translateY(-1px);
        box-shadow: 0 6px 18px rgba(37, 99, 235, 0.25);
    }

    @media (max-width: 900px) {
        width: 100%;
    }
    `;

export const HeroNote = styled.span`
    font-size: 0.8rem;
    color: #64748b;
    margin-bottom: 24px;
    `;

export const HeroSecondary = styled.button`
    background: none;
    border: none;
    color: #2563eb;
    font-weight: 500;
    cursor: pointer;
    padding: 0;
    font-size: 0.95rem;
    transition: 0.2s;

    &:hover {
        opacity: 0.7;
    }
    `;

export const HeroVisual = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const ImageWrapper = styled.div`
    width: 100%;
    max-width: 420px;
    aspect-ratio: 9 / 16;
    border-radius: 28px;

    background: linear-gradient(135deg, #e2e8f0, #f1f5f9);

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    `;