import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const CenterContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
`; 

export const LoadingText = styled.section`
    width: 600px;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: ${theme.colors.text};
    text-align: center;
    margin-top: 56px;

    @media (max-width: 600px) {
        font-size: 16px;  
        width: 80%;
    }
    @media (max-width: 400px) {
        font-size: 12px;  
        width: 80%;
    }
`;

export const TipText = styled.section`
    font-size: 13px;
    width: 400px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: ${theme.colors.primaryForText};
    text-align: center;
    margin-top: 20px;

    @media (max-width: 600px) {
        font-size: 12px;  
        width: 60%;
    }
    @media (max-width: 400px) {
        font-size: 10px;  
        width: 60%;
    }
`;
