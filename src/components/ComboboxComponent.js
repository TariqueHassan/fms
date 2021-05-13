import React,{useState} from 'react';
import {Combobox} from 'evergreen-ui';
export function ComboboxComponent(props){


    return (
        <div>
            <Combobox
            openOnFocus
            height={35}
            width={150}
            items={props.comboItems}
            placeholder={props.defaultItem}
            className="mb-3"
            
        />
        </div>
    );
}