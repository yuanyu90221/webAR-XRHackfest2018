import 'aframe-animation-component';
import 'aframe-particle-system-component';
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
        // <a-scene embedded arjs='sourceType: webcam;'>
        //   <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
        //   <a-marker-camera preset='hiro'></a-marker-camera>
        // </a-scene>
        <Scene embedded={true} arjs='sourceType: webcam;'>
           <Entity 
           geometry={{primitive: 'box'}}
           position={{x:0,y:0.5,z:0}}
           material={{opacity:0.5}}>
            </Entity> 
            <a-marker-camera preset='hiro'></a-marker-camera>
        </Scene>
      );
    }
  }
  
  ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));