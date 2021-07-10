import React, { useState } from 'react';

import { Button, PlusIcon, Badge, FilePicker, Pane, Dialog } from 'evergreen-ui';
import {Upload} from 'antd';
import { ModalR } from './ModalUploadReports';
import { UserContext } from '../../UserContext';
export function UploadReportsCard() {

    const customStyles = {
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    };

    const [submitStatus, setSubmitStatus] = useState(false);
    let statusResult = submitStatus ? 'Unsubmit' : 'Turn in';
    const [isShown, setIsShown] = React.useState(false);
    const [fileName, setFileName] = useState("")
    return (
        <div className="card  shadow-lg">
            <div className="row">

                <div className="col-1 "></div>
                <div className="card-body col-10">
                    <div className="row">
                        <div className="col-8 "><h3>Your Work</h3></div>
                        <div className="col-4">
                            {
                                <Badge color={submitStatus ? "green" : "red"} >{submitStatus ? 'Turned in' : 'Assigned'}</Badge>
                            }
                        </div>

                    </div>
                    <div className="mb-3">
                        {fileName}
                        <Button onClick={() => setIsShown(true)} height={40} width={300} intent="primary" iconBefore={PlusIcon}>Add or create</Button>

                        <Pane >
                            <Dialog
                                isShown={isShown}
                                title="Please Select files from your device to submit:"
                                width="950px"
                                onCloseComplete={() => setIsShown(false)}
                                confirmLabel="OK"

                            >
                                <Pane height={300} width="100%" backgroundColor="#FAFAFA">
                                    <div
                                        style={customStyles}
                                    >
                                        {/* <Upload>
                                            <Button>Browse</Button>
                                        </Upload> */}
                                        <FilePicker
                                            //multiple
                                            width={250}
                                            onChange={files => setFileName(files[0].name)}//setFileName(files. +"he")}
                                            placeholder="Selected files here!"
                                        />
                                    </div>
                                    
                                </Pane>
                            </Dialog>

                        </Pane>
                    </div>
                    {/* <Button appearance="primary" height={40} width={300} onClick={() => { setSubmitStatus(submitStatus ? false : true); }}>{statusResult}</Button> */}
                    <UserContext.Provider value={{submitStatus,setSubmitStatus}}>
                    <ModalR />
                    </UserContext.Provider>

                </div>
                <div className="col-1 "></div>

            </div>
        </div>

    );
}