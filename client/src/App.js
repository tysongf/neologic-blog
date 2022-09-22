import { Button, Navbar, Container } from "react-bootstrap";
import "./App.css";
import EntryList from "./components/Entries/EntryList";
import EntryModal from "./components/Entries/EntryModal";
import EntriesProvider from "./store/EntriesProvider";

function App() {
   return (
      <EntriesProvider>
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
      </EntriesProvider>
   );
}

export default App;
