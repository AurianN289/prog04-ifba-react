import 'bootstrap/dist/css/bootstrap.min.css';


function Titulo({txt}){
    return (
    <div className="row"> 
        <h1 className="h1 text-center">{txt}</h1>
    </div>
    );
}

export default Titulo;