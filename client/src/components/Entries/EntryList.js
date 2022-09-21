import { Container, Row } from "react-bootstrap";
import EntryItem from "./EntryItem";
import "./EntryList.css";

function EntryList() {
   return (
      <Container>
         <Row xs={1} md={2} xl={3} className="g-4 mt-0">
            {Array.from({ length: 13 }).map((_, idx) => (
               <EntryItem></EntryItem>
            ))}
         </Row>
      </Container>
   );
}

export default EntryList;
