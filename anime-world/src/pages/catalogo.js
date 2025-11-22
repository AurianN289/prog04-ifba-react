import 'bootstrap/dist/css/bootstrap.min.css';

import Titulo from '../components/Titulo';
import Estoria from '../components/Estoria';
import CardCatalogo from '../components/CardCatalogo';

import images from '../assets/assets';

function Catalogo(){
    return(
        <div className='container'> 
            <Titulo txt="Todos seus Animes" />
            <Estoria txt="Aqui, você pode organizar todos os animes que fazem parte da sua jornada — desde aqueles que marcaram sua história até os que você ainda pretende conhecer. Esta página foi feita para ajudar você a acompanhar o que já assistiu, o que está no meio do caminho e o que ainda está na sua lista de prioridades. É um espaço simples, mas poderoso, para registrar suas experiências, descobrir padrões no que você gosta e manter tudo sempre acessível quando quiser revisitar suas obras favoritas." />

            <div class="row row-cols-1 row-cols-md-6 g-4">
                <CardCatalogo 
                    foto = {images.onePieceBanner}
                    nome = "One Piece"
                />
            </div>
        </div>
    )
}

export default Catalogo;