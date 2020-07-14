import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { useCalcPrice } from './useCalcPrice';

test('it should return true if the query date is within the high season', async () => {
  let queryDate1 = new Date('2020-06-20');
  let price = useCalcPrice('cat');
  console.log(price);
  expect(price).toBe(12);
});
