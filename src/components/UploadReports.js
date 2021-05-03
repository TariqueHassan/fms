import React, { useState } from 'react';
import { Button, PlusIcon } from 'evergreen-ui';
import { FaPlus } from 'react-icons/fa';
import { ModalR } from './ModalUploadReports';
export function UploadReports() {

    const [submitStatus, setSubmitStatus] = useState(false);
    let statusResult = submitStatus ? 'Unsubmit' : 'Turn in';
    return (
        <>
            <div className="row bg-warning"><div className="col"><p>l</p></div></div>
            <div className="row ">
                <div className="col-6"><h1 className="text-primary">Upload Reports</h1></div>

                <div className="col-6">
                    <div className="card  shadow-lg" >
                        <div className="row">

                            <div className="col-1 "></div>
                            <div className="card-body col-10">

                                <div className="row">
                                    <div className="col-8 "><h3>Your Work</h3></div>
                                    <div className="col-4"><p>{submitStatus ? 'Turned in' : 'Assigned'}</p></div>

                                </div>
                                <p></p>
                                <Button height={40} width={300} intent="primary" iconBefore={PlusIcon}>Add or create</Button>
                                <p></p>
                                {/* <Button appearance="primary" height={40} width={300} onClick={() => { setSubmitStatus(submitStatus ? false : true); }}>{statusResult}</Button> */}
                                <ModalR/>
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