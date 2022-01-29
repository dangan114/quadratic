import * as React from "react";

import "./styles.css";

import { QuadraticLoading } from "./ui/QuadtraticLoading";

import QuadraticApp from "./quadratic/QuadraticApp";

export default function App() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  return (
    <>
      {/* Provider of QuadraticApp */}
      <QuadraticApp
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      ></QuadraticApp>
      {/* Loading screen */}
      {isLoading && <QuadraticLoading></QuadraticLoading>}
    </>
  );
}