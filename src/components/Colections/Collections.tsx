import { FC, PropsWithChildren } from "react";
import { PropsInterface } from "./Collections.constant";
import { styles } from "./Collections.style";
import { useTranslation } from "react-i18next";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";

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
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        component={Paper}
        elevation={6}
        square
        sx={{ backgroundColor: "red" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Icon sx={{ fontSize: "xx-large", width: 50 }}>arrow_back</Icon>
          <Typography variant={"h4"}>Animaux</Typography>
        </Box>
        <Box>
          <Paper
            elevation={6}
            square
            sx={{ backgroundColor: "green", borderRadius: 2, padding: 1 }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ marginLeft: 3 }}>
                <Typography variant={"body1"}>38 mots</Typography>
                <Typography variant={"h5"}>Préhistorique</Typography>
              </Box>
              <Box sx={{ display: "flex", marginRight: 2 }}>
                <Typography variant={"h5"}>82%</Typography>
                <Icon>play_arrow</Icon>
              </Box>
            </Box>
          </Paper>

          <Box sx={{ padding: 3 }}>
            <Paper
              elevation={6}
              square
              sx={{ backgroundColor: "yellow", borderRadius: 2, padding: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ marginLeft: 1, display: "flex" }}>
                  <div
                    style={{
                      backgroundColor: "black",
                      width: "4px",
                      borderRadius: "10px",
                      marginRight: "10px",
                    }}
                  />
                  <Typography variant={"h5"}>Chien</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography variant={"h5"} sx={{ fontSize: "2rem" }}>
                    犬
                  </Typography>
                  <Box>
                    <Typography variant={"body1"}>いぬ</Typography>
                    <Typography variant={"body1"}>テン</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", marginRight: 2 }}>
                  <Icon>volume_up</Icon>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{ backgroundColor: "red" }}
      >
        {/*<Box sx={{ width: "100%" }}>*/}
        <Typography sx={{ width: "100%" }}>test</Typography>
        {/*</Box>*/}
      </Grid>
    </Grid>
  );
};

export default Collections;
