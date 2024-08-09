import { useLocation } from "react-router-dom";

import { Container } from "./components/Container";
import { Link } from "./components/Link";
import { useEffect } from "react";

const REDIRECT_URI = "http://localhost:5173";
const token = "";
const name = "";
const rut = "";

export function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") return;

    getSessionToken(pathname).then((response) => {
      console.log(response);
    });
  }, [pathname]);

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
  console.log({ pathname });
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <Container id="container">
        <h2 className="text-4xl text-center">DEMO SSO</h2>

        <p className="flex flex-col">
          <span id="name" data-name={name}>
            Nombre: {name}
          </span>
          <span id="rut" data-rut={rut}>
            Rut: {rut}
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
