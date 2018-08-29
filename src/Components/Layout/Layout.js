import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'; 
import './Layout.css'; 
import SignIn from '../Auth/SignIn';
import SignUpForm from '../Auth/SignUp';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Blog from '../../Containers/Blog';
import Footer from '../Footer/Footer';

import * as routes from '../../Constants/Routes';


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

        <Router>   
            <Fragment>
                <div className="Container">
                    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                    <div className="Content">
                    <SideDrawer
                        open={this.state.showSideDrawer}
                        closed={this.sideDrawerClosedHandler} />

                    <Route  exact path={routes.BLOG} 
                    component ={ () => <Blog className="BlogContainer" />} />  

                    <Route
                        exact path={routes.SIGN_UP}
                        component={() => <SignUpForm />} />

                    <Route
                        exact path={routes.SIGN_IN}
                        component={() => <SignIn />}
                      />

                    <Route>

                    </Route>
                    </div>

                    <Footer/>
                </div>
            </Fragment>
        </Router>
        )
    }
}

export default Layout;