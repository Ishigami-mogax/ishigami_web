import { FC, PropsWithChildren } from "react";
import { PropsInterface } from "./Collections.constant";
import { styles } from "./Collections.style";
import { useTranslation } from "react-i18next";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import CategoryCard from "./CategoryCard/CategoryCard";
import KanjiCard from "./KanjiCard/KanjiCard";
import Buttons from "../_input/Button/Button";
import KanjiDetailCard from "./KanjiDetailCard/KanjiDetailCard";

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
  //endregion

  //region UseEffect

  //endregion

  //region Handle
  //endregion

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={2} square>
        <Box sx={boxCategoriesStyle}>
          <Icon sx={iconStyle}>arrow_back</Icon>
          <Typography variant={"h4"}>Animaux</Typography>
        </Box>
        <Box>
          <Box sx={{ padding: 3 }}>
            <CategoryCard />
            <KanjiCard />
            <Box sx={{ padding: 5 }}>
              <Buttons text={"Créer une catégorie"} onClick={() => {}} />
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
        <KanjiDetailCard item={""} />
      </Grid>
    </Grid>
  );
};

export default Collections;
