import { ReactPortal, useState } from "react";
import { Button, Card, Navbar, Container, Section } from "react-bootstrap";
import "./App.css";
import EntryList from "./components/Entries/EntryList";
import EntryModal from "./components/Entries/EntryModal";

function App() {
   const [entryModalVisible, setEntryModalVisible] = useState(false);

   return (
      <>
         <Navbar bg="primary" variant="dark">
            <Container>
               <Navbar.Brand href="#home">neologic</Navbar.Brand>
               <EntryModal></EntryModal>
               <Button variant="dark" className="justify-content-end">
                  Dark Mode
               </Button>
            </Container>
         </Navbar>
         <EntryList />
      </>
   );
}

export default App;
