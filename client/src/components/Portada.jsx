import fondo from "../assets/portada.jpg";
const Portada = ()=>{
    return(
        <div className="py-10 px-10 w-full h-52">
            <div className="w-full">
                <img className="relative rounded-2xl h-96 w-full" src={fondo} alt="portada" />
                <h1 className="absolute">¡Bienvenido a nuestra tienda!</h1>
            </div>
        </div>
    )
}

export default Portada