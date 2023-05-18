import { FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { categories, kanjis, PropsInterface } from "./Collections.constant";
import { styles } from "./Collections.style";
import { useTranslation } from "react-i18next";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import CategoryCard from "./CategoryCard/CategoryCard";
import KanjiCard from "./KanjiCard/KanjiCard";
import Buttons from "../_input/Button/Button";
import KanjiDetailCard from "./KanjiDetailCard/KanjiDetailCard";
import axios from "axios";
import CreateCategoryForm from "./CreateCategoryForm/CreateCategoryForm";

const Collections: FC = (
  props: PropsWithChildren<PropsInterface>
): JSX.Element => {
  //region Default
  const { boxCategoriesStyle, iconStyle, gridKanjiDetail } = styles;
  const {} = props;
  const { t } = useTranslation();
  //endregion

  //region Context
  //endregion

  //region Route
  //endregion

  //region UseState
  // const [categories, setCategories] = useState([]);
  // const [superCategoryId, setSuperCategoryId] = useState("");
  // const [kanjis, setKanjis] = useState([]);
  const [kanji, setKanji] = useState({});
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  //endregion

  //region UseEffect
  // useEffect(() => {
  //   // axios.get("/categories")
  //   //   .then((res) => {
  //   //   setCategories(res.data.categories);
  //   //   setCategory(res.data.super_category_id);
  //   //   setKanjis(res.data.word_list);
  //   // });
  // }, []);
  //endregion

  //region Handle
  const axiosGetCategories = (id: string) => {
    // axios.get(`/categories/${id}`).then((res) => {
    //   setCategories(res.data.categories);
    //   setSuperCategory(res.data.super_category_id);
    //   setKanjis(res.data.word_list);
    // }).catch((error) => console.log(error));
  };

  const handleBack = () => {
    //   axiosGetCategories(superCategory)
  };

  const handleOpenCreateForm = (): void =>
    setPopupIsOpen((isOpen: boolean): boolean => !isOpen);

  const handleCreateCategory = () => {};
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
            {categories &&
              categories.map((category) => (
                <CategoryCard
                  category={category}
                  onClick={(): void => axiosGetCategories(category.id)}
                />
              ))}
            {kanjis &&
              kanjis.map((kanji) => (
                <KanjiCard
                  kanji={kanji}
                  onClick={(): void => setKanji(kanji)}
                />
              ))}
            <Box sx={{ padding: 5 }}>
              <Buttons
                text={"Créer une catégorie"}
                onClick={handleOpenCreateForm}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        component={Paper}
        square
        sx={gridKanjiDetail}
      >
        <KanjiDetailCard kanji={kanji} />
      </Grid>
      <CreateCategoryForm isOpen={popupIsOpen} />
    </Grid>
  );
};

export default Collections;
