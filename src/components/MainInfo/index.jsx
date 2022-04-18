import { 
    CenterContainer, 
    HomeImage, 
    HomeText, 
    HomeButton, 
    HomeTitle
} from "./styles";

const MainInfo = ({ mainImg, titleText, mainText, buttonClick, buttonText, svgImage }) => (
    <>
        <CenterContainer>
            <HomeImage src={mainImg} alt='panda image' />
            <HomeTitle>{titleText}</HomeTitle>
            <HomeText>{mainText}</HomeText>
            <HomeButton onClick={buttonClick}>{buttonText} <svgImage style={{ marginLeft: '8px'}} fill='#5C08B2' /></HomeButton>
        </CenterContainer>
    </>
);

export default MainInfo;
