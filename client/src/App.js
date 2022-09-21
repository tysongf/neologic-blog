import { Button, Card, Navbar, Container, Section } from "react-bootstrap";
import "./App.css";
import EntryList from "./components/Entries/EntryList";

function App() {
   return (
      <>
         <Navbar bg="primary" variant="dark">
            <Container>
               <Navbar.Brand href="#home">neologic</Navbar.Brand>
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
