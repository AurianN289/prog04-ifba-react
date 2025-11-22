import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function CardAnime(props){

    const popover = (
        <Popover id="popover-basic"> 
            <Popover.Body>{props.meta}</Popover.Body>
        </Popover>
    );

    const ClickPopover = () => (
        <OverlayTrigger trigger="click" placement="top" overlay={popover}> 
            <Button type="button" className="btn btn-primary"> Meta Informações </Button>
        </OverlayTrigger>
    );

    return (
        <div className="card">
            <img src={props.foto}  className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title"> {props.titulo} </h5>
                <p className="card-text"> {props.descricao} </p>
                <ClickPopover />
            </div>
        </div>
    );
}

export default CardAnime;