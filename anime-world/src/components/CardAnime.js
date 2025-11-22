import 'bootstrap/dist/css/bootstrap.min.css';


function CardAnime(props){
    return (
        <div className="card">
            <img src={props.foto}  className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title"> {props.titulo} </h5>
                <p className="card-text"> {props.descricao} </p>
                <button type="button" className="btn btn-primary" data-bs-container="body" data-bs-toggle="popover" data-bs-title="Meta" data-bs-content={props.meta}> Meta Informações </button>
            </div>
        </div>
    );
}

export default CardAnime;