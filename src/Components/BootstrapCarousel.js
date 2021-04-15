import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

 class BootstrapCarousel extends Component {
     
    render() {
        const style= {
            height:"300px"
         
        }

        
        return (
            <div className="carousel">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>
                                <Carousel.Item >
                                    <img style={style}
                                        className="d-block w-100 h-300px"
                                        src="https://images.unsplash.com/photo-1581993192008-63e896f4f744?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwb2ZmZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img style={style}
                                        className="d-block w-100 h-300px"
                                        src="https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vYmlsZSUyMG9mZmVyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img style={style}
                                        className="d-block w-100 h-300px"
                                        src="https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fG1vYmlsZSUyMG9mZmVyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>

                </div>

                
            </div>
        )
    }
}

export default BootstrapCarousel
