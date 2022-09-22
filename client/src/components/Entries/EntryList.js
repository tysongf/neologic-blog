import { useState, useEffect, useContext } from "react";
import { Alert, Container, Row } from "react-bootstrap";
import { ThemeContext } from "../../contexts/theme-context";
import EntriesContext from "../../contexts/entries-context";
import Loading from "../UI/Loading";
import EntryItem from "./EntryItem";
import "./EntryList.css";

function EntryList() {
   const entriesContext = useContext(EntriesContext);

   const [entries, setEntries] = useState(entriesContext.entries);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      fetchEntriesHandler();
   }, [entriesContext.entries]);

   const fetchEntriesHandler = async () => {
      setIsLoading(true);
      setError(null);
      try {
         const response = await fetch("http://localhost:8000/api/entries");
         if (!response.ok) {
            const errorMessage = "Failed to fetch entries.";
            setError(errorMessage);
            throw new Error(errorMessage);
         }
         const data = await response.json();
         setIsLoading(false);
         setEntries(data);
      } catch (err) {
         setIsLoading(false);
         setError("Failed to fetch entries.");
      }
   };

   const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

   return (
      <Container style={{ backgroundColor: theme.backgroundColor }}>
         {isLoading && <Loading />}
         {!error && !isLoading && (
            <Row xs={1} lg={2} className="g-4 mt-0">
               {entries.map((entry, idx) => (
                  <EntryItem
                     entry={entry}
                     key={entry._id}
                     onSave={fetchEntriesHandler}
                  ></EntryItem>
               ))}
            </Row>
         )}
         {error && (
            <Alert variant="danger" className="mt-4 text-center">
               {error}
            </Alert>
         )}
      </Container>
   );
}

export default EntryList;
