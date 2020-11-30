import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import JokeSearch from './JokeSearch';

const setup = () => {
  const rend = render(<JokeSearch categories={[]} />);
  const input = rend.getByLabelText("Joke Count");
  return input;
}

test('Default count should be 10', () => {
  const elem = setup();
  const val = Number(elem.value)
  expect(val).toBe(10)
});

test("Count can't be set less than 1", () => {
  const elem = setup();
  fireEvent.change(elem, { target: { value: -1 } });
  let val = Number(elem.value)
  expect(val).not.toBe(-1);
  expect(val).toBe(10);

  fireEvent.change(elem, { target: { value: 5 } })
  val = Number(elem.value);
  expect(val).toBe(5);
})
