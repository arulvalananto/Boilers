import React from "react";

import "./index.css";
import withErrorBoundary from "../../hoc";

const Home = () => {
  return <div>Hello, Developer!</div>;
};

const HomeWithErrorBoundary = withErrorBoundary(Home);
export default HomeWithErrorBoundary;
