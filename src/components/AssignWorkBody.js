import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AssignWorkInstructions } from './AssignWorkInstructions';



export function AssignWorkBody() {
    const tabContent = {
        abstract: ["Abstract","Proposal","SRS & SDS","Final Report"],
        abstractHeader: [
            "Abstract Presentation for FYP", 
            "Proposal Submission and Presentation for FYP",
            "SRS & SDS Submission and Presentation for FYP",
            "Final Report Submission and Presentation for FYP"
        ]
    }
    
    return (
        <Tabs>
            <div style={{ background: "darkblue" }} className=" text-white">
                <TabList>
                    {tabContent.abstract.map((content) =>(
                        <Tab>{content}</Tab>
                    ))}
                </TabList>
            </div>
            {
                tabContent.abstractHeader.map((content)=>(
                   
            <TabPanel>
                <p style={{ color: "blue", fontSize: "20px" }}>{content}</p>
                <hr />
                <AssignWorkInstructions />

            </TabPanel>))
}
        </Tabs>

    )
}