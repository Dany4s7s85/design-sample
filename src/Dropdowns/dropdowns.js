import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./dropdowns.css";
import {Link} from "react-router-dom"

function Dropdown(){
    return(
        <div className='DropdownsSamples'>
{/* there start dropdown 1 ........................................... */}
            <h2>dropdown-1</h2>
            <div className='mainNavDiv-1'>
            <Link>link-1</Link>
            <Link>link-2</Link>
            <Link to="#" className="dropdown-1">dropdown <ArrowDropDownTwoToneIcon />
                <span>
                <ul className="dropdown-links-1">
                <li><Link>1</Link></li>
                <li><Link>2</Link></li>
                <li><Link>3</Link></li>    
                </ul>
                </span>
            </Link>
            <Link>link-3</Link>
            </div>
{/* there start dropdown 2 ........................................... */}
            <h2>dropdown-2</h2>
            <div className='mainNavDiv-2'>
            <Link>link-1</Link>
            <Link>link-2</Link>
            <Link to="#" className="dropdown-2">Clippy <ArrowDropDownTwoToneIcon />
                <span>
                <ul className="dropdown-links-2">
                <li><Link>1</Link></li>
                <li><Link>2</Link></li>
                <li><Link>3</Link></li>    
                </ul>
                </span>
            </Link>
            <Link>link-3</Link>
            </div>
{/* there start dropdown 3 ........................................... */}
            <h2>dropdown-3</h2>
            <div className='mainNavDiv-3'>
            <ul class="dropdown">
            <li>Home</li>
            <li>
            <div>Patterns <ArrowDropDownTwoToneIcon /></div>
            {/* First level sub dropdown */}
            <ul>
            <li>Layout</li>
            <li>Input</li>
            <li>
                <div>Navigation<ArrowRightIcon /></div>
                {/* Second level sub dropdown */}
                <ul>
                    <li>Breadcrumb</li>
                    <li>Dropdown</li>
                    <li>Menu</li>
                    <li>Nested dropdown</li>
                </ul>
            </li>
            <li>Display</li>
            <li>Feedback</li>
            </ul>
            </li>
            <li>Products</li>
            <li>About</li>
            </ul>
            </div>
        </div>
    )
}

export default Dropdown;