import NDK, { NDKEvent, NDKKind } from "@nostr-dev-kit/ndk";
import { PlusIcon } from "lucide-react";
import { useMemo, useState } from "react";

const AddEvent = () => {
  const [text, setText] = useState<string>("");

  // TODO: unmock pubkey
  const pubKey = "foobar";

  const onAddEvent = () => {
    /**
     * Create a new NDK instance.
     * The `explicitRelayUrls` option is used to specify the relay server to connect to.
     * This is useful when you want to connect to a specific relay server.
     * Here we are using a popular relay server provided by Primal.
     */
    const ndk = new NDK({
      explicitRelayUrls: ["wss://relay.primal.net"],
    });

    // Connect to the relay server.
    ndk.connect();

    const event = new NDKEvent(ndk, {
      kind: NDKKind.Text,
      content: text,
      tags: [["p", pubKey]],
      created_at: Date.now(),
      pubkey: pubKey,
    });

    event.publish();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <h1 style={{ fontFamily: "sans-serif" }}>Add New Event</h1>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="Whats on your mind?"
        style={{ maxWidth: 200, padding: 8 }}
      />
      <button
        style={{
          height: 40,
          width: 220,
          alignItems: "center",
          justifyItems: "center",
          display: "flex",
          flexDirection: "row",
          gap: 8,
        }}
      >
        <PlusIcon size={20} />
        <p style={{ fontWeight: "bold" }}>Add Event</p>
      </button>
    </div>
  );
};

export default AddEvent;
