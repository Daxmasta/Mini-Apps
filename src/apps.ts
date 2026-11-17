export type MiniApp = { id: string; name: string; description: string; symbol: string; category: string; version: string; url: string | null };
export const apps: MiniApp[] = [
  { id: 'orrery', name: 'Planetary Orrery', description: 'Planetary positions, astronomical clock, and lunar phases.', symbol: '☉', category: 'Astronomy', version: '0.4.0', url: 'https://daxmasta.github.io/Orrery-Web/' },
];
