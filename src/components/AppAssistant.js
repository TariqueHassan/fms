import React,{useState} from 'react'

import NavbarComponent from './Home/NavbarComponent';
import { MainPage } from './MainPage';
import Header from './Home/Header';
import { UserContext } from './UserContext';
function AppAssistant() {
    const [userDataInputText, setUserDataInputText] = useState(false);
    return (
        <div className="">
            <UserContext.Provider value={{userDataInputText, setUserDataInputText}}>
                
                <div className="mb-3"><NavbarComponent /></div><br/>
                
                <div>{userDataInputText.isShown?<Header />:<MainPage />}</div>
                
            </UserContext.Provider>
        </div>
    )
}

export default AppAssistant
