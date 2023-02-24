import logo from "../assets/topman-logo.png";


const Nav = ()=>{
    return(
        <div className="flex w-full bg-amber-50">
            <div className="flex w-2/3 justify-around">
                <img className="w-32" src={logo} alt="logo" />
                <form className="flex w-96 items-center" action="">
                    <input className="rounded-l-sm border-0 outline-0 h-8 w-80" placeholder="buscando.." type="text" />
                    <button className=" text-center bg-sky-500 w-14 h-8 rounded-r-sm">buscar</button>
                </form>
            </div>
                <ul className="flex w-96 items-center justify-around">
                    <li>Productos</li>
                    <li>Resgistrarse</li>
                    <li>Iniciar Sesión</li>
                </ul>
        </div>
    )
}

export default Nav