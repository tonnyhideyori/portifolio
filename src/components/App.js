import React, { Component } from 'react';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
          <div className="w3-row-padding">
            <LeftComponent data={this.props.data}/>
            <RightComponent data={this.props.data}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
