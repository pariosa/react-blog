import { Component } from 'react';

class User extends Component {

  constructor(props){
  	super(props);
  	console.log(props);
  	 
  }
  state = {
  	user: this.props.user
  }

  	componentDidMount(){
  		console.log(this.props);

  		//let email = this.props.user.email;
  	}
  render() {
  	let email = '';
    if(this.props.user){
      email = this.props.user.email;
    }else{
      email = "🤷"
    }
    return ( 
      email
    );
  }
}

export default User;