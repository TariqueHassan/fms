import React, { PureComponent } from 'react';
import {Button, Pane, Dialog } from 'evergreen-ui';
export function LoginPage(props) {

    const [isShown, setIsShown] = React.useState(props.openLoginDialog);
    // isShown=props.openLoginDialog;
    return (
        <div>
            <Button className="btn border border-0 text-white"
                         onClick={()=>setIsShown(true)}
                         style={{background:"darkblue", fontSize:"15px"}} >Login</Button>
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
                    <Pane height={300} width="100%" backgroundColor="#FAFFF1">
                        
                    </Pane>
                </Dialog>
            </Pane>
        </div>
    )
}