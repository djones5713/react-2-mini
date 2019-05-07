import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
 constructor(){
   super();

   this.state = {
    fontColor: 'black',
    fontSize: 12,
    fontFamily: 'monospace',
    allowEdit: 'true'
   };

  //  this.updateColor = this.updateColor.bind(this);
   this.updateFontColor = this.updateFontColor.bind(this);
   this.updateSize = this.updateSize.bind(this);
   this.updateFamily= this.updateFamily.bind(this);
   this.updateEditStatus = this.updateEditStatus.bind(this);

 }

  // updateColor
updateFontColor(val){
  console.log("font color:", val)
  this.setState({
    fontColor: val
  })
}
  // updateSize
  updateSize(val){
    console.log("update size:", val)
    this.setState({
      fontSize: val
    })
  }
  // updateFamily
  updateFamily(val){
    console.log("to update family: ",val)
    this.setState({
      fontFamily: val
    })
  }
  // updateEditStatus
  updateEditStatus(val){
    console.log("to update color: ",val)
    this.setState({
      allowEdit: val
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          {/* Render EditToggle */}
          <EditToggle update={this.updateEditStatus} />
          {/* Render ColorChanger */}
          <ColorChanger update={ this.updateFontColor } allowEdit={ this.state.allowEdit } />
          {/* Render SizeChanger */}
          <SizeChanger update={ this.updateSize } allowEdit={ this.state.allowEdit } />
          {/* Render FamilyChanger */}
          <FamilyChanger update={ this.updateFamily } allowEdit={ this.state.allowEdit } />
        </div>
        <div className="textArea">{/* Render TextContainer */}</div>
        <TextContainer 
            fontColor={ this.state.fontColor }
            fontSize={ this.state.fontSize }
            fontFamily={ this.state.fontFamily } />
      </div>
    );
  }
}

export default App;
