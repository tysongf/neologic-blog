import { useContext } from "react";
import { Button, Navbar, Container } from "react-bootstrap";
import "./App.css";
import EntryList from "./components/Entries/EntryList";
import EntryModal from "./components/Entries/EntryModal";
import { ThemeContext } from "./contexts/theme-context";
import EntriesProvider from "./contexts/EntriesProvider";

function App() {
   const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
   return (
      <EntriesProvider>
         <Navbar bg="primary" variant="dark">
            <Container>
               <Navbar.Brand>neologic</Navbar.Brand>
               <EntryModal></EntryModal>
               <Button
                  variant="primary"
                  className="justify-content-end"
                  onClick={toggleTheme}
               >
                  {!isDark ? "Light" : "Dark"} Theme
               </Button>
            </Container>
         </Navbar>
         <EntryList></EntryList>
      </EntriesProvider>
   );
}

export default App;
