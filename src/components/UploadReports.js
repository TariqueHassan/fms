import React from 'react';
import { Button, PlusIcon } from 'evergreen-ui';
import { FaPlus } from 'react-icons/fa';
export function UploadReports() {

    return (
        <>
            <div className="row"><div className="col"><p></p></div></div>
            <div className="row ">
                <div className="col-6"><h1 className="text-primary">Upload Reports</h1></div>

                <div className="col-6">
                    <div className="card  shadow-lg" >
                        <div className="row">

                            <div className="col-1 "></div>
                            <div className="card-body col-10">
                                
                                <div className="row">
                                <div className="col-9 "><h3>Your Work</h3></div>
                                <div className="col-3"><p>status</p></div>
                                
                                
                                
                                </div>
                                <p></p>
                                <Button height={40} width={300} intent="primary" iconBefore={PlusIcon}>Add or create</Button>
                                <p></p>
                                <Button appearance="primary" height={40} width={300} >Mark as done</Button>
                                <p></p>
                            </div>
                            <div className="col-1 "></div>

                        </div>
                    </div>
                </div>

                <div className="col">

                </div>

            </div>
        </>
    );
}