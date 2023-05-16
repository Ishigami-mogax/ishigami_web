import { FC, PropsWithChildren } from "react";
import { PropsInterface } from "./CategoryCard.constant";
import { styles } from "./CategoryCard.style";
import { useTranslation } from "react-i18next";
import { Box, Paper, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";

const CategoryCard: FC = (
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
  );
};

export default CategoryCard;
