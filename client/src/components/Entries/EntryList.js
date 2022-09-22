import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "../UI/Loading";
import EntryItem from "./EntryItem";
import "./EntryList.css";

function EntryList() {
   const [entries, setEntries] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
      fetchEntriesHandler();
   }, []);

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
      } catch (err) {}
   };

   return (
      <Container>
         {isLoading && <Loading />}
         {!error && !isLoading && (
            <Row xs={1} md={2} xl={3} className="g-4 mt-0">
               {entries.map((entry, idx) => (
                  <EntryItem entry={entry} key={entry._id}></EntryItem>
               ))}
            </Row>
         )}
      </Container>
   );
}

export default EntryList;
