import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader({request}: LoaderFunctionArgs ) {
    return {};
}

export default function Index() {
  const  user  = useLoaderData<typeof loader>()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix Auth WebAuthn 😴😴!</h1>
      { user?.username ? <p>Hi {user.username}</p> : <p>Hi guest</p>}
    </div>
  );
}
