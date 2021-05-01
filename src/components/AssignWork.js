import React, { PureComponent } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export function AssignWork() {

    return (
        <div>
            <h1 className="text-dark">Assign Work</h1>
            <div className="mt-4">
                <Tabs>
                    <div className="bg-dark text-white">
                        <TabList>
                            <Tab>Abstract</Tab>
                            <Tab>Proposal</Tab>
                            <Tab>SRS</Tab>
                            <Tab>SDS</Tab>
                            <Tab>Final Report</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <h3 style={{ color: "grey" }}>Abstract Presentation for FYP</h3>
                        <hr />
                        <div className="bg-light text-primary">
                            <p>Instructions</p> 
                        <textarea 
                        rows="10"
                        cols="100"
                        />
                        </div>
                        
                    </TabPanel>
                    <TabPanel>
                        <h1>Content 2 </h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>Content 3</h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>Content 4 </h1>
                    </TabPanel>
                    <TabPanel>
                        <h1>Content 5</h1>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}