import { 
    PageContainer, 
    HomeImage, 
    HomeTitle, 
    CenterContainer, 
    HomeText, 
    HomeButton,
    CreditText
} from './styles';
import pandaImg from '../../assets/panda.png';
import {ReactComponent as HappySvg} from '../../assets/svg/happy.svg';

const Home = () => {
    return (
        <PageContainer>
            <CenterContainer>
                <HomeImage src={pandaImg} alt='panda image' />
                <HomeTitle>Seja muito bem vindo(a)! 💗</HomeTitle>
                <HomeText>Clique no botão abaixo para receber uma linda mensagem para alegrar seu dia :)</HomeText>
                <HomeButton onClick={() => console.log('Hello world!')}>Gerar frase aleatória <HappySvg style={{ marginLeft: '8px'}} fill='#5C08B2' /></HomeButton>
            </CenterContainer>
            <CreditText>Feito com amor por Sabanai 💗</CreditText>
        </PageContainer>
    );
}

export default Home;
