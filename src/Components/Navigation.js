import React from 'react'
import {Navbar, Nav , Container,Form,FormControl} from 'react-bootstrap';
import {Cart2} from 'react-bootstrap-icons';

const Navigation = () => {

    return (
        <>
           <Navbar bg="light" variant="light">
               <Container>
                   <Nav>
                       <Nav.Link href="/">Home</Nav.Link>
                       <Nav.Link href="/login">Login</Nav.Link>
                       <Nav.Link href="/orders">Orders</Nav.Link>
                       <Nav.Link href="/cart"><Cart2 size={25}/>
                       </Nav.Link>
                   </Nav>
               <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    
  </Form>
               </Container>

               
           </Navbar> 
        </>
    );

}
   
    


export default Navigation
