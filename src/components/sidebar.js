// import { Component } from 'react';
// import { Navbar,Button } from 'reactstrap';

// function Sidebar(props){

//         const sidebardata = props.sidebardata.map((sidebar) => {
//             if (sidebar == null) { return (<div></div>); }

//             return (
//                 <div>
//                     <li className="nav-item">
//                         <a className="nav-link active" href="#">
//                             <svg xmlns={sidebar.imgName} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
//                             {sidebar.name}
//                         </a>
//                     </li>

//                 </div>
//             );
//         });
//         return (
//             <div className="">

//                 <div className="row mt-5">
//                     <Navbar className="col-md-2 d-none d-md-block bg-dark sidebar " >
//                         <div className="sidebar-sticky">
//                             <ul className="nav flex-column">
//                                 {sidebardata}
//                             </ul>
//                         </div>
//                     </Navbar>
//                 </div>
//             </div>
//         );


// }

// export default Sidebar;


import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
function Sidebar() {

    return (
        <div>
            <ProSidebar>
                <SidebarHeader>
                    Supervisor's Dashboard
                </SidebarHeader>
                <SidebarContent>
                    Menu
                </SidebarContent>
                <Menu iconShape="square">
                    <MenuItem active={true} icon={<FiHome />}>Home</MenuItem>
                    
                    <MenuItem icon={<FaList />}>Assign Project</MenuItem>
                    <SubMenu title="Reports">
                        <MenuItem >View Reports</MenuItem>
                        <MenuItem>Upload Reports</MenuItem>
                    </SubMenu>
                    
                    <MenuItem icon={<FaRegHeart />}>Project Archive</MenuItem>
                    <MenuItem >Developed Projects</MenuItem>
                    <MenuItem >Project Progress</MenuItem>
                    
                    <MenuItem >Dashboard</MenuItem>
                </Menu>
                <SidebarFooter>
                    @ Sukkur IBA University
                </SidebarFooter>
            </ProSidebar>;
        </div>
    );


}
export default Sidebar;