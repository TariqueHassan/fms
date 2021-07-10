//import useState hook to create menu collapse state
import React, { useState, useContext } from "react";
import Enroll from '../testing/EnrollComponent';
import { STUDENTDATA } from '../studentsdata';
//import react pro sidebar components
import { FaRegFileAlt } from "react-icons/fa"
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent, SubMenu } from "react-pro-sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { UploadReports } from "../FYP Group/UploadReports/UploadReports";
import { AssignWork } from "../Coordinator/AssignWork/AssignWork";
import { Meetings } from "../Supervisor/Meetings/Meetings";
import { Avatar } from "evergreen-ui";
import Announcements from '../FYP Group/Announcements';

import AnnounceData from './Annoucements.json';
import DevelopedProjects from '../Coordinator/DevelopedProjects';
import developedData from './developed.json';
import { UserContext } from "../UserContext";
import { LOGINUSERDATA } from "../Data Files/LoginUserData";
import IdeaSubmission from "../FYP Group/IdeaSubmission";
import Supervisors from "../FYP Group/Supervisors";
const Header = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)
  const { userDataInputText, setUserDataInputText } = useContext(UserContext);
  const LUserData = LOGINUSERDATA;
  var role;
  var dashboard;
  LUserData.map((item) => {
    if (item.name == userDataInputText.username && item.password == userDataInputText.password)
      role = item.role;
    if (role == 0) dashboard = "Coordinator"
    if (role == 1) dashboard = "Student"
    if (role == 2) dashboard = "Supervisor"
    else dashboard = "Not a "
  })


  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  let lrcircle = menuCollapse ? (
    <FiArrowRightCircle />
  ) : (
    <FiArrowLeftCircle />
  );

  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => 
      <div>
        <h2>Announcements</h2>
        <hr/>
        <Announcements data={AnnounceData} />
      </div>
    },
    {
      path:"/idea-submission",
      main: ()=>
      <div>
        <IdeaSubmission />
      </div>
    },
    {
      path:"/supervisors",
      main: ()=>
      <div>
        <Supervisors />
      </div>
    },
    {
      path: "/assign-projects",
      sidebar: () => <div>bubblegum!</div>,
      main: () =>
        <div>
          <h2>Assign Projects</h2>

        </div>
    },
    {
      path: "/projects-archive",
      sidebar: () => <div>shoelaces!</div>,
      main: () => <div className="col-12">
        <h2>Projects Archive</h2>
        {/* <Enroll studentdata={STUDENTDATA} /> */}
        <DevelopedProjects list={developedData} />
      </div>
    },
    {
      path: "/assign-work",
      main: () => <AssignWork />
    },
    {
      path: "/assign-work",
      main: () => <AssignWork />
    },
    {
      path: "/meetings",
      sidebar: () => <div>shoelaces!</div>,
      main: () => <Meetings />
    },
    {
      path: "/announcements",
      sidebar: () => <div>shoelaces!</div>,
      main: () => <div >
        
      </div>
    },
    {
      path: "/upload-reports",
      main: () =>

        <div>
          {/* <h2>Upload Reports</h2> */}
          <UploadReports />
        </div>
    },


  ];

  return (
    <div>
      <Router>
        <div className="row " style={{width:"1550px"}}>

          <div className={menuCollapse ? `col-${1}` : `col-${3} `} >
            {/* <div className="card shadow-lg">
          <p className="d-flex justify-content-around mb-2">Student Dashboard</p>
          <p>Name: {userDataInputText.username}</p>
          <p>Registration ID: </p>
          <p>Supervisor: </p>
          </div> */}
            <div id="header" className="">
              {/* collapsed props to change menu size using menucollapse state */}
              <ProSidebar collapsed={menuCollapse} >
                <SidebarHeader >
                  <div className="logotext">
                    {/* small and big change using menucollapse state */}
                    <Avatar
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
                      name="Alan Turing"
                      size={40}
                    />

                    {/* <p style={{ color: "lightgrey" }}>{menuCollapse ? "AT" : dashboard + " Dashboard"}</p> */}
                    {/* <p style={{ color: "lightgrey" }}>Welcome!</p> */}
                    {/* <div className="card shadow-lg bg-secondary mb-3">
                      <p className="d-flex justify-content-around ">Student Dashboard</p>
                      <p>Name: {userDataInputText.username}</p>
                      <p>Registration ID: </p>
                      <p>Supervisor: </p>
                    </div> */}
                  </div>
                  <div className="closemenu" onClick={menuIconClick}>
                    {/* changing menu collapse icon on click */}
                    {lrcircle}
                  </div>
                </SidebarHeader>
                <SidebarContent >
                  <Menu iconShape="square" >
                    <MenuItem active={true} icon={<FiHome />} > <Link to="/" className="l">Home</Link></MenuItem>
                    {role==0? <MenuItem active={true} icon={<FiHome />} ><Link to="/manage-users" className="l">Manage Users</Link></MenuItem>:null}
                    {role==0? <MenuItem active={true} icon={<FiHome />} ><Link to="/view-submitted-ideas" className="l">View Submitted Ideas</Link></MenuItem>:null}
                    {role==0? <MenuItem active={true} icon={<FiHome />} ><Link to="/view-groups" className="l">View Groups</Link></MenuItem>:null}
                  
                    {role == 0 ? <MenuItem icon={<FaList />}><Link to="/assign-projects" className="l" >Assign Projects</Link></MenuItem> : null}
                    {role == 0 ? <MenuItem icon={<FaRegFileAlt />}><Link to="assign-work" className="l">Assign Work</Link></MenuItem> : null}

                    {role == 1 ? <MenuItem active={true} icon={<FiHome />} > <Link to="/idea-submission" className="l">Idea Submission</Link></MenuItem>:null}
                    {role == 1 ? <MenuItem active={true} icon={<FiHome />} ><Link to="/supervisors" className="l">Supervisors</Link></MenuItem>:null}
                    {/* {role == 1 ? <MenuItem icon={<FaList />}><Link to="/announcements" className="l" >Announcements</Link></MenuItem> : null} */}
                    {role == 1 ? <MenuItem icon={<BiCog />}><Link to="upload-reports" className="l">Upload Reports</Link></MenuItem> : null}


                    <MenuItem icon={<FaRegHeart />}><Link to="projects-archive" className="l">Projects Archive</Link></MenuItem>
                    {role == 2 ? <MenuItem icon={<RiPencilLine />}><Link to="meetings" className="l">Meetings</Link></MenuItem> : null}
                    <SubMenu title="Reports" icon={<FaRegFileAlt />} className="l" >
                      <MenuItem icon={<BiCog />}><Link to="view-reports" className="l">View Reports</Link></MenuItem>

                    </SubMenu>
                  </Menu>
                </SidebarContent>
                {/* <SidebarFooter>
                  <Menu iconShape="square">
                    <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                  </Menu>
                </SidebarFooter> */}
              </ProSidebar>
            </div>

          </div>
          {/* className={menuCollapse?`col-${11}`:`col-${9} ` 
              horizontal-scroll-wrapper
          */}

          <div className={menuCollapse ? `col-${11}` : `col-${9} horizontal-scroll-wrapper`} >
            <Switch>
              {
                routes.map((route, index) => (

                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))
              }
            </Switch>
          </div>

        </div>
      </Router>
    </div>
  );
};

export default Header;