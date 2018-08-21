import React, { Component } from 'react';
import './Layout.css'; 
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Blog from '../../Containers/Blog';
import Footer from '../Footer/Footer';

const Fragment = React.Fragment;

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Fragment>
                <div className="Container">
                    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                    <SideDrawer
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHandler} />
                    <main className='Content'> 
                        <div className="BlogContainer">
                            <Blog />
                        </div>
                    </main>
                    <Footer/>
                </div>
            </Fragment>
        )
    }
}

export default Layout;