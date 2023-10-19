type Listener = () => void;

export type PubSub = {
  subscribe: (listener: Listener) => () => void;
  notify: () => void;
};

export function createPubSub(): PubSub {
  const listeners: Set<Listener> = new Set();

  const subscribe = (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const notify = () => listeners.forEach((listener) => listener());

  return {
    subscribe,
    notify,
  };
}
