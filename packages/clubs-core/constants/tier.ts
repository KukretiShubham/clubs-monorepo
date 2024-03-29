export type Tier = Readonly<{
  title: string
  id: string
  amount: number | string
  badgeImageDescription?: string
  badgeImageSrc?: string
}>

export type Tiers = ReadonlyArray<Tier>

export const tiers: Tiers = [
  {
    title: 'Tier 3',
    id: 'tier-3',
    amount: 400,
    badgeImageDescription: `"Yasuragi dan Renge (a Buddhist altar, lotus)" embossed gilt lacquer work with inlaid mother-of-pearl`,
  },
  {
    title: 'Tier 2',
    id: 'tier-2',
    amount: 4000,
    badgeImageDescription: `"Yasuragi dan Koki (a Buddhist altar, brightness)" embossed gilt lacquer work`,
  },
  {
    title: 'Tier 1',
    id: 'tier-1',
    amount: 10000,
    badgeImageDescription: `Sojiij Head Monastry : Nioh statue (statues of the two Deva kings)`,
  },
  {
    title: 'Super',
    id: 'super',
    amount: 15000,
    badgeImageDescription: `Gokokuji= Head Monastry : Nyoirin Kannon statue (Cintāmaṇicakra statue)`,
  },
] as const
