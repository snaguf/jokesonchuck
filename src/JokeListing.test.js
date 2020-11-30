import React from "react"
import { render, screen } from "@testing-library/react"
import JokeListing from "./JokeListing"


const setup = () => {
  const rend = render(<JokeListing jokes={[]} />);
  const input = rend.getByText(/There are no jokes!/i);
  return input;
}

test("There should be an message when there are no jokes", () => {
  const elem = setup();
  expect(elem).toBeInTheDocument();
})
