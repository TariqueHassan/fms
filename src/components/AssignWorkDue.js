import React from 'react';
import { Button, TextInput,Combobox } from 'evergreen-ui';
import { ComboboxComponent } from './ComboboxComponent';

export function AssignWorkDue() {
    return (
        <div>
        Deadlines here...
    <h6>For</h6>
        <div className="row mb-3">
            <div className="mx-3">
                <ComboboxComponent comboItems={['BS Fall 17', 'BS Spring 17', 'BS Fall 18', 'BS Spring 18']} defaultItem="Batch" />
            </div>
            <div>
                <Button height={35}
                    width={100}>Add More</Button>
            </div>
        </div>
        <h6>Points</h6>
        <ComboboxComponent comboItems={['25', '50', '75', '100', 'Ungraded']} defaultItem="100"/>
        <h6>Due</h6>
        <ComboboxComponent comboItems={['Date', 'Time']} defaultItem="Due"/>
        <h6>Topic</h6>
        <TextInput placeholder="Topic here" />
    </div>
    );

}
