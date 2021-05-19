import React, { PureComponent } from 'react';
import 'react-tabs/style/react-tabs.css';
import { AssignWorkBody } from './AssignWorkBody';
import { AssignWorkDue } from './AssignWorkDue';
import { MeetingsAppointments } from './MeetingsAppointments';
import { MeetingsBody } from './MeetingsBody';
import { MeetingsReminder } from './MeetingsReminder';

export function Meetings() {

    return (
        <div >
            <h1 className="text-primary" style={{color:"blue"}}>Meetings</h1>
            <div className="row">
                <div className="col-8 mt-2">
                    <MeetingsReminder />
                <MeetingsBody />
                </div>
                <div className="col-4 mt-2 bg-light text-primary">
                <MeetingsAppointments />
                </div>
            
            </div>
        </div>
    )
}