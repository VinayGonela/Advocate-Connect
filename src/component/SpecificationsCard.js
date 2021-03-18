/*
import React,{useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function SpecificationsCard() {
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
    return (
        <div className="App container">
          
          <DropdownButton
          
          title="Select_Category"
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
            ><Dropdown.Item eventKey="Family" >Family</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="Civil" >Civil</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="Banking">Banking</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="Criminal" >Criminal</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="Employement" >Employment</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="BUsiness" >Business</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="Cyber">Cyber</Dropdown.Item>
            <br />
            <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
      </DropdownButton>
      <h4>You selected {value}</h4>
    </div>
  );
}
export default SpecificationsCard;
*/

import React, { Component } from 'react';
import { render } from 'react-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class SpecificationsCard  extends Component {
        constructor() {
          super();
      
          this.state = {
            selection : 1
          };
          this.handleChange = this.handleChange.bind(this); 
        }
      
        handleChange(event, index, value) {
          //set selection to the value selected
          this.setState({ selection : value });
      
        }
        render() {
        return (
          <div>
            <MuiThemeProvider>
            
         <DropDownMenu 
                value={this.state.selection} 
                onChange={this.handleChange}   
               >
                <MenuItem value={1} primaryText="Family"  />
                <MenuItem value={2} primaryText="Crime" />
                <MenuItem value={3} primaryText="Property" />
                <MenuItem value={4} primaryText="Cyber" />
                <MenuItem value={5} primaryText="Employement"  />
                <MenuItem value={6} primaryText="Banking" />
                <MenuItem value={7} primaryText="Business" />
                <MenuItem value={8} primaryText="Others" />
      
              </DropDownMenu>
              
              </MuiThemeProvider>
              </div>
          );
        }
      }
      
      render(<SpecificationsCard />, document.getElementById('root'));
      export default SpecificationsCard
