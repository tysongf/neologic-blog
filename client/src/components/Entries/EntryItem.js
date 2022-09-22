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
   const entry = props.entry;

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
                  <div className="ms-auto">{entry.created_at}</div>
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
                     {entry.quote && (
                        <blockquote>
                           <em>
                              <span>"{entry.quote.quote}"</span>
                              <span className="author">
                                 {" "}
                                 -{entry.quote.author}
                              </span>
                           </em>
                        </blockquote>
                     )}
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
                        <Form.Control
                           as="textarea"
                           rows={Math.floor(entry.description.length / 40)}
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
