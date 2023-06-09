import { createContext, useState } from "react";

const dataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [coursePage, setCoursePage] = useState({});

  return (
    <dataContext.Provider
      value={{
        loading,
        setLoading,
        coursePage,
        setCoursePage,
        toggleMobileMenu,
        setToggleMobileMenu,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default dataContext;
