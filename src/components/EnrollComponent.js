import React, {Component} from 'react';
import {Button} from 'reactstrap';
class Enroll extends Component{

    constructor(props){
        super(props);
        
    }

    render(){
        const enroll = this.props.studentdata.map((sdata) =>{
            if(sdata==null){return (<div></div>);}
            return (
                <div class="container">
                    <div class="row ">
                        <div class="col-sm-2 bg-primary">
                            <p>{sdata.id}</p>
                        </div>
                        <div class="col-sm-6 bg-secondary">
                            <p>{sdata.name}</p>
                        </div>
                        <div class="col-sm-2 bg-warning">
                            <p>{sdata.cms}</p>
                        </div>
                        <div class="col-sm-2 bg-dark">
                            <Button color="success">Enroll</Button>
                        </div>
                        
                        
                    </div>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {enroll}
                </div>
            </div>
        );
    }
}

export default Enroll;