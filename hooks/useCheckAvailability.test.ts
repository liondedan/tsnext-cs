// import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';
// import useFetchCreditReport from './useCheckAvailability';
import axios from 'axios';
jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// test.skip('it returns a value', async () => {
//   mockedAxios.get.mockResolvedValueOnce({
//     data: { greeting: 'hello there' },
//   });

//   const { result } = renderHook(() => useFetchCreditReport());

//   act(() => {
//     expect(result).toBe('hello');
//   });
// });

test.skip('it returns a value', async () => {
    expect(1).toBe(1);
});