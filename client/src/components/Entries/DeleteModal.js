import { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import EntriesContext from "../../store/entries-context";

const DeleteModal = (props) => {
   const entry = props.entry;
   const entriesContext = useContext(EntriesContext);

   const [show, setShow] = useState(props.show);

   const handleDelete = async () => {
      try {
         const requestOptions = {
            method: "DELETE",
         };

         const response = await fetch(
            `http://localhost:8000/api/entries/${entry._id}`,
            requestOptions,
            {}
         );

         entriesContext.removeEntry(entry._id);
         props.onClose();
      } catch (err) {}
   };

   return (
      <Modal show={props.show} onHide={props.onClose} animation={false}>
         <Modal.Body>Are you sure you want to delete ?</Modal.Body>
         <Modal.Footer>
            <div className="container">
               <div className="row">
                  <div className="col">
                     <Button variant="secondary" onClick={props.onClose}>
                        Cancel
                     </Button>
                  </div>

                  <div className="col">
                     <Button
                        className="float-end"
                        variant="danger"
                        onClick={handleDelete}
                     >
                        Delete Entry
                     </Button>
                  </div>
               </div>
            </div>
         </Modal.Footer>
      </Modal>
   );
};

export default DeleteModal;
