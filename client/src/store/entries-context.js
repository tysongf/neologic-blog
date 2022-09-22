import React from "react";

const EntriesContext = React.createContext({
   entries: [],
   addEntry: (item) => {},
   removeEntry: (id) => {},
});

export default EntriesContext;
