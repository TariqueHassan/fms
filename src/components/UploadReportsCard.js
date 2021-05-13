import React,{useState} from 'react';

import { Button, PlusIcon,Badge } from 'evergreen-ui';
import { ModalR } from './ModalUploadReports';
export function UploadReportsCard(){
    
    const [submitStatus, setSubmitStatus] = useState(false);
    let statusResult = submitStatus ? 'Unsubmit' : 'Turn in';
    return (
        <div className="card  shadow-lg" >
        <div className="row">

            <div className="col-1 "></div>
            <div className="card-body col-10">

                <div className="row">
                    <div className="col-8 "><h3>Your Work</h3></div>
                    <div className="col-4">
                        {
                            
                        <Badge color={submitStatus?"green":"red"} >{submitStatus ? 'Turned in' : 'Assigned'}</Badge>

                        }
                    </div>
                    
                </div>
                <p></p>
                <Button height={40} width={300} intent="primary" iconBefore={PlusIcon}>Add or create</Button>
                <p></p>
                <Button appearance="primary" height={40} width={300} onClick={() => { setSubmitStatus(submitStatus ? false : true); }}>{statusResult}</Button>
                <ModalR/>
                <p></p>
            </div>
            <div className="col-1 "></div>

        </div>
    </div>

    );
}