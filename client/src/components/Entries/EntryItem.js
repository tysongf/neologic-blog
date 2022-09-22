import { useState } from "react";
import { Col, Card, Button, CloseButton, Form, Stack } from "react-bootstrap";
import "./EntryItem.css";

function EntryItem(props) {
   const entry = props.entry;

   const [editing, setEditing] = useState(false);
   const [description, setDescription] = useState(entry.description);
   const [title, setTitle] = useState(entry.title);
   const [isLoading, setIsLoading] = useState(false);

   const toggleEdit = () => {
      setEditing(!editing);
   };

   const titleChangeHandler = (event) => {
      setTitle(event.target.value);
   };
   const descriptionChangeHandler = (event) => {
      setDescription(event.target.value);
   };
   const cancelHandler = () => {
      toggleEdit();
      setTitle(entry.title);
      setDescription(entry.description);
   };

   const deleteHandler = () => {};

   const saveHandler = async () => {
      try {
         setIsLoading(true);
         const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               title: title,
               description: description,
            }),
         };

         const response = await fetch(
            `http://localhost:8000/api/entries/${entry._id}`,
            requestOptions,
            {}
         );
         setIsLoading(false);
         toggleEdit();
         if (!response.ok) {
            const errorMessage = "Failed to post entry.";
            throw new Error(errorMessage);
         }
      } catch (err) {
         setIsLoading(false);
         cancelHandler();
      }
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
                     <Button
                        variant="danger"
                        onClick={cancelHandler}
                        disabled={isLoading}
                     >
                        Cancel
                     </Button>
                  )}
                  <div className="ms-auto">{entry.created_at}</div>
                  <CloseButton
                     className="ms-auto"
                     onClick={deleteHandler}
                     disabled={isLoading}
                  ></CloseButton>
               </Stack>
            </Card.Header>
            {!editing && (
               <>
                  <Card.Body>
                     <Card.Title>{title}</Card.Title>
                     <Card.Text>{description}</Card.Text>
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
                     <Form.Group className="mb-3">
                        <Form.Control
                           type="text"
                           autoFocus
                           value={title}
                           onChange={titleChangeHandler}
                        />
                     </Form.Group>
                     <Form.Group className="mb-3">
                        <Form.Control
                           as="textarea"
                           rows={Math.floor(entry.description.length / 40)}
                           value={description}
                           onChange={descriptionChangeHandler}
                        />
                     </Form.Group>
                     <Form.Group>
                        {editing && (
                           <div className="d-grid">
                              <Button
                                 variant="success"
                                 onClick={saveHandler}
                                 disabled={isLoading}
                              >
                                 Save
                              </Button>
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
