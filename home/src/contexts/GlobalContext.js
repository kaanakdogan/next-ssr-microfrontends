const { useContext, useState, createContext } = require("react");

const GlobalContext = createContext(null);
const GlobalDispatchContext = createContext(null);

export function GlobalContextProvider({ children }) {
  const [value, setValue] = useState(null);

  return (
    <GlobalContext.Provider value={value}>
      <GlobalDispatchContext.Provider value={setValue}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export function useGlobalDispatchContext() {
  return useContext(GlobalDispatchContext);
}
