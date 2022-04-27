import { 
    PageContainer,
    CreditText
} from './styles';
import QuotesDTO from '../../utils/QuotesDTO';
import { useState } from 'react';
import pandaImg from '../../assets/panda.png';
import {ReactComponent as HappySvg} from '../../assets/svg/happy.svg';
import MainInfo from '../../components/MainInfo';
import LoadingInfo from '../../components/LoadingInfo';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [mainInfoContent, setMainInfoContent] = useState({
        buttonText: 'Gerar frase aleatória',
        mainText: 'Clique no botão abaixo para receber uma linda mensagem para alegrar seu dia :)',
        titleText:'Seja muito bem vindo(a)! 💗',
        svgImage: HappySvg,
        mainImg: pandaImg,
        isGif: false,
    });

    const handleButtonClick = () => {
        setIsLoading(true);
        const classQuote = new QuotesDTO();
        const quote = classQuote.setQuotes();
        setMainInfoContent({
            ...mainInfoContent,
            buttonText: 'Gerar novamente',
            mainText: quote.mainText,
            titleText:'Sua frase está pronta huhu ❤',
            svgImage: HappySvg,
            mainImg: quote.mainImg,
            isGif: true,
        });

        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }
    return (
        <PageContainer>
            {
                isLoading ? <LoadingInfo /> 
                :            
                <MainInfo 
                    buttonClick={handleButtonClick}
                    buttonText={mainInfoContent.buttonText}
                    mainImg={mainInfoContent.mainImg}
                    mainText={mainInfoContent.mainText}
                    titleText={mainInfoContent.titleText}
                    SVGImage={mainInfoContent.svgImage}
                    isGif={mainInfoContent.isGif}
                />
            }
            <CreditText>Feito com amor por Sabanai 🧡</CreditText>
        </PageContainer>
    );
}

export default Home;
