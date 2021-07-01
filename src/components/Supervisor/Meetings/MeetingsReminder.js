import React,{Fragment, useState,useEffect} from 'react';
import {  Button,CornerDialog} from 'evergreen-ui';
import {MeetingsReminderModal} from './MeetingsReminderModal';
export function MeetingsReminder() {

    
    const [isShown, setIsShown] = useState(false);
    const [confirm, setConfirm] = useState(false);
    useEffect(() => {
        setIsShown(true);
        return () => {
            setIsShown(false);
        }
    }, [])
    return (
        <div>
            <Fragment>
                <CornerDialog
                    title="See Previous Assigned Work"
                    isShown={isShown}
                    onCloseComplete={() => setIsShown(false)}
                    intent="primary"
                    hasFooter={true}
                    confirmLabel="Yes, Show Me"
                    cancelLabel="Skip for now"
                    onConfirm={()=>{setConfirm(true); setIsShown(false)}}

                >
                    See if Student has completed assigned work
      </CornerDialog>
      {confirm?<MeetingsReminderModal openModal={true}/>: ""}
            </Fragment>
        </div>
    );
}