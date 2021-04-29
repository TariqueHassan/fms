//import useState hook to create menu collapse state
import React, { useState } from "react";
import Enroll from '../EnrollComponent';
import { STUDENTDATA } from '../studentsdata';
//import react pro sidebar components
import { FaRegFileAlt } from "react-icons/fa"
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { UploadReports } from "../UploadReports";


const Header = () => {

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

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
      main: () => <h2>Home</h2>
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
        <Enroll studentdata={STUDENTDATA} />
      </div>
    },
    {
      path: "/project-progress",
      sidebar: () => <div>shoelaces!</div>,
      main: () => <h2>Project Progress</h2>
    },
    {
      path: "/upload-reports",
      main: () => 
              
              <div>
                {/* <h2>Upload Reports</h2> */}
                <UploadReports />
              </div>
    }

  ];

  return (
    <div>
      <Router>
        <div className="row">
          <div className="col-3 bg-dark">
            <div id="header" >
              {/* collapsed props to change menu size using menucollapse state */}
              <ProSidebar collapsed={menuCollapse}>
                <SidebarHeader>
                  <div className="logotext">
                    {/* small and big change using menucollapse state */}
                    <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
                  </div>
                  <div className="closemenu" onClick={menuIconClick}>
                    {/* changing menu collapse icon on click */}
                    {lrcircle}
                  </div>
                </SidebarHeader>
                <SidebarContent>
                  <Menu iconShape="square">
                    <MenuItem active={true} icon={<FiHome />}>
                      Home
              </MenuItem>
                    <MenuItem icon={<FaList />}><Link to="/assign-projects">Assign Projects</Link></MenuItem>
                    <MenuItem icon={<FaRegHeart />}><Link to="projects-archive">Projects Archive</Link></MenuItem>
                    <MenuItem icon={<RiPencilLine />}><Link to="project-progress">Project Progress</Link></MenuItem>
                    
                    <SubMenu title="Reports" icon = {<FaRegFileAlt/>}>
                    <MenuItem icon={<BiCog />}><Link to="upload-reports">Upload Reports</Link></MenuItem>
                    <MenuItem icon={<BiCog />}>View Reports</MenuItem>
                    
                    </SubMenu>
                  </Menu>
                </SidebarContent>
                <SidebarFooter>
                  <Menu iconShape="square">
                    <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                  </Menu>
                </SidebarFooter>
              </ProSidebar>
            </div>

          </div>
          <div className="col-6 ">
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
          <div className="col-3 bg-warning ">
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Header;