import { FC, PropsWithChildren } from "react";
import { PropsInterface } from "./Collections.constant";
import { styles } from "./Collections.style";
import { useTranslation } from "react-i18next";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import CategoryCard from "./CategoryCard/CategoryCard";
import KanjiCard from "./KanjiCard/KanjiCard";
import Buttons from "../_input/Button/Button";

const Collections: FC = (
  props: PropsWithChildren<PropsInterface>
): JSX.Element => {
  //region Default
  const {} = styles;
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 3,
            marginLeft: 3,
          }}
        >
          <Icon sx={{ fontSize: "xx-large", width: 50 }}>arrow_back</Icon>
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
        elevation={6}
        square
        sx={{ backgroundColor: "red", display: "flex" }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Box}
          sx={{ backgroundColor: "blue", height: "100vh" }}
        >
          <Paper
            elevation={6}
            square
            sx={{ margin: 3, marginBottom: 0, height: "95%" }}
          >
            <Box>
              <Typography variant={"h4"}>test</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant={"h5"}>Le kanji :</Typography>
              <Icon sx={{ fontSize: "xx-large", width: 50 }}>volume_up</Icon>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant={"h1"}>犬</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography variant={"h5"}>Traits :</Typography>
              <Typography variant={"h5"}>4 Traits</Typography>
            </Box>
            <Box sx={{}}>
              <Typography variant={"h5"}>Lectures :</Typography>
              <Box sx={{ paddingRight: 5, paddingLeft: 5 }}>
                <Typography variant={"h5"}>On : いぬ</Typography>
                <Typography variant={"h5"}>Kun : テン</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant={"h5"}>Clés :</Typography>
              <Box sx={{ paddingRight: 5, paddingLeft: 5 }}>
                <Typography variant={"h5"}>犬 : chien</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Box}
          sx={{ backgroundColor: "blue", height: "100vh" }}
        >
          <Paper
            elevation={6}
            square
            sx={{ margin: 3, marginBottom: 0, height: "20%" }}
          >
            <Box>
              <Typography variant={"h5"}>Description :</Typography>
            </Box>
          </Paper>
          <Paper
            elevation={6}
            square
            sx={{ margin: 3, marginBottom: 0, height: "70%" }}
          >
            <Box>
              <Typography variant={"h5"}>Vocabulaire :</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Collections;
