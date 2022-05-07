import {Link} from "react-router-dom"
function Nav(){
    return(
    <div className="navMainDiv">
        <Link to="/" className="CustomLink">Buttons</Link>
        <Link to="/dropdown" className="CustomLink">Dropdowns</Link>
        <Link to="/animation" className="CustomLink">Animation</Link>
    </div>
    )    
}

export default Nav;