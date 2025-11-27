import 'bootstrap/dist/css/bootstrap.min.css';

import Titulo from '../components/Titulo';
import Estoria from '../components/Estoria';
import CardAnime from '../components/CardAnime';

import images from '../assets/assets';

function Animacoes(){
    return(
        <div className='container'>
            <Titulo txt="Sobre Animações" />
            <Estoria txt="A animação 2D e os animes formam um campo rico em criatividade, onde cada traço carrega emoção e intenção. Técnicas tradicionais, como desenho quadro a quadro e layouts detalhados, continuam sendo a base do estilo, mesmo com a ajuda de ferramentas digitais modernas. Animadores japoneses — como Yoshinori Kanada, Masashi Ando, Satoru Utsunomiya e Yutaka Nakamura — ajudaram a definir movimentos, expressões e cenas de ação que marcaram gerações. Esse conjunto de técnicas e talentos faz da animação 2D um dos formatos mais expressivos e influentes da arte visual." />

            <div className="row row-cols-1 row-cols-md-3 g-4"> 
                <CardAnime 
                    foto={images.yutakaNakamura} 
                    titulo="yutaka Nakamura"
                    descricao="Yutaka Nakamura é um dos animadores mais influentes da animação 2D japonesa, conhecido por cenas de ação extremamente fluidas, uso marcante de “impact frames” e seus famosos “cubes.” Ele trabalhou em obras como Cowboy Bebop, FMA: Brotherhood e My Hero Academia, deixando uma marca única com movimentos dinâmicos e cheios de energia." />
            </div>
        </div>
    )
}

export default Animacoes;