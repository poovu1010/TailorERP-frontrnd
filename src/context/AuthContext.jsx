import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthDetails = createContext();

export function UserDetails({ children }) {
  const [token, managetoken] = useState(() => {});

  return <AuthDetails.Provider value={{}}>{children}</AuthDetails.Provider>;
}

export default AuthDetails;
