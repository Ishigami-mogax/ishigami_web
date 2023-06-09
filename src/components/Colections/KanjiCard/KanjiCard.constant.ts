export interface PropsInterface {
  kanji: {
    kanji: string
    reading: Array<{ reading: string, id: string, isOnyumi: boolean }>
    id: string
    signification: string
    lines: number
    description: string
  }
  onClick: () => void
}

export interface IReading {
  reading: string
  id: string
  isOnyumi: boolean
}

export const kanjis: Array<{
  kanji: string
  reading: Array<{ reading: string, id: string, isOnyumi: boolean }>
  id: string
  signification: string
  lines: number
  description: string
}> = [
  {
    id: "1",
    signification: "chien",
    kanji: "犬",
    reading: [
      { id: "1", reading: "いぬ", isOnyumi: true },
      { id: "2", reading: "テン", isOnyumi: false }
    ],
    lines: 4,
    description: "Ceci représente le kanji du chien."
  },
  {
    id: "2",
    signification: "chat",
    kanji: "猫",
    reading: [
      { id: "1", reading: "ねこ", isOnyumi: true },
      { id: "2", reading: "ビョオ", isOnyumi: false }
    ],
    lines: 9,
    description: "Ceci représente le kanji du chat."
  },
  {
    id: "3",
    signification: "cheval",
    kanji: "馬",
    reading: [
      { id: "1", reading: "うま", isOnyumi: true },
      { id: "2", reading: "バ / メ / マ", isOnyumi: false }
    ],
    lines: 12,
    description: "Ceci représente le kanji du cheval."
  }
]
