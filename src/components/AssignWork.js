import React, { PureComponent } from 'react';
import 'react-tabs/style/react-tabs.css';
import { AssignWorkBody } from './AssignWorkBody';
import { AssignWorkDue } from './AssignWorkDue';

export function AssignWork() {

    return (
        <div >
            <h1 className="text-primary" style={{color:"blue"}}>Assign Work</h1>
            <div className="row">
                <div className="col-8 mt-2">
                <AssignWorkBody />
                </div>
                <div className="col-4 mt-2 bg-light text-primary">
                <AssignWorkDue />
                </div>
            
            </div>
        </div>
    )
}