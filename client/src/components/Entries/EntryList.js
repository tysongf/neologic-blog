import {
   Container,
   Card,
   Button,
   CloseButton,
   Row,
   Col,
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropMenu from "../UI/DropMenu";
import EntryItem from "./EntryItem";
import css from "./EntryList.css";

function EntryList() {
   return (
      <Container>
         <Row xs={1} md={2} className="g-4 mt-0">
            {Array.from({ length: 4 }).map((_, idx) => (
               <EntryItem></EntryItem>
            ))}
         </Row>
      </Container>
   );
}

export default EntryList;
