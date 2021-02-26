import { Component } from 'react';
import { Navbar } from 'reactstrap';

class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const sidebardata = this.props.sidebardata.map((sidebar) => {
            if (sidebar == null) { return (<div></div>); }

            return (
                <div>
                    <Navbar className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">Sign out</a>
                        </li>
                    </ul>
                </Navbar>


                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            <svg xmlns={sidebar.imgName} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            {sidebar.name}
                        </a>
                    </li>

                </div>
            );
        });
        return (
            <div className="">
                <div className="row">
                    <Navbar className="col-md-2 d-none d-md-block bg-dark sidebar mt-5" >

                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                {sidebardata}
                            </ul>
                        </div>
                    </Navbar>
                </div>
            </div>
        );

    }
}

export default Sidebar;