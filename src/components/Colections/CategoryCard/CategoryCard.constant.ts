import { type ICategory } from "../Collections.constant"

export interface PropsInterface {
  category: ICategory
  onClick: () => void
}

export const categories: Array<{
  _count: { word_list: number }
  name: string
  id: string
  percent: number
}> = [
  { id: "1", name: "Préhistorique", _count: { word_list: 38 }, percent: 82 },
  { id: "2", name: "Mythique", _count: { word_list: 12 }, percent: 0 }
]
