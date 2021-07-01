import React from 'react';
import {Textarea, TextInput} from 'evergreen-ui';
export function MeetingsBody(){

    return (
        <div>
            <p style={{ color: "blue", fontSize: "20px" }}>Meetings Body</p>
            <TextInput placeholder="Topic"  />
            <div className="mt-2 bg-light text-primary">
                        {/* <p>Instructions</p> */}
                        <Textarea
                            placeholder="Description"
                            rows="13"
                            cols="100"
                            style={{resize:"none"}}
                        />
                    </div>
        </div>
    );
}