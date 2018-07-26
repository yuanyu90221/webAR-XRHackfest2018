// import 'aframe'; 
// import 'aframe-animation-component';
// import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {color: 'red',check:false};
    }
  
    changeColor() {
      const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
      this.setState({
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    checkSwitch(){
      if(this.state.check == false){
        this.setState({check:true});
      }else{
        this.setState({check:false});
      }
      console.log(this.state.check,'check');
    }
    hello(){
      alert('you click me!!');
    }
    render () {
      return (
        <Scene arjs='trackingMethod: best;'>
            <Entity primitive='a-marker' preset="hiro">
              <Entity
              geometry={{primitive: 'box', width: 2}}
              material={{color:'red', roughness: 0.5}}
              scale={{x: 2, y: 2, z: 2}}
              position={{x: 0, y: 0, z: -5}}/>
            </Entity>
            <Entity primitive='camera'/>
        </Scene>
      );
    }
  }
  
  ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));