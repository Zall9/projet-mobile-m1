//event is an object of object
/**
 * It takes an object of events, and returns a random event from that object
 * @param events - an object containing all the events
 * @returns A random event from the events object.
 */
export const pickRandomEvent = (events) => {
  const eventKeys = Object.keys(events);
  const randomEventKey =
    eventKeys[Math.floor(Math.random() * eventKeys.length)];
  return events[randomEventKey];
};
