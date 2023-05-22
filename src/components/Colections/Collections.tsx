import { type FC, type PropsWithChildren, useEffect, useState } from "react"
import { type ICategory, type IWord, type PropsInterface } from "./Collections.constant"
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
  const [categories, setCategories] = useState<ICategory[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [superCategoryId, setSuperCategoryId] = useState<string>("")
  const [kanjis, setKanjis] = useState<IWord[]>([])
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
      .get(`http://127.0.0.1:3001/categories/${id}`)
      .then((res: AxiosResponse) => {
        setCategories(res.data.categories)
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
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={2} square>
        <Box sx={boxCategoriesStyle}>
          <Icon sx={iconStyle} onClick={handleBack}>
            arrow_back
          </Icon>
          <Typography variant={"h4"}>Animaux</Typography>
        </Box>
        <Box>
          <Box sx={{ padding: 3 }}>
            {categories?.map((category: ICategory) => (
              <CategoryCard
                category={category}
                key={category.id}
                onClick={(): void => {
                  apiGetCategories(category.id)
                }}
              />
            ))}
            {kanjis?.map((kanji: IWord) => (
              <KanjiCard
                kanji={kanji}
                key={kanji.id}
                onClick={(): void => {
                  setKanji(kanji)
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
      <CreateCategoryForm isOpen={popupIsOpen} />
    </Grid>
  )
}

export default Collections
