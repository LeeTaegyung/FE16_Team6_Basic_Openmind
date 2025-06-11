export function relativeTimeCalculator(time) {
  const baseTime = new Date(time);
  const currentTime = new Date(Date.now());

  const difference = currentTime - baseTime;
  const MILlISECOND = 1000;
  const SECOND = 60;
  const MINUTE = 60;
  const HOUR = 24;
  const DAY = 7;
  if (difference <= MILlISECOND || difference < 0) {
    return '지금';
  } else if (difference <= MILlISECOND * SECOND) {
    return Math.floor(difference / MILlISECOND) + '초전';
  } else if (difference <= MILlISECOND * SECOND * MINUTE) {
    return Math.floor(difference / (MILlISECOND * SECOND)) + '분전';
  } else if (difference <= MILlISECOND * SECOND * MINUTE * HOUR) {
    return Math.floor(difference / (MILlISECOND * SECOND * MINUTE)) + '시간전';
  } else if (difference <= MILlISECOND * SECOND * MINUTE * HOUR * DAY) {
    return (
      Math.floor(difference / (MILlISECOND * SECOND * MINUTE * HOUR)) + '일전'
    );
  } else {
    return (
      Math.floor(difference / (MILlISECOND * SECOND * MINUTE * HOUR * DAY)) +
      '주전'
    );
  }
}
