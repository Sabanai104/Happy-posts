import { 
    CenterContainer, 
    HomeImage, 
    HomeText, 
    HomeButton, 
    HomeTitle,
    GifImage
} from "./styles";

const MainInfo = ({ mainImg, titleText, mainText, buttonClick, buttonText, SVGImage, isGif }) => (
    <>
        <CenterContainer>
            {
                isGif ? <GifImage src={mainImg} alt='gif image' /> :  <HomeImage src={mainImg} alt='panda image' />
            }
            <HomeTitle>{titleText}</HomeTitle>
            <HomeText>{mainText}</HomeText>
            <HomeButton onClick={buttonClick}>{buttonText} <SVGImage style={{ marginLeft: '8px'}} fill='#5C08B2' /></HomeButton>
        </CenterContainer>
    </>
);

export default MainInfo;
