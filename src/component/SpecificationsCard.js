
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