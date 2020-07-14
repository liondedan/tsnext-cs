import '@testing-library/jest-dom/extend-expect';
import { isHighSeason } from './index';

test('it should return true if the query date is within the high season', async () => {
  let queryDate1 = new Date('2020-06-20');
  let highSeason1 = isHighSeason(queryDate1);
  expect(highSeason1).toBe(true);

  let queryDate2 = new Date('2020-07-02');
  let highSeason2 = isHighSeason(queryDate2);
  expect(highSeason2).toBe(true);

  let queryDate3 = new Date('2020-05-25');
  let highSeason3 = isHighSeason(queryDate3);
  expect(highSeason3).toBe(true);
});

test('it should return false if the query date is after the high season', async () => {
  let queryDate = new Date('2020-09-20');
  let highSeason = isHighSeason(queryDate);
  expect(highSeason).toBe(false);
});

test('it should return false if the query date is before the high season', async () => {
  let queryDate = new Date('2020-04-20');
  let highSeason = isHighSeason(queryDate);
  expect(highSeason).toBe(false);
});
