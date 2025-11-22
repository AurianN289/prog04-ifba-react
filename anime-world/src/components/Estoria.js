import 'bootstrap/dist/css/bootstrap.min.css';


function Estoria({txt}){
    return (
        <div className="row">
            <p className="lead"> {txt} </p>
        </div>
    );
}

export default Estoria;