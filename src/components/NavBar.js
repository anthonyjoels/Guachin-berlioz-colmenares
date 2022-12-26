import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoGatos from '../components/LogoGatos';
import CartWidget from '../CartWidget';


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
                <a className="nav_letra nav-link  header_links " href="./index.html">Inicio</a>
            </li>
            
            <li className="nav_links "> Guachin</li>
            
            <li className="nav_links ">Berlioz</li>
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