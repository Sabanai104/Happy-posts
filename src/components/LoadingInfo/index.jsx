import ReactLoading from 'react-loading'
import { theme } from "../../utils/theme";
import { LoadingText, TipText, CenterContainer } from "./styles";

const LoadingInfo = () => {
    return (
        <>
            <CenterContainer>
                <ReactLoading type="spokes" color={theme.colors.primary} />
                <LoadingText><b>Espere um pouco!</b> Estamos escolhendo uma frase sensacional 🥰</LoadingText>
                <TipText>Equanto isso, que tal fazer uma lista sobre coisas incriveis que você já fez?</TipText>
            </CenterContainer>
        </>
    );
}

export default LoadingInfo;
