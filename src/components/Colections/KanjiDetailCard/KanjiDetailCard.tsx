import { FC, PropsWithChildren } from "react";
import { PropsInterface } from "./KanjiDetailCard.constant";
import { styles } from "./KanjiDetailCard.style";
import { useTranslation } from "react-i18next";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";

const KanjiDetailCard: FC<PropsWithChildren<PropsInterface>> = (
  props: PropsWithChildren<PropsInterface>
): JSX.Element => {
  //region Default
  const {
    kanjiPrincipalDetailCard,
    gifTitleStyle,
    iconVolumeStyle,
    manyItemsStyle,
    descriptionStyle,
    vocabularyStyle,
  } = styles;
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
    <Grid
      item
      xs={12}
      sm={8}
      md={12}
      component={Paper}
      elevation={6}
      square
      sx={{ display: "flex" }}
    >
      <Grid item xs={12} sm={8} md={6} component={Box} sx={{ height: "100vh" }}>
        <Paper elevation={6} square sx={kanjiPrincipalDetailCard}>
          <Box>
            <Typography variant={"h4"}>Name</Typography>
          </Box>
          <Box sx={gifTitleStyle}>
            <Typography variant={"h5"}>Le kanji :</Typography>
            <Icon sx={iconVolumeStyle}>volume_up</Icon>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant={"h1"}>犬</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant={"h5"}>Traits : </Typography>
            <Typography variant={"h5"}>4 Traits</Typography>
          </Box>
          <Box sx={{}}>
            <Typography variant={"h5"}>Lectures :</Typography>
            <Box sx={manyItemsStyle}>
              <Typography variant={"h5"}>On : いぬ</Typography>
              <Typography variant={"h5"}>Kun : テン</Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant={"h5"}>Clés :</Typography>
            <Box sx={manyItemsStyle}>
              <Typography variant={"h5"}>犬 : chien</Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={8} md={6} component={Box} sx={{ height: "100vh" }}>
        <Paper elevation={6} square sx={descriptionStyle}>
          <Box>
            <Typography variant={"h5"}>Description :</Typography>
          </Box>
        </Paper>
        <Paper elevation={6} square sx={vocabularyStyle}>
          <Box>
            <Typography variant={"h5"}>Vocabulaire :</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default KanjiDetailCard;
