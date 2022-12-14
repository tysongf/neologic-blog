import { useContext, useState } from "react";
import { Col, Card, Button, CloseButton, Form, Stack } from "react-bootstrap";
import Moment from "react-moment";
import { ThemeContext } from "../../contexts/theme-context";
import DeleteModal from "./DeleteModal";
import "./EntryItem.css";

function EntryItem(props) {
   const entry = props.entry;

   const [editing, setEditing] = useState(false);
   const [showDelete, setShowDelete] = useState(false);
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

   const showDeleteHandler = () => {
      setShowDelete(true);
   };

   const closeDeleteHandler = () => {
      setShowDelete(false);
   };

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
            `/api/entries/${entry._id}`,
            requestOptions,
            {}
         );

         if (response.ok) {
            entry.title = title;
            entry.description = description;
            setIsLoading(false);
            toggleEdit();
         }
      } catch (err) {
         setIsLoading(false);
         cancelHandler();
      }
   };

   const [{ theme }] = useContext(ThemeContext);

   return (
      <>
         <Col>
            <Card variant="primary" style={{ borderColor: theme.borderColor }}>
               <Card.Header
                  style={{
                     backgroundColor: theme.secondaryBackgroundColor,
                     color: theme.color,
                  }}
               >
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
                     <div className="ms-auto">
                        <Moment format="dddd MMM D, YYYY - LT">
                           {entry.created_at}
                        </Moment>
                     </div>
                     <CloseButton
                        className="ms-auto"
                        onClick={showDeleteHandler}
                        disabled={isLoading}
                     ></CloseButton>
                  </Stack>
               </Card.Header>
               {!editing && (
                  <>
                     <Card.Body
                        style={{
                           backgroundColor: theme.backgroundColor,
                           color: theme.color,
                        }}
                     >
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="show-linebreaks">
                           {description}
                        </Card.Text>
                     </Card.Body>
                     <Card.Footer
                        className="text-center"
                        style={{
                           backgroundColor: theme.secondaryBackgroundColor,
                           color: theme.color,
                        }}
                     >
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
                  <Card.Body
                     style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                     }}
                  >
                     <Form>
                        <Form.Group className="mb-3">
                           <Form.Control
                              style={{
                                 backgroundColor:
                                    theme.secondaryBackgroundColor,
                                 color: theme.color,
                                 borderColor: theme.borderColor,
                              }}
                              type="text"
                              autoFocus
                              value={title}
                              onChange={titleChangeHandler}
                           />
                        </Form.Group>
                        <Form.Group className="mb-3">
                           <Form.Control
                              style={{
                                 backgroundColor:
                                    theme.secondaryBackgroundColor,
                                 color: theme.color,
                                 borderColor: theme.borderColor,
                              }}
                              as="textarea"
                              rows={9}
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
         <DeleteModal
            entry={entry}
            show={showDelete}
            onClose={closeDeleteHandler}
         ></DeleteModal>
      </>
   );
}

export default EntryItem;
