import { 
    PageContainer,
    CreditText
} from './styles';
import { useState } from 'react';
import pandaImg from '../../assets/panda.png';
import jujutsuGif from '../../assets/gif/jujutsu.gif';
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

    const handleLoading = () => {
        setIsLoading(true);
        setMainInfoContent({
            ...mainInfoContent,
            buttonText: 'Gerar novamente',
            mainText: '”Seu esforço nunca vai servir de nada se não acreditar em si mesmo! Nunca esqueça o quão foda você é :D”',
            titleText:'Sua frase está pronta huhu ❤',
            svgImage: HappySvg,
            mainImg: jujutsuGif,
            isGif: true,
        })

        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }
    return (
        <PageContainer onClick={() => console.log(mainInfoContent)}>
            {
                isLoading ? <LoadingInfo /> 
                :            
                <MainInfo 
                    buttonClick={handleLoading}
                    buttonText={mainInfoContent.buttonText}
                    mainImg={mainInfoContent.mainImg}
                    mainText={mainInfoContent.mainText}
                    titleText={mainInfoContent.titleText}
                    svgImage={mainInfoContent.svgImage}
                    isGif={mainInfoContent.isGif}
                />
            }
            <CreditText>Feito com amor por Sabanai 💗</CreditText>
        </PageContainer>
    );
}

export default Home;
