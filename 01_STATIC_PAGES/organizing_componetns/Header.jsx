
export default function Header() { // write export default for saftey oyherwise export
    return(
         <header className="header">
            <img src="react-logo.png"  width="40px"className="nav-logo" alt="react-logo"></img> 
            <nav>
                <ul className="nav-list">
                       <li className="nav-list-items">Princing</li>
                       <li className="nav-list-items">About</li>
                       <li className="nav-list-items">Contact</li> 
                </ul>
            </nav>
         
         </header>
    )
   
}
// during default you can call it whatever youu want header , {header}, file 
