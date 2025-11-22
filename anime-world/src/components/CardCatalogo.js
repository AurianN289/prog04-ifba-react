import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function CardCatalogo(props){

    const popover = (
        <Popover id="popover-basic"> 
            <Popover.Body>Nome: {props.nome}</Popover.Body>
        </Popover>
    );

    const ClickPopover = () => (
        <OverlayTrigger trigger="click" placement="top" overlay={popover}> 
            <Button type="button" className="btn btn-primary"> Infos </Button>
        </OverlayTrigger>
    );

    return (
        <div className="col">
            <div className="card position-relative">
                <img src={props.foto} className="card-img"/>
                <div className="position-absolute bottom-0 start-50 translate-middle-x">
                    <ClickPopover />
                </div>
            </div>
        </div>
    );
}

export default CardCatalogo;