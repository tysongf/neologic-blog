import { useState } from "react";
import {
   Col,
   Card,
   Row,
   Button,
   CloseButton,
   Form,
   Badge,
   Stack,
} from "react-bootstrap";
import "./EntryItem.css";

function EntryItem(props) {
   const entry = {
      title: "How Much Wood?",
      description:
         "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
   };

   const [editing, setEditing] = useState(false);

   const toggleEdit = () => {
      setEditing(!editing);
   };

   return (
      <Col>
         <Card variant="primary">
            <Card.Header>
               <Stack direction="horizontal">
                  {!editing && (
                     <Button variant="primary" onClick={toggleEdit}>
                        Edit
                     </Button>
                  )}{" "}
                  {editing && (
                     <Button variant="danger" onClick={toggleEdit}>
                        Cancel
                     </Button>
                  )}
                  <div className="ms-auto">Thursday, Sep. 21</div>
                  <CloseButton className="ms-auto"></CloseButton>
               </Stack>
            </Card.Header>
            {!editing && (
               <>
                  <Card.Body>
                     <Card.Title>{entry.title}</Card.Title>
                     <Card.Text>{entry.description}</Card.Text>
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
                        <Form.Control
                           type="text"
                           autoFocus
                           value={entry.title}
                        />
                     </Form.Group>
                     <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                     >
                        <Form.Label>Entry Description</Form.Label>
                        <Form.Control
                           as="textarea"
                           rows={7}
                           value={entry.description}
                        />
                     </Form.Group>
                     <Form.Group>
                        {editing && (
                           <div className="d-grid">
                              <Button variant="success">Save</Button>
                           </div>
                        )}{" "}
                     </Form.Group>
                  </Form>
               </Card.Body>
            )}
         </Card>
      </Col>
   );
}

export default EntryItem;
