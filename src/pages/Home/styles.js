import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const PageContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: ${theme.colors.background};
    font-family: 'Inter', sans-serif;
`;

export const CreditText = styled.div`
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: 16px;
color: ${theme.colors.text};
margin-bottom: 32px;

@media (max-width: 600px) {
    font-size: 14px; 
}
@media (max-width: 400px) {
    font-size: 12px;  
}
`;
