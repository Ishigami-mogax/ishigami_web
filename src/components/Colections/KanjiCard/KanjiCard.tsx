import { FC, PropsWithChildren } from "react";
import { kanjis, PropsInterface } from "./KanjiCard.constant";
import { styles } from "./KanjiCard.style";
import { useTranslation } from "react-i18next";
import { Box, Paper, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";

const KanjiCard: FC = (
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
    <Box>
      {kanjis &&
        kanjis.map((kanji) => (
          <Paper
            elevation={2}
            square
            sx={{ borderRadius: 2, padding: 1, margin: 1 }}
            key={kanji.id}
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
                <Typography variant={"h5"}>{kanji.signification}</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant={"h5"} sx={{ fontSize: "2rem" }}>
                  {kanji.kanji}
                </Typography>
                <Box>
                  {kanji.reading.map((reading) => (
                    <Typography variant={"body1"} key={reading.id}>
                      {reading.reading}
                    </Typography>
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginRight: 2 }}>
                <Icon>volume_up</Icon>
              </Box>
            </Box>
          </Paper>
        ))}
    </Box>
  );
};

export default KanjiCard;
