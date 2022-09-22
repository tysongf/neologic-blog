import { useRef, useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Loading from "../UI/Loading";

const EntryModal = (props) => {
   const firstRender = useRef(true);
   const [show, setShow] = useState(false);
   const [entryTitle, setEntryTitle] = useState("");
   const [entryDescription, setEntryDescription] = useState("");
   const [quote, setQuote] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const handleClose = () => setShow(false);
   const handleShow = () => {
      setShow(true);
      if (!quote) {
         fetchNewQuote();
      }
   };

   useEffect(() => {
      if (firstRender.current) {
         firstRender.current = false;
         return;
      }
      console.log("Validating Form...");
   }, [entryTitle, entryDescription]);

   const fetchNewQuote = async () => {
      setIsLoading(true);
      setError(null);
      try {
         const response = await fetch("http://localhost:8000/api/quote");
         if (!response.ok) {
            const errorMessage = "Failed to fetch a quote.";
            setError(errorMessage);
            throw new Error(errorMessage);
         }
         const data = await response.json();
         setIsLoading(false);
         setQuote(data);
      } catch (err) {}
   };

   const handleSubmit = async () => {
      try {
         console.log(entryTitle);
         console.log(entryDescription);
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
         if (!response.ok) {
            const errorMessage = "Failed to post entry.";
            setError(errorMessage);
            throw new Error(errorMessage);
         }
      } catch (err) {}
   };

   const titleChangeHandler = (event) => {
      console.log("event.target.value: " + event.target.value);
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

                  {!isLoading && (
                     <blockquote className="text-center">
                        <em>
                           <span>"{quote?.quote}"</span>
                           <span className="author"> -{quote?.author}</span>
                        </em>
                     </blockquote>
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
                           disabled={isLoading}
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
