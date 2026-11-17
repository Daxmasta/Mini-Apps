export type MiniApp = { id: string; name: string; description: string; symbol: string; category: string; url: string | null };
export const apps: MiniApp[] = [
  { id: 'orrery', name: 'Planetary Orrery', description: 'Planetary positions, astronomical clock, and lunar phases.', symbol: '☉', category: 'Astronomy', url: null },
];
// Replace url: null with the deployed Orrery-Web URL when ready.
