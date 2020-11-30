import React from 'react';
import { render, screen } from '@testing-library/react';
import JokeSearch from './JokeSearch';

test('Default count should be 10', () => {
  render(<JokeSearch categories={[]} />);
  const elem = screen.getByLabelText("Joke Count");
  const val = Number(elem.value)
  expect(val).toBe(10)
});
