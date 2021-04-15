import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Row, Col, Container} from 'react-bootstrap';
import '../App.css';
import products from './ecommerce-products';
import CardDisplay from './CardDisplay';

class Products extends React.Component {
    constructor(){
        super()
        this.state = {
          productsData : products
        }
      }
        render(){
            let productItem = this.state.productsData.map(item => {
                return(
                    <Col sm="4" xs="12">
                        <CardDisplay key={item.id} product={item}/>
                    </Col>
                    // <CardDisplay />
                )
           
            })
        return (
            
            <Container fluid>
            <Row>
                {productItem}
            </Row>
        </Container>

                
        )
    
}
}

export default Products
