import React from 'react';
import { render } from '@testing-library/react';
import CounterIncrementer from './CounterIncrementer';

test('Create counter page snapshot', () => {
  let value = 0;
  const increaseValue = () => {
    value += 1;
  };
  const { asFragment } = render(
    <CounterIncrementer
      counter={value}
      increaseCounter={increaseValue}
      decreaseCounter={() => {}}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
