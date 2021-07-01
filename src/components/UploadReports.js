import React, { useState } from 'react';
import { UploadReportsCard } from './UploadReportsCard';
import { UploadReportsBody } from './UploadReportsBody';
export function UploadReports() {

    
    return (
        <>
<div >
            <h1 className="text-primary" style={{color:"blue"}}>Upload Reports</h1>
            <div className="row">
                <div className="col-8 mt-2">
                <UploadReportsBody />
                </div>
                <div className="col-4 mt-2 bg-light text-primary">
                <UploadReportsCard />
                <br/><br/>
                <h5>Batch: </h5>
                <h5>Deadline: </h5>
                <h5>Marks: </h5>
                
                </div>
            
            </div>
        </div>




            {/* <div className="row bg-warning"><div className="col"><p>l</p></div></div> */}
            
        </>
    );
}