import React from 'react';
import renderer from 'react-test-renderer';
import CounterIncrementer from './CounterIncrementer';


test('Create counter page snapshot', () => {
  let value = 0
  const increaseValue = () => {
    value += 1;
  };
  const component = renderer.create(
    <CounterIncrementer counter={value} increaseCounter={increaseValue} decreaseCounter={() => {}}/>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

