import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';
import '../App.css';

class CardDisplay extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:'',
            price:'',
            total:'',
            quantity:0,
            clickable:false

        }
        this.addToCart = this.addToCart.bind(this);

    }
    addToCart= (id,updatedPrice) =>{
        this.setState({
            price:updatedPrice,
            clickable:true
        })

    }
    render(){
  
        return (
            
                <div className="cards">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" width="100%" src={this.props.product.image} />
                            <Card.Body>
                                <Card.Title>{this.props.product.name}</Card.Title>
                                    <Card.Text>
                                        {this.props.product.price}
                                    </Card.Text>
                                <Button variant="primary" onClick={() => this.addToCart(this.props.product.price)}>Add to cart</Button>
                        
                                <Button className="buynowbutton" variant="primary">Buy Now</Button>
                            </Card.Body>
                </Card>

                </div> 
                
        
        )
    }
}


export default CardDisplay
