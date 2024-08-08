import { useState } from "react";

import { Spinner } from "./Spinner";

import { SSO_NEXT_EP } from "../constants";

export function Link({ children, ...rest }) {
  const [loading, setLoading] = useState(false);

  const redirectUri = rest?.["data-redirect_uri"];
  const userType = rest?.["data-user_type"];
  const token = rest?.["data-token"];

  const url = `${SSO_NEXT_EP}?redirect_uri=${redirectUri}&source=${userType}&token=${token}`;

  return (
    <a
      id="login"
      className="min-w-48 p-3 border-[1px] rounded-xl border-gray-500 text-center flex justify-center items-center"
      href={url}
      {...rest}
      onClick={() => setLoading(true)}
    >
      {loading ? <Spinner /> : children}
    </a>
  );
}

export default Link;
