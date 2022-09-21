import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EntryModal = (props) => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

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
                     <Form.Control type="email" autoFocus />
                  </Form.Group>
                  <Form.Group
                     className="mb-3"
                     controlId="exampleForm.ControlTextarea1"
                  >
                     <Form.Label>Description</Form.Label>
                     <Form.Control as="textarea" rows={7} />
                  </Form.Group>

                  <blockquote className="text-center">
                     <em>
                        <span>
                           "Anything that can go wrong, needs at least one
                           fallback."
                        </span>
                        <span className="author"> -Tyson Fritz</span>
                     </em>
                  </blockquote>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <div class="container">
                  <div class="row">
                     <div class="col">
                        <Button variant="secondary" onClick={handleClose}>
                           Cancel
                        </Button>
                     </div>

                     <div class="col">
                        <Button
                           className="float-end"
                           variant="primary"
                           onClick={handleClose}
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
