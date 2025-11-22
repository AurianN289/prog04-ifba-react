import 'bootstrap/dist/css/bootstrap.min.css';

import Titulo from '../components/Titulo';
import Estoria from '../components/Estoria';
import CardAnime from '../components/CardAnime';

import onePieceBanner from '../assets/imgs/banner one piece.jpg';

function Animes(){
    return(
        <div className='container'>
            <Titulo txt="Seus Animes Favoritos" />
            <Estoria txt="Gosto muito de animes; eles sempre foram uma parte importante do meu dia a dia. Adoro como cada história consegue me prender, seja pela ação, pela comédia ou pelos momentos emocionantes que fazem a gente pensar na vida. Sempre que encontro um anime novo, sinto aquela empolgação de descobrir personagens diferentes, mundos criativos e trilhas sonoras incríveis. É algo que realmente me relaxa e me inspira ao mesmo tempo." />

            <div className="row row-cols-1 row-cols-md-3 g-4"> 
                <CardAnime 
                    foto={onePieceBanner} 
                    titulo="One Piece"
                    descricao="Uma aventura épica que segue Monkey D. Luffy e sua tripulação em busca do tesouro lendário conhecido como One Piece. O anime combina ação, humor e momentos emocionantes enquanto explora amizade, liberdade e grandes batalhas em um mundo cheio de ilhas incríveis."
                    meta="Manga Capitulos: 1144; Anime Episodios: 1149" />
            </div>
        </div>
    )
}

export default Animes;