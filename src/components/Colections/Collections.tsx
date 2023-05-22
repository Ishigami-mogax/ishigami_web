import { type FC, type PropsWithChildren, useEffect, useState } from "react"
import { type ICategory, type IWord, type IWordList, type PropsInterface } from "./Collections.constant"
import { styles } from "./Collections.style"
import { Box, Grid, Paper, Typography } from "@mui/material"
import Icon from "@mui/material/Icon"
import CategoryCard from "./CategoryCard/CategoryCard"
import KanjiCard from "./KanjiCard/KanjiCard"
import ButtonGlobal from "../_input/Button/Button"
import KanjiDetailCard from "./KanjiDetailCard/KanjiDetailCard"
import CreateCategoryForm from "./CreateCategoryForm/CreateCategoryForm"
import axios, { type AxiosResponse } from "axios"

const Collections: FC = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
  //region Default
  const { boxCategoriesStyle, iconStyle, gridKanjiDetail } = styles
  //endregion

  //region Context
  //endregion

  //region Route
  //endregion

  //region UseState
  const [category, setCategory] = useState<ICategory>()
  const [categories, setCategories] = useState<ICategory[]>([])
  const [superCategoryId, setSuperCategoryId] = useState<string>("")
  const [kanjis, setKanjis] = useState<IWordList[]>([])
  const [kanji, setKanji] = useState<IWord>()
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false)
  //endregion

  //region UseEffect
  useEffect(() => {
    apiGetCategories("")
  }, [])
  //endregion

  //region Handle
  const apiGetCategories = (id: string): void => {
    axios
      .get(`http://localhost:4000/categories`)
      .then((res: AxiosResponse) => {
        setCategory(res.data)
        setCategories(res.data.other_category)
        setSuperCategoryId(res.data.super_category_id)
        setKanjis(res.data.word_list)
      })
      // eslint-disable-next-line @typescript-eslint/typedef
      .catch((error) => {
        console.log(error)
      })
  }

  const apiGetCategoriesWithId = (id: string): void => {
    axios
      .get(`http://localhost:4000/categories/${id}`)
      .then((res: AxiosResponse) => {
        setCategory(res.data)
        setCategories(res.data.other_category)
        setSuperCategoryId(res.data.super_category_id)
        setKanjis(res.data.word_list)
      })
      // eslint-disable-next-line @typescript-eslint/typedef
      .catch((error) => {
        console.log(error)
      })
  }

  const handleBack = (): void => {
    apiGetCategories(superCategoryId)
  }

  const handleOpenCreateForm = (): void => {
    setPopupIsOpen((isOpen: boolean): boolean => !isOpen)
  }

  // const handleCreateCategory = () => {}
  //endregion

  return (
    <Grid container component="main" sx={{ height: "100vh", width: "100%" }}>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={2} square>
        <Box sx={boxCategoriesStyle}>
          <Icon sx={iconStyle} onClick={handleBack}>
            arrow_back
          </Icon>
          <Typography variant={"h4"}>{category != null ? category.name : "Loading"}</Typography>
        </Box>
        <Box>
          <Box sx={{ padding: 3 }}>
            {categories?.map((category: ICategory) => (
              <CategoryCard
                category={category}
                key={category.id}
                onClick={(): void => {
                  apiGetCategoriesWithId(category.id)
                }}
              />
            ))}
            {kanjis?.map((kanji: IWordList) => (
              <KanjiCard
                kanji={kanji.word}
                key={kanji.word.id}
                onClick={(): void => {
                  setKanji(kanji.word)
                }}
              />
            ))}
            <Box sx={{ padding: 5 }}>
              <ButtonGlobal onClick={handleOpenCreateForm}>Créer une catégorie</ButtonGlobal>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={8} component={Paper} square sx={gridKanjiDetail}>
        <KanjiDetailCard kanji={kanji} />
      </Grid>
      <CreateCategoryForm isOpen={popupIsOpen} superId={category?.id} />
    </Grid>
  )
}

export default Collections
