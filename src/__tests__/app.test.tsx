import { render, screen, act } from '@testing-library/react';
import App from '../App';
import user from '@testing-library/user-event';
import flights from '../../test/__mocks__/flights';

jest.useFakeTimers();

jest.mock('../api.ts', () => ({
  getFlights: async () => {
    return flights;
  },
}));

test('correct flights are rendered', async () => {
  // render app
  act(() => {
    render(<App />);
  });

  // assert input is empty
  expect(screen.getAllByText('Enter at least 3 characters to search')).toHaveLength(1);

  const input = await screen.findByRole('input');

  // assert nothing is rendered when entering less than 3 characters
  act(() => {
    user.type(input, 'l');
  });
  expect(screen.getAllByText('Enter at least 3 characters to search')).toHaveLength(1);

  // assert results are returned in correct order when typing 3 chars or more
  act(() => {
    user.type(input, 'on');
  });

  const flights = await screen.findAllByText('London Heathrow');
  expect(flights).toHaveLength(2);
  const firstResult = flights[0];
  const firstCardContent = firstResult.parentElement?.parentElement?.innerHTML;
  expect(firstCardContent?.includes('14:40')).toBeTruthy();
});
