import { useLoaderData, useActionData } from "@remix-run/react"
import { json } from "@remix-run/node"
export async function loader() {
  return json({
    ENV: {
      SESSION_SECRET: process.env.SESSION_SECRET,
    },
  });
}

export function Root() {
  const data = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(
              data.ENV
            )}`,
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}
