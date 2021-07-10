import React, { useState } from 'react'
import {Carousel} from 'react-bootstrap';
export function MainPage() {
    const [index, setIndex] = useState(0);
    return (
        
        <div className="container" >

            <Carousel activeIndex={index} onSelect={()=>setIndex()}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1000x500/?computer"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>SIBAU FYP Management System</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1000x500/?computer,projects"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>SIBAU FYP Management System</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1000x500/?IT,computer"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>SIBAU FYP Management System</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
}