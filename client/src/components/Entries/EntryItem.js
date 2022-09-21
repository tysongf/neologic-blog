import { useState } from "react";
import { Col, Card, Row, Button, CloseButton, Form } from "react-bootstrap";
import "./EntryItem.css";

function EntryItem() {
   const [editing, setEditing] = useState(false);

   const toggleEdit = () => {
      setEditing(!editing);
   };

   return (
      <Col>
         <Card variant="primary">
            <Card.Header>
               <Row>
                  <Col>
                     {!editing && (
                        <Button variant="primary" onClick={toggleEdit}>
                           Edit
                        </Button>
                     )}{" "}
                     {editing && <Button variant="success">Save</Button>}{" "}
                     {editing && (
                        <Button variant="danger" onClick={toggleEdit}>
                           Cancel
                        </Button>
                     )}
                  </Col>
                  <Col className="text-end">
                     <CloseButton></CloseButton>
                  </Col>
               </Row>
            </Card.Header>
            {!editing && (
               <>
                  <Card.Body>
                     <Card.Title>Card title</Card.Title>
                     <Card.Text>
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
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
               </>
            )}
            {editing && (
               <Card.Body>
                  <Form>
                     <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                     >
                        <Form.Label>Entry Title</Form.Label>
                        <Form.Control type="email" autoFocus />
                     </Form.Group>
                     <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                     >
                        <Form.Label>Entry Description</Form.Label>
                        <Form.Control as="textarea" rows={7} />
                     </Form.Group>
                  </Form>
               </Card.Body>
            )}
         </Card>
      </Col>
   );
}

export default EntryItem;
