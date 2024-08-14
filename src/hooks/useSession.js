import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Services
import { getSessionToken } from "../services";

export const useSession = () => {
  const { pathname } = useLocation();

  const [sessionData, setSessionData] = useState();

  const hasValues = (data = {}) => {
    return Object.values(data).length > 0;
  };

  useEffect(() => {
    if (pathname === "/") return;
    if (typeof sessionData === "object" && hasValues(sessionData)) return;

    const sessionToken = pathname.split("/").at(-1);
    getSessionToken(sessionToken).then((response) => {
      if (!response.data) return;
      setSessionData(response.data);
    });
  }, [sessionData, pathname]);

  return {
    sessionData,
  };
};
