import { Component } from 'react';

/*Usage example*/

class IpAddress extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ip:""
      };
    }

  componentDidMount() {
    this.intervalID = setTimeout(
      () => this.tick(),
      50
    );
  }
  tick() {
    this.setState({
      ip: window.location.host,
    });
  }
  render() {
    return ( 
      this.state.ip
    );
  }
} 

export default IpAddress;