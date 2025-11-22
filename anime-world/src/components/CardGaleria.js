import 'bootstrap/dist/css/bootstrap.min.css';


function CardGaleria(props) {
    return(
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.foto} className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-8">
                    <div class="card-body">
                        <h5 className="card-title"> {props.titulo} </h5>
                        <p className="card-text"> {props.descricao} </p> 
                        <p className="card-text"><small className="text-body-secondary"> {props.meta} </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardGaleria;