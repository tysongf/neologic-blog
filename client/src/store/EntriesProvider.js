import { useReducer } from "react";
import EntriesContext from "./entries-context";

const defaultEntriesState = {
   entries: [],
};

const entriesReducer = (state, action) => {
   if (action.type === "ADD_ENTRY") {
      const updatedEntries = state.entries.concat(action.entries);
      return {
         entries: updatedEntries,
      };
   } else if (action.type === "REMOVE_ENTRY") {
   }
};

const EntriesProvider = (props) => {
   const [entriesState, dispatchEntriesAction] = useReducer(
      entriesReducer,
      defaultEntriesState
   );

   const addEntryHandler = (entry) => {
      dispatchEntriesAction({ type: "ADD_ENTRY", entry: entry });
   };

   const removeEntryHandler = (id) => {
      dispatchEntriesAction({ type: "REMOVE_ENTRY", id: id });
   };

   const entriesContext = {
      entries: entriesState.entries,
      addEntry: addEntryHandler,
      removeEntry: removeEntryHandler,
   };

   return (
      <EntriesContext.Provider value={entriesContext}>
         {props.children}
      </EntriesContext.Provider>
   );
};

export default EntriesProvider;
