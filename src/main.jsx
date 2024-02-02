import React from "react";
import ReactDOM from "react-dom/client";
// import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ResourceProvider } from "./contexts/ResourceContext.jsx";
import Titles from "./routes/titles";

const router = createBrowserRouter([
  {
    path: "/titles",
    element: <Titles />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResourceProvider>
      <RouterProvider router={router} />
    </ResourceProvider>
    {/*<Auth0Provider
      domain={import.meta.env.DOMAIN}
      clientId={import.meta.env.CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      
    </Auth0Provider>*/}
  </React.StrictMode>
);
