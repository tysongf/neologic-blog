import { useState, useContext } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import EntriesContext from "../../store/entries-context";

const EntryModal = (props) => {
   const entriesContext = useContext(EntriesContext);

   const [show, setShow] = useState(false);
   const [entryTitle, setEntryTitle] = useState("");
   const [entryDescription, setEntryDescription] = useState("");
   const [quote, setQuote] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [error, setError] = useState("");

   const handleClose = () => setShow(false);
   const handleShow = () => {
      setShow(true);
      if (!quote) {
         fetchNewQuote();
      }
   };

   const fetchNewQuote = async () => {
      setIsLoading(true);
      try {
         const response = await fetch("http://localhost:8000/api/quote");
         const data = await response.json();
         setIsLoading(false);
         setQuote(data);
      } catch (err) {
         setIsLoading(false);
         setError("Failed to fetch a quote.");
      }
   };

   const handleSubmit = async () => {
      try {
         setError("");
         setIsSubmitting(true);
         const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               title: entryTitle,
               description: entryDescription,
               quote: quote._id,
            }),
         };

         const response = await fetch(
            "http://localhost:8000/api/entries",
            requestOptions,
            {}
         );
         entriesContext.addEntry(response.data);
      } catch (err) {
         setIsSubmitting(false);
         setError("Failed to post entry.");
      }
   };

   const titleChangeHandler = (event) => {
      setEntryTitle(event.target.value);
   };
   const descriptionChangeHandler = (event) => {
      setEntryDescription(event.target.value);
   };

   return (
      <>
         <Button variant="primary light" onClick={handleShow}>
            New Journal Entry +
         </Button>
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>New Journal Entry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlInput1"
                  >
                     <Form.Label>Title</Form.Label>
                     <Form.Control
                        type="text"
                        autoFocus
                        value={entryTitle}
                        onChange={titleChangeHandler}
                     />
                  </Form.Group>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlTextarea1"
                  >
                     <Form.Label>Description</Form.Label>
                     <Form.Control
                        as="textarea"
                        rows={5}
                        value={entryDescription}
                        onChange={descriptionChangeHandler}
                     />
                  </Form.Group>

                  {!isLoading && !error && (
                     <blockquote className="text-center">
                        <em>
                           <span>"{quote?.quote}"</span>
                           <span className="author"> -{quote?.author}</span>
                        </em>
                     </blockquote>
                  )}
                  {error && (
                     <Alert variant="warning" className="m-2 text-center">
                        {error}
                     </Alert>
                  )}
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <div className="container">
                  <div className="row">
                     <div className="col">
                        <Button variant="secondary" onClick={handleClose}>
                           Cancel
                        </Button>
                     </div>

                     <div className="col">
                        <Button
                           className="float-end"
                           variant="primary"
                           onClick={handleSubmit}
                           disabled={isLoading || isSubmitting}
                        >
                           Submit Entry
                        </Button>
                     </div>
                  </div>
               </div>
            </Modal.Footer>
         </Modal>
      </>
   );
};

export default EntryModal;
