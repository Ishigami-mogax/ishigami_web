import { type FC, type PropsWithChildren } from "react"
import { type PropsInterface } from "./KanjiDetailCard.constant"
import { styles } from "./KanjiDetailCard.style"
import { Box, Grid, Paper, Typography } from "@mui/material"
import Icon from "@mui/material/Icon"

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
    vocabularyStyle
  } = styles
  const { kanji } = props
  //endregion

  //region Context
  // const [kanji, setKanji] = useContext(KanjiContext);
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
    <Grid item xs={12} sm={8} md={12} component={Paper} elevation={6} square sx={{ display: "flex" }}>
      {kanji
        ? (
        <>
          <Grid item xs={12} sm={8} md={6} component={Box} sx={{ height: "100vh" }}>
            <Paper elevation={6} square sx={kanjiPrincipalDetailCard}>
              <Box sx={{ padding: 5 }}>
                <Box>
                  <Typography variant={"h4"}>{kanji.signification}</Typography>
                </Box>
                <Box sx={gifTitleStyle}>
                  <Typography variant={"h5"}>Le kanji :</Typography>
                  <Icon sx={iconVolumeStyle}>volume_up</Icon>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant={"h1"}>{kanji.kanji}</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <Typography variant={"h5"}>Traits : </Typography>
                  <Typography variant={"h5"}>{kanji.lines} Traits</Typography>
                </Box>
                <Box sx={{}}>
                  <Typography variant={"h5"}>Lectures :</Typography>
                  <Box sx={manyItemsStyle}>
                    {kanji.reading &&
                      kanji.reading.map((read: any) =>
                        read.isOnyumi
                          ? (
                          <Typography variant={"h5"} key={read.id}>
                            On : {read.reading}
                          </Typography>
                            )
                          : (
                          <Typography variant={"h5"} key={read.id}>
                            Kun : {read.reading}
                          </Typography>
                            )
                      )}
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8} md={6} component={Box} sx={{ height: "100vh" }}>
            <Paper elevation={6} square sx={descriptionStyle}>
              <Box sx={{ padding: 1 }}>
                <Typography variant={"h5"}>Description :</Typography>
                <Typography variant={"body1"}>{kanji.description}</Typography>
              </Box>
            </Paper>
            <Paper elevation={6} square sx={vocabularyStyle}>
              <Box sx={{ padding: 1 }}>
                <Typography variant={"h5"}>Vocabulaire :</Typography>
                <Typography variant={"body1"}>test</Typography>
              </Box>
            </Paper>
          </Grid>
        </>
          )
        : (
        <Typography>Veuillez choisir un kanji</Typography>
          )}
    </Grid>
  )
}

export default KanjiDetailCard
