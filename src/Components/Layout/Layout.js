import React, { Component } from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom'; 
import './Layout.css'; 
import SignIn from '../Auth/SignIn';
import SignUpForm from '../Auth/SignUp';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Blog from '../../Containers/Blog';
import Footer from '../Footer/Footer';
import SignOut from '../Auth/SignOut';

import * as routes from '../../Constants/Routes';


const Fragment = React.Fragment;

class Layout extends Component {

    constructor(props){
        super(props); 
        const {authUser} = this.props;
        console.log(authUser);
        this.state = {
            //authUser: props.authUser,
            showSideDrawer: false
        }

    }
    onComponentDidMount(){

    }

    sideDrawerClosedHandler = () => {
        this.setState( ( prevState ) => {  
            return { 
                showSideDrawer: false } });
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return {  
                showSideDrawer: !prevState.showSideDrawer }
        } );
    } 
    render () {
    console.log(this.props);
        return (
           <div className="Container">
                <Router>   
                    <Fragment>
                     
                            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                            <div className="Content">
                            <SideDrawer
                                open={this.state.showSideDrawer}
                                closed={this.sideDrawerClosedHandler} />

                                <Route 
                                    exact path={process.env.PUBLIC_URL + routes.BLOG} 
                                    component ={ () => <Blog className="BlogContainer" />} />  

                                <Route
                                    exact path={process.env.PUBLIC_URL +routes.SIGN_UP}
                                    component={() => <SignUpForm />} />

                                <Route
                                    exact path={process.env.PUBLIC_URL + routes.SIGN_IN}
                                    component={() => <SignIn />}
                                  />

                                <Route 
                                    exact path={process.env.PUBLIC_URL + routes.SIGN_OUT}
                                    component={() => <SignOut /> }
                                />
                          
                            </div>
                    </Fragment>

                </Router>
            
                <Footer authUser={this.props.authUser} />
             </div>
        )
    }
}

export default Layout;