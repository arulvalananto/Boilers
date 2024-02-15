import React from "react";

import "./index.css";
import { HomeProps } from "./types";
import withErrorBoundary from "../../hoc";

const Home: React.FC<HomeProps> = () => {
  return <div>Hello, Developer!</div>;
};

const HomeWithErrorBoundary = withErrorBoundary(Home);
export default HomeWithErrorBoundary;
