import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
 return (
   <>
     <Navbar bg="danger" variant="dark">
       <Container>
         <Navbar.Brand href="/mascotas">Adóptame</Navbar.Brand>
       </Container>
     </Navbar>
   </>
 );
}

export default NavBar;