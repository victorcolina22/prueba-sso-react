import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container } from "./components/Container";
import { Link } from "./components/Link";

const REDIRECT_URI = "http://localhost:5173";
const token = "";
const name = "";
const rut = "";

export function App() {
  const { pathname } = useLocation();

  const [state, setState] = useState();

  useEffect(() => {
    if (pathname === "/") return;
    if (typeof state === "object" && Object.keys(state).length > 0) return;

    const sessionToken = pathname.split("/").at(-1);
    getSessionToken(sessionToken).then((response) => {
      if (!response.data) return;
      setState(response.data);
    });
  }, [state]);

  async function getSessionToken(uuid) {
    const response = await fetch(
      "http://localhost:3001/v1/auth/session-token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uuid }),
      },
    );

    return response.json();
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <Container id="container">
        <h2 className="text-4xl text-center">DEMO SSO</h2>

        <p className="flex flex-col">
          <span id="name" data-name={name}>
            Nombre: {state?.name ?? ""}
          </span>
          <span id="rut" data-rut={rut}>
            Rut: {state?.rut ?? ""}
          </span>
          <span id="token" data-token={token}></span>
        </p>

        <Link
          data-redirecturi={REDIRECT_URI}
          data-usertype={"insured"}
          data-token={token}
        >
          Asegurado
        </Link>
        <Link
          data-redirecturi={REDIRECT_URI}
          data-usertype={"broker"}
          data-token={token}
        >
          Corredor
        </Link>
        <Link
          data-redirecturi={REDIRECT_URI}
          data-usertype={"delegate"}
          data-token={token}
        >
          Delegado
        </Link>
        <Link
          data-redirecturi={REDIRECT_URI}
          data-usertype={"company"}
          data-token={token}
        >
          Empresa
        </Link>
        <Link
          data-redirecturi={REDIRECT_URI}
          data-usertype={"ldap"}
          data-token={token}
        >
          LDAP
        </Link>
        <Link
          data-redirecturi={REDIRECT_URI}
          data-usertype={"insurable"}
          data-token={token}
        >
          Asegurable
        </Link>
      </Container>
    </section>
  );
}

export default App;
