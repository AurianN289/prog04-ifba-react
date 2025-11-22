import 'bootstrap/dist/css/bootstrap.min.css';

import Titulo from '../components/Titulo';
import Estoria from '../components/Estoria';
import CardGaleria from '../components/CardGaleria';

import images from '../assets/assets';

function Galeria(){
    return(
        <div className='container'> 
            <Titulo txt="Cenas que você Gosta" />
            <Estoria txt="Aqui é o espaço para você guardar aquele momento especial que marcou sua experiência com um anime. Pode ser uma batalha épica, uma fala inesquecível, um momento emocionante ou até uma cena engraçada que sempre te faz sorrir. Escolha uma imagem ou vídeo, escreva por que essa cena é importante para você e deixe sua marca aqui no site. Cada lembrança conta uma história — e estamos curiosos para conhecer a sua." />

            <div className='row'> 
                <CardGaleria 
                    foto={images.shiroeBanner}
                    titulo="Shiroe Log Horizon"
                    descricao="Esse momento funciona quase como um empurrão emocional. Ele lembra o Shiroe de que sua força não está só no quanto ele analisa as coisas, mas também na coragem de transformar pensamento em ação. É uma cena pequena, mas poderosa — mostra que até as pessoas mais estratégicas precisam de alguém que enxergue sua capacidade e as incentive a confiar em si mesmas. É ali que Shiroe começa a assumir, de fato, o papel de líder que o mundo de Elder Tale precisa."
                    meta="Season 1 Episodio 6"
                />
            </div>
        </div>
    )
}

export default Galeria;