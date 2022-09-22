import { useContext } from "react";
import { Button, Navbar, Container } from "react-bootstrap";
import "./App.css";
import EntryList from "./components/Entries/EntryList";
import EntryModal from "./components/Entries/EntryModal";
import { ThemeContext } from "./contexts/theme-context";
import EntriesProvider from "./store/EntriesProvider";

function App() {
   const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
   return (
      <EntriesProvider>
         <div
            style={{
               backgroundColor: theme.backgroundColor,
               paddingBottom: "2rem",
               height: "100%",
            }}
         >
            <Navbar bg="primary" variant="dark">
               <Container>
                  <Navbar.Brand>neologic</Navbar.Brand>
                  <EntryModal></EntryModal>
                  <Button
                     variant="primary"
                     className="justify-content-end"
                     onClick={toggleTheme}
                  >
                     {isDark ? "Light" : "Dark"} Mode
                  </Button>
               </Container>
            </Navbar>
            <EntryList
               style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
               }}
            />
         </div>
      </EntriesProvider>
   );
}

export default App;
