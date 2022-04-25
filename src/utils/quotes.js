import jujutsuGif from '../assets/gif/jujutsu.gif'; 

const quotes = [{
    mainImg: jujutsuGif,
    mainText:'”Seu esforço nunca vai servir de nada se não acreditar em si mesmo! Nunca esqueça o quão foda você é :D”',
}, {
    mainImg: 'https://media.giphy.com/media/G3FNI3FneNjiw/giphy.gif',
    mainText: '”Um sorriso é a maneira mais fácil de sair de uma situação difícil. Por isso nunca pare de sorrir! :)”'
}, {
    mainImg: 'https://media.giphy.com/media/v6eyaePwdptVWDWi9q/giphy.gif',
    mainText: '”Não desista, não há vergonha em cair! A verdadeira vergonha é não se levantar novamente! Falhar faz parte da vida, não desista nunca!”'
}, {
    mainImg: 'https://media.giphy.com/media/KztT2c4u8mYYUiMKdJ/giphy.gif',
    mainText: '”O mundo não é perfeito. Mas ele está aqui para nós, fazendo o melhor que pode... e é isso que o faz tão lindo!”'
}, {
    mainImg: 'https://media.giphy.com/media/U1DQ4REx2ZMI/giphy.gif',
    mainText: '”Se você desviar os olhos das coisas tristes, elas acontecerão novamente um dia. Se você continuar fugindo, continuará repetindo os mesmos erros. É por isso que você precisa encarar a verdade diretamente”'
}, {
    mainImg: 'https://media.giphy.com/media/kXdo4BgGoFC80/giphy.gif',
    mainText: '”Pode ser difícil agora, mas você deve silenciar esses pensamentos. Pare de contar as coisas que você perdeu, o que se foi se foi. Então pergunte a si mesmo o que ainda resta para você e valorize isso!”'
}, {
    mainImg: 'https://media.giphy.com/media/ZtB2l3jHiJsFa/giphy.gif',
    mainText: '”As pessoas mais solitárias são as mais gentis. As pessoas mais tristes sorriem mais. As pessoas mais machucadas são as mais sábias. Isso porque elas não desejam ver mais ninguém sofrer do jeito que sofreram”'
}, {
    mainImg: 'https://media.giphy.com/media/8WpYQ9nWGp2tq/giphy.gif',
    mainText: '”Você não é perfeito, você comete erros e fica mais forte por causa deles... Eu acredito que essa é a verdadeira força.”'
}, {
    mainImg: 'https://media.giphy.com/media/LEV3OJQG0XXnq/giphy.gif',
    mainText: '”Quando as pessoas se machucam, elas aprendam a odiar… quando as pessoas machucam outros, eles viram odiados e atormentados com a culpa. Mas saiba que a dor permite às pessoas serem bondosas. A dor permite que todo mundo cresça... e como você cresce é sua responsabilidade”'
}, {
    mainImg: 'https://media.giphy.com/media/LEV3OJQG0XXnq/giphy.gif',
    mainText: '”Por vezes você precisa de sofrer para saber, cair para crescer, perder para ganhar porque as maiores lições na vida são aprendidas através da dor.”'
}]

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const setQuote = () => {
    const quotesLength = quotes.length - 1;
    const indexQuote = randomInteger(0, quotesLength);

    return quotes[indexQuote];
}