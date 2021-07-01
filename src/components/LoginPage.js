import React, { PureComponent } from 'react';
import {Button, Pane, Dialog, TextInput } from 'evergreen-ui';
export function LoginPage(props) {

    const [isShown, setIsShown] = React.useState(props.openLoginDialog);
    // isShown=props.openLoginDialog;
    return (
        <div>
            <Button className=" text-white"
                         onClick={()=>setIsShown(true)}
                         style={{background:"darkblue", fontSize:"15px"}} >Logout</Button>
            <Pane >
                <Dialog
                    isShown={isShown}
                    title="Previous Assigned Work"
                    width="750px"
                    onCloseComplete={() => setIsShown(false)}
                    confirmLabel="OK"
                >
                    Login Dialog!
                
          <hr />
          <TextInput className="mb-3" placeholder="Username"  />

          <TextInput className="mb-3" placeholder="Password"  />
          <Button appearance="primary">Login</Button>
                </Dialog>
            </Pane>
        </div>
    )
}