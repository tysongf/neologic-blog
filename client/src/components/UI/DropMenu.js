import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropMenu() {
   return (
      <DropdownButton id="dropdown-basic-button" title="">
         <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
         <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
      </DropdownButton>
   );
}

export default DropMenu;
