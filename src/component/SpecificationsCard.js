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
          style={{backgroundColor:'lightgrey'}}
          title="Select_Category"
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
            ><Dropdown.Item eventKey="Family" >Family</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="Civil" >Civil</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="Banking">Banking</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="Criminal" >Criminal</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="Employement" >Employment</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="BUsiness" >Business</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="Cyber">Cyber</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
      </DropdownButton>
      <h5>You selected {value}</h5>
    </div>
  );
}
export default SpecificationsCard;