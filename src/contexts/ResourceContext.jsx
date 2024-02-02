import { createContext } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";
import useBackground from "../hooks/useBackground.jsx";
import useCategory from "../hooks/useCategory.jsx";
import useResume from "../hooks/useResume.jsx";

export const ResourceContext = createContext();

export function ResourceProvider({ children }) {
  ResourceProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  // const { user, isAuthenticated } = useAuth0();
  const userId = "653c6f6586e5d60a9fcd88f1"; // isAuthenticated ? user.sub : undefined;
  const background = useBackground(userId);
  const category = useCategory(userId);
  const resume = useResume(userId);

  return (
    <ResourceContext.Provider
      value={{
        ...background,
        ...category,
        ...resume,
        userId,
      }}
    >
      {children}
    </ResourceContext.Provider>
  );
}
