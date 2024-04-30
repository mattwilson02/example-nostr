import NDK, { NDKEvent, NDKKind } from "@nostr-dev-kit/ndk";
import { useEffect, useMemo, useState } from "react";

const EventList = () => {
  // The `events` state is used to store the events fetched from the relay server.
  const [events, setEvents] = useState<Set<NDKEvent> | []>([]);

  // Events returned from the relay server are stored in a Set.
  // In order to map, and return the JSX element, we need to convert the data structure to an array.
  const listOfEvents = Array.from(events);

  console.log(listOfEvents);
  /**
   * Create a new NDK instance.
   * The `explicitRelayUrls` option is used to specify the relay server to connect to.
   * This is useful when you want to connect to a specific relay server.
   * Here we are using a popular relay server provided by Primal.
   */
  const ndk = useMemo(
    () =>
      new NDK({
        explicitRelayUrls: ["wss://relay.primal.net"],
      }),
    []
  );

  // Connect to the relay server.
  ndk.connect();

  useEffect(() => {
    /**
     * Fetching `events` from the relay server is an asynchronous action.
     * By using the `useEffect` hook, we can fetch the events when the component mounts.
     */

    const fetchEvents = async () => {
      /**
       * The `fetchEvents` method returns a promise that resolves to a set of events.
       * The fn accepts an object including the following properties:
       * - `kinds`: Filter events by kind.
       * - `authors`: Filter events by user/users that we want to fetch events for.
       *
       * In our example, we will filter by the `Text` kind. And we will limit the number of events to 50.
       */
      const ndkEvents = await ndk.fetchEvents({
        kinds: [NDKKind.Text],
        limit: 50,
      });

      setEvents(ndkEvents);
    };

    fetchEvents();
  }, [ndk]);

  return (
    <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
      <h1 style={{ fontFamily: "sans-serif" }}>List of Events</h1>
      {listOfEvents.map((event) => (
        <div
          key={event.id}
          style={{
            border: "solid",
            borderColor: "gray",
            padding: 8,
            borderRadius: 12,
          }}
        >
          <p
            style={{
              display: "flex",
              flex: "wrap",
              textWrap: "wrap",
              textAlign: "center",
              fontFamily: "monospace",
            }}
          >
            {event.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
