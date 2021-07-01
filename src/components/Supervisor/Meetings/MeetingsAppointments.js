import React, { useState } from 'react';
import { Button, Checkbox, Combobox, LinkIcon, PlusIcon } from 'evergreen-ui';
// import { ComboboxComponent } from '.ds./../ComboboxComponent';
import { STUDENTDATA } from '../../../components/studentsdata';
import {CheckboxTesting} from '../../testing/CheckboxTesting';
export function MeetingsAppointments() {
    const [comboItem, setComboItem] = useState("");
    const [checked, setChecked] = useState(true);
    var names = "";
    var count = 0;
    function printNames(name) {
        names += " " + name + "";
    }
    function printNotFound() {

    }
    return (
        <div>
            Deadlines here...
            <h6>For</h6>
            <div className="row mb-3">
                <div className="mx-3">

                    <Combobox
                        openOnFocus
                        height={35}
                        width={150}
                        items={["Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6",]}
                        placeholder="FYP Group"
                        className="mb-3"
                        onChange={(selected) => setComboItem(selected)}

                    />
                    {

                        STUDENTDATA.map((student) => (

                            // (student.groupId===comboItem.toString())? name=student.name: name=".."+comboItem+".."
                            ((student.groupId === comboItem.toString()) ? printNames(student.name) : printNotFound())

                        ))

                    }
                    
                    {"Selected Members: " + names}
                    <CheckboxTesting />
                </div>
                <div>
                    <Button height={35}
                        width={100}>Add More</Button>
                </div>
            </div>
            <h6>Day</h6>
            {/* <ComboboxComponent comboItems={["Monday", "Tuesday", "Wednesday"]} defaultItem="Monday" /> */}
            <h6>Time</h6>
            {/* <ComboboxComponent comboItems={["2.00", "11.00", "12.00", "2.00", "11.00", "12.00"]} defaultItem="2.00" /> */}

            <div className="my-3"><Button height={40} width={300} intent="primary" iconBefore={PlusIcon}>Assign</Button></div>

        </div>
    );

}


// import React from 'react';
// import { ComboboxComponent } from './ComboboxComponent';
// import { STUDENTDATA } from './studentsdata';

// export function MeetingsAppointments(){

//     return (
//         <div>
//              <p style={{ color: "blue", fontSize: "20px" }}>Appointments</p>
//              <hr />
//              <p style={{ color: "black", fontSize: "15px" }}>Set Meeting Schedule</p>

//              <div className="row m-2">
//              <div className="m-3"><ComboboxComponent comboItems={["Monday", "Tuesday", "Wednesday"]} defaultItem="Monday"/></div>
//              <div className="m-3"><ComboboxComponent comboItems={["2.00","11.00","12.00","2.00","11.00","12.00"]} defaultItem="2.00"/></div>
//              <div className="m-3">
//              <ComboboxComponent comboItems={["Group 1","Group 2","Group 3","Group 4","Group 5","Group 6",]} defaultItem="2.00"/>

//                  </div>

//              </div>
//         </div>
//     );
// }