import React from 'react';
import { Button, PlusIcon, LinkIcon } from 'evergreen-ui';

export function UploadReportsAnnouncements(){

    return (
        <div>
                     <div className="bg-light text-dark">
                        <p>Instructions</p>
                        <p>
                            <p>Dear Students,</p>

                            <p>FYP-Committee is arranging a Abstract Presentation session in which your submitted FYP abstract and ideas will be evaluated by faculty members on Saturday 7th-November-2020 from 1000 Hours to 1200 Hours and fruitful feedback to improve your ideas will be provided to you.</p>
                            
                            <p>Each FYP project will present their idea in a maximum of 15 minutes followed by 10 minutes for question answers and suggestions by the faculty members. You are all expected to make a short presentation containing:</p>
                            <ul>
                            <li>Explanation of the idea</li>
                            <li>Possible tools and technologies for your FYP</li>
                            <li>Brief literature review to back up your FYP</li>
                            <li>Discuss deployability of your FYP (if accepted)</li>
                            <li>The session will be executed in four parallel sessions. The details of the presentation venue will be shared with you in this email later on.</li>
                            </ul>
                            <p><b>IMPORTANT NOTE:</b> Students from following groups are advised to meet me (Asif Rajput Room 15/1 AB1) between 10AM to 12PM tomorrow (i.e. Wednesday 4th-November-2020)</p>

                        </p>
                    </div>
                    <div className="row">
                        {/* <div className="mx-3"><Button style={{ color: "green" }} height={35} width={90} intent="primary" iconBefore={LinkIcon}>Add</Button></div>
                        <div ><Button className="btn border border-0" style={{ color: "green" }} height={35} width={100} intent="primary" iconBefore={PlusIcon}>Create</Button></div> */}
                    </div>
                </div>
    );
}