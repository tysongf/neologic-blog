import { Col, Card, Row, Button, CloseButton } from "react-bootstrap";
import "./EntryItem.css";

function EntryItem() {
   return (
      <Col>
         <Card variant="primary">
            <Card.Header>
               <Row>
                  <Col>
                     <Button variant="success">Save</Button>{" "}
                     <Button variant="danger">Cancel</Button>
                  </Col>
                  <Col className="text-end">
                     <CloseButton></CloseButton>
                  </Col>
               </Row>
            </Card.Header>
            <Card.Body>
               <Card.Title>Card title</Card.Title>
               <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
               </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
               <blockquote>
                  <em>
                     <span>
                        "Anything that can go wrong, needs at least one
                        fallback."
                     </span>
                     <span className="author"> -Tyson Fritz</span>
                  </em>
               </blockquote>
            </Card.Footer>
         </Card>
      </Col>
   );
}

export default EntryItem;
