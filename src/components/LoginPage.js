import React, { useState,useContext } from 'react';
import { Pane, Dialog, TextInput } from 'evergreen-ui';
import { Button } from 'react-bootstrap';
import Header from './Home/Header';
import { MainPage } from './MainPage';
import { UserContext } from './UserContext';
import { FaClosedCaptioning } from 'react-icons/fa';
export function LoginPage(props) {

    const [isShown, setIsShown] = React.useState(true); //props.openLoginDialog
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {userDataInputText, setUserDataInputText} = useContext(UserContext);
    var obj = {username,password,isShown};
    return (
        <div>
            <Button className=" text-white"
                         onClick={()=>setIsShown(true)}
                         style={{background:"darkblue", fontSize:"15px"}} >Logout</Button>
            
            <Pane>
                <Dialog
                    isShown={isShown} //isShown
                    title="Welcome to SIBAU FYP MS"
                    width="550px"
                    onCloseComplete={() => setIsShown(false)}
                    // confirmLabel="OK"
                    hasFooter={false}
                >
                    Please Login to Continue!
                
          <hr />
          <TextInput type="text" className="mb-3" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} />
          <TextInput type="password" className="mb-3" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            {/* <p>hey new: {obj.username} pass:{obj.password}</p> */}
          <Button appearance="primary" onClick={()=>{{setUserDataInputText(obj)} {setIsShown(false)}}}>Login</Button>
          
                </Dialog>
            </Pane>

        </div>
    )
}