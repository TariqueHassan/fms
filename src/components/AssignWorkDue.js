import React from 'react';
import { Button, Combobox } from 'evergreen-ui';

export function AssignWorkDue() {
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
                    items={['BS Fall 17', 'BS Spring 17', 'BS Fall 18', 'BS Spring 18']}
                    onChange={selected => console.log(selected)}
                    placeholder="Batch"
                />
            </div>
            <div>
                <Button height={35}
                    width={100}>Add More</Button>
            </div>
        </div>
        <h6>Points</h6>
        <Combobox
            openOnFocus
            height={35}
            width={150}
            items={['25', '50', '75', '100', 'Ungraded']}
            onChange={selected => console.log(selected)}
            placeholder="100"
            className="mb-3"
        />
        <h6>Due</h6>
        <Combobox
            openOnFocus
            height={35}
            width={150}
            items={['Date', 'Time']}
            onChange={selected => console.log(selected)}
            placeholder="Due"
            className="mb-3"
        />
        <h6>Topic</h6>
        <input placeholder="Topic here" />
    </div>
    );

}
