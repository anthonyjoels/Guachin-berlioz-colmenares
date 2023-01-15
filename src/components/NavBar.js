import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoGatos from '../components/LogoGatos';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

function TextLinkExample() {
  return (
    
    <Navbar>
      <Container>

        <div className='row barra'>
        
        <section className="col-sm-12 col-md-12 col-lg-1 barra_header  ">
          
            <LogoGatos/>
            
        </section>
        

        <section className="col-sm-12 col-md-12 col-lg-3 barra_header  ">
          
            <h2 className="titulo_header ">Guachin & Berlioz</h2>
            
        </section>
        <div className=' col 7'></div>





        <section className="col-sm-12 col-md-12 col-lg-1 sin_padding header">
       <nav >
        <ul className="barra_nav ">
            <li className="nav_links ">
               <NavLink activeclassname="inactive" className="inactive" to="/">Inicio</NavLink> 
             </li>
            
            <li className="nav_links ">
               <NavLink activeclassname="active" className="inactive" to="/category/men's clothing">Hombre</NavLink> 
            </li>
            
            <li className="nav_links ">
              <NavLink activeclassname="active" className="inactive" to="/category/women's clothing">Mujer</NavLink> 
            </li>
            <li className="nav_links ">
              <NavLink activeclassname="active" className="inactive" to="/category/jewelery">Joyeria</NavLink> 
            </li>
        </ul>
       </nav>
       
        <CartWidget/>
        
        
    </section>
        
        
        </div>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;