# NOSTR Example Project

This is a project built with [NDK](https://github.com/nostr-dev-kit/ndk) & [nostr-tools](https://github.com/nbd-wtf/nostr-tools) that demonstrates the basics of building on top of the **Nostr Protocol**

### What is NOSTR?

Nostr is a simple, open protocol that enables truly censorship-resistant and global value-for-value publishing on the web.

- The protocol is based on simple and flexible `Event` objects (JSON) and uses public-key cryptography for keys and signing
- Nostr doesn't rely on a small number of trusted servers to store data, but rather a network of **Relays** that are interchangeable
- Nostr events are easily verifiable due to their cryptographic nature

### Dependencies

- `@nostr-dev-kit/ndk`: a nostr development kit that makes the experience of building Nostr-related applications, whether they are relays, clients, or anything in between, better, more reliable and overall nicer to work with than existing solutions.

- `nostr-tools`: tools for developing nostr clients, providing lower-level functionality such as generating keys

### Run the project

1. `git clone git@github.com:mattwilson02/example-nostr.git` to clone the project

2. `npm install` to install dependencies and `npm run start` to start the development server

NOTE: for each component and function, there will be either a descriptive comment explaining how the code snippet works, or a corresponding **example.md** file with an explanation.
