import React from "react";
import Spinner from "./Spinner";
import { render, screen } from "@testing-library/react";
// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.

test("sanity", () => {
  expect(true).toBe(true);
});
test("spinner renders without errors", () => {
  render(<Spinner />);
});
// test("spinner on is true", () => {
//   render(<Spinner/>)
// })
