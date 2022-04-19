import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const CenterContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 170px;

    @media (max-width: 600px) {
        margin-top: 160px;
    }
`;

export const HomeImage = styled.img`
    width: 206px;
    height: 216px;
    margin-right: 25px;

    @media (max-width: 600px) {
        width: 141px;
        height: 151px;
    }

    @media (max-width: 400px) {
        width: 111px;
        height: 117px;
    }
`;

export const GifImage = styled.img`
    width: 400px;
    height: 200px;
    margin-right: 25px;
    border-radius: 8px;
    @media (max-width: 600px) {
        width: 201px;
        height: 121px;
    }

    @media (max-width: 400px) {
        width: 150px;
        height: 100px;
    }
`;

export const HomeTitle = styled.div`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 22px;
    color: ${theme.colors.titles};
    margin-top: 24px;

    @media (max-width: 600px) {
        font-size: 20px;  
    }
    @media (max-width: 400px) {
        font-size: 18px;  
    }
`;

export const HomeText = styled.div`
    width: 600px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${theme.colors.text};
    margin-top: 32px;
    text-align: center;

    @media (max-width: 600px) {
        margin-top: 24px;
        font-size: 16px;  
        width: 80%;
    }
    @media (max-width: 400px) {
        font-size: 12px;  
        width: 80%;
    }
`;

export const HomeButton = styled.button`
    display: flex;
    justify-content: center;
    border: none;
    outline: none;
    align-items: center;
    padding: 16px 32px;
    background-color: ${theme.colors.primaryLessOpacity};
    border-radius: 8px;
    margin-top: 40px;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    color: ${theme.colors.primary};
    font-size: 16px;
    transition: all 150ms ease;
    :hover {
        transform: scale(1.05);
        cursor: pointer;
    }
    :active {
        transform: scale(1);
    }

    @media (max-width: 600px) {
        margin-top: 40px;
        font-size: 14px; 
        padding: 12px 32px;
        border-radius: 500px;
        :hover {
        transform: none;
        }
    }
    @media (max-width: 400px) {
        font-size: 12px;  
        padding: 8px 20px;
        :hover {
        transform: none;
        }
    }
`;
