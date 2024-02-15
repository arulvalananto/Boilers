import React, { Component, ErrorInfo } from "react";

import "./index.css";
import { ErrorBoundaryState } from "./types";

const withErrorBoundary = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return class ErrorBoundary extends Component<P, ErrorBoundaryState> {
    constructor(props: P) {
      super(props);
      this.state = {
        hasError: false,
        error: null,
        errorInfo: null,
      };
    }

    async componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      this.setState({
        hasError: true,
        error,
        errorInfo,
      });

      // You can log the error to a service like Sentry or report it in some way.
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="error-boundary">
            <div className="error-boundary-container">
              <div>Faulty Component - {this.state.error?.message}</div>
            </div>
          </div>
        );
      }

      // If there's no error, render the wrapped component normally
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withErrorBoundary;
