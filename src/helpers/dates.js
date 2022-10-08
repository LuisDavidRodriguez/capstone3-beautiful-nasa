import { DateTime } from 'luxon';

// you can add or substract data with plus
function getMonthAgo(days = -30) {
  const date = DateTime.local().plus({ days });
  return `${date.year}-${date.month}-${date.day}`;
}

// eslint-disable-next-line import/prefer-default-export
export { getMonthAgo };
