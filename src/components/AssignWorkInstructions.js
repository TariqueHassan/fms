import React from 'react';
import { Button,Textarea, PlusIcon, LinkIcon } from 'evergreen-ui';

export function AssignWorkInstructions(){

    return (
        <div>
                     <div className="bg-light text-primary">
                        <p>Instructions</p>
                        <Textarea
                            rows="13"
                            cols="100"
                            style={{resize:"none"}}
                        />
                    </div>
                    <div className="row">
                        <div className="mx-3"><Button style={{ color: "green" }} height={35} width={90} intent="primary" iconBefore={LinkIcon}>Add</Button></div>
                        <div ><Button className="btn border border-0" style={{ color: "green" }} height={35} width={100} intent="primary" iconBefore={PlusIcon}>Create</Button></div>
                    </div>
                </div>
    );
}