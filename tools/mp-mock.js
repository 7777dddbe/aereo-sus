// Finta capability `room` per i test: due pagine dello stesso browser si parlano via BroadcastChannel.
(() => {
  const ch = new BroadcastChannel('mock-room');
  const me = 'peer-' + Math.random().toString(36).slice(2, 8);
  const state = new Map(); // peer -> presence
  let mine = {};
  const send = () => ch.postMessage({ peer: me, presence: mine });
  ch.onmessage = (e) => {
    const { peer, presence, bye } = e.data;
    if (bye) { state.delete(peer); return; }
    const known = state.has(peer);
    state.set(peer, presence);
    if (!known) send();
  };
  window.addEventListener('pagehide', () => ch.postMessage({ peer: me, bye: true }));
  window.__mockRoom = {
    presence: async (patch) => {
      mine = { ...mine };
      for (const [k, v] of Object.entries(patch)) { if (v === null) delete mine[k]; else mine[k] = JSON.parse(JSON.stringify(v)); }
      send();
    },
    peers: () => {
      const out = [{ peer: me, isMe: true, presence: mine }];
      for (const [peer, presence] of state) out.push({ peer, isMe: false, presence });
      return out;
    },
  };
  window.claude = { use: async (n) => (n === 'room' ? window.__mockRoom : null) };
})();
