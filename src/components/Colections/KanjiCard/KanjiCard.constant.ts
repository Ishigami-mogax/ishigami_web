export interface PropsInterface {}

export const kanjis: {
  kanji: string;
  reading: { reading: string; id: string; isOnyumi: boolean }[];
  id: string;
  signification: string;
}[] = [
  {
    id: "1",
    signification: "chien",
    kanji: "犬",
    reading: [
      { id: "1", reading: "いぬ", isOnyumi: true },
      { id: "2", reading: "テン", isOnyumi: false },
    ],
  },
  {
    id: "2",
    signification: "chat",
    kanji: "猫",
    reading: [
      { id: "1", reading: "ねこ", isOnyumi: true },
      { id: "2", reading: "ビョオ", isOnyumi: false },
    ],
  },
  {
    id: "3",
    signification: "cheval",
    kanji: "馬",
    reading: [
      { id: "1", reading: "うま", isOnyumi: true },
      { id: "2", reading: "バ / メ / マ", isOnyumi: false },
    ],
  },
];
