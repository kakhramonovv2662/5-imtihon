import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function ContextProvider({ children }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/posts?_page=1&_limit=10`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
