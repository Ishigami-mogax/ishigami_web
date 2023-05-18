import { FC, PropsWithChildren } from "react";
import { PropsInterface } from "./KanjiCard.constant";
import { styles } from "./KanjiCard.style";
import { useTranslation } from "react-i18next";
import { Box, Paper, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";

const KanjiCard: FC<PropsWithChildren<PropsInterface>> = (
  props: PropsWithChildren<PropsInterface>
): JSX.Element => {
  //region Default
  const { paperStyle, boxStyle, boxSignification, leftColor, volumeStyle } =
    styles;
  const { kanji, onClick } = props;
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
    <Box key={kanji.id}>
      <Paper
        elevation={2}
        square
        sx={paperStyle}
        onClick={(): void => onClick()}
      >
        <Box sx={boxStyle}>
          <Box sx={boxSignification}>
            <div style={leftColor} />
            <Typography variant={"h5"}>{kanji.signification}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant={"h5"} sx={{ fontSize: "2rem" }}>
              {kanji.kanji}
            </Typography>
            <Box>
              {kanji.reading.map((reading: any) => (
                <Typography variant={"body1"} key={reading.id}>
                  {reading.reading}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box sx={volumeStyle}>
            <Icon>volume_up</Icon>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default KanjiCard;
