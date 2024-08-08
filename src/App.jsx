import { useLocation } from "react-router-dom";

import { Container } from "./components/Container";
import { Link } from "./components/Link";

const REDIRECT_URI = "http://localhost:5173";
const token = "";
const name = "";
const rut = "";

export function App() {
  const { pathname } = useLocation();
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
          data-redirect_uri={REDIRECT_URI}
          data-user_type={"insured"}
          data-token={token}
        >
          Asegurado
        </Link>
        <Link
          data-redirect_uri={REDIRECT_URI}
          data-user_type={"broker"}
          data-token={token}
        >
          Corredor
        </Link>
        <Link
          data-redirect_uri={REDIRECT_URI}
          data-user_type={"delegate"}
          data-token={token}
        >
          Delegado
        </Link>
        <Link
          data-redirect_uri={REDIRECT_URI}
          data-user_type={"company"}
          data-token={token}
        >
          Empresa
        </Link>
        <Link
          data-redirect_uri={REDIRECT_URI}
          data-user_type={"ldap"}
          data-token={token}
        >
          LDAP
        </Link>
      </Container>
    </section>
  );
}

export default App;
