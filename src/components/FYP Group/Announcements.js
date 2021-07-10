import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Container } from 'react-bootstrap';



const Annoucement = ({ data }) => {
   
    return (
        <Container>
            {
                data.map((item) => (

                    <div className="row my-5 d-flex justify-content-center">
                        <Card className="text-left shadow-lg" style={{ width: '50rem' }}>
                            <Card.Body>
                                <Card.Title>{item.subject}</Card.Title>
                                <Card.Text>
                                    {item.Discription}
                                </Card.Text>

                            </Card.Body>
                            <Card.Footer className="text-muted"><div className="d-flex justify-content-between"><div classNam="p-2 col-example text-left">By: {item.Coordinator}</div><span className=" d-flex justify-content-end">Posted at {item.time}</span></div></Card.Footer>
                        </Card>
                    </div>
                ))
            }
        </Container>
        
    );
};

export default Annoucement;
