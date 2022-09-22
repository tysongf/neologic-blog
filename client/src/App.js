import { Button, Navbar, Container } from "react-bootstrap";
import "./App.css";
import EntryList from "./components/Entries/EntryList";
import EntryModal from "./components/Entries/EntryModal";

function App() {
   return (
      <>
         <Navbar bg="primary" variant="dark">
            <Container>
               <Navbar.Brand>neologic</Navbar.Brand>
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
