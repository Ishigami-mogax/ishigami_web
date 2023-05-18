import { FC, PropsWithChildren } from "react";
import { categories, PropsInterface } from "./CategoryCard.constant";
import { styles } from "./CategoryCard.style";
import { useTranslation } from "react-i18next";
import { Box, Paper, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";

const CategoryCard: FC<PropsWithChildren<PropsInterface>> = (
  props: PropsWithChildren<PropsInterface>
): JSX.Element => {
  //region Default
  const { paperStyle, boxStyle, percentStyle } = styles;
  const { category, onClick } = props;
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
    <Box key={category.id}>
      <Paper elevation={6} square sx={paperStyle} onClick={onClick}>
        <Box sx={boxStyle}>
          <Box sx={{ marginLeft: 3 }}>
            <Typography variant={"body1"}>
              {category._count.word_list} mots
            </Typography>
            <Typography variant={"h5"}>{category.name}</Typography>
          </Box>
          <Box sx={percentStyle}>
            <Typography variant={"h5"}>{category.percent}%</Typography>
            <Icon>play_arrow</Icon>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default CategoryCard;
