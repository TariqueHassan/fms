import React, { useState } from 'react';
import {Button, Pane, Dialog, TextInput } from 'evergreen-ui';
import Header from './Home/Header';
import { MainPage } from './MainPage';
export function LoginPage(props) {

    const [isShown, setIsShown] = React.useState(true); //props.openLoginDialog
    const [usernameTextInput, setUsernameTextInput] = useState("")
    // isShown=props.openLoginDialog;
    return (
        <div>
            <Button className=" text-white"
                         onClick={()=>setIsShown(true)}
                         style={{background:"darkblue", fontSize:"15px"}} >Logout</Button>
            <Pane >
                <Dialog
                    isShown={isShown} //isShown
                    title="Welcome to SIBAU FYP MS"
                    width="750px"
                    onCloseComplete={() => setIsShown(false)}
                    // confirmLabel="OK"
                >
                    Please Login to Continue!
                
          <hr />
          <TextInput className="mb-3" placeholder="Username" onChange={(e)=>setUsernameTextInput(e.target.value)} />
          <TextInput className="mb-3" placeholder="Password"  />
            <p>hey: {usernameTextInput}</p>
          <Button appearance="primary" onClick={()=>setIsShown(false)}>Login</Button>
          
                </Dialog>
            </Pane>
            
        </div>
    )
}