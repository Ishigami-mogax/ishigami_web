import { type FC, type PropsWithChildren, useState } from "react"
import { type PropsInterface } from "./CreateCategoryForm.constant"
import { styles } from "./CreateCategoryForm.style"
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import ButtonGlobal from "../../_input/Button/Button"

const CreateCategoryForm: FC<PropsWithChildren<PropsInterface>> = (
  props: PropsWithChildren<PropsInterface>
): JSX.Element => {
  //region Default
  const {} = styles
  const { isOpen } = props
  //endregion

  //region Context
  //endregion

  //region Route
  //endregion

  //region UseState
  const [categoryName, setCategoryName] = useState("")
  //endregion

  //region UseEffect

  //endregion

  //region Handle
  //endregion

  return (
    <Dialog open={isOpen}>
      <DialogTitle>
        <Box>Nouvelle Catégorie</Box>
      </DialogTitle>
      <DialogContent sx={{ margin: 2 }}>
        <TextField
          type={"text"}
          id={"id"}
          label={"Catégorie"}
          name={"name"}
          autoComplete={"name"}
          onChange={(e) => {
            setCategoryName(e.target.value)
          }}
        />
      </DialogContent>
      <DialogActions>
        <ButtonGlobal onClick={() => {}}>Créer la catégorie</ButtonGlobal>
      </DialogActions>
    </Dialog>
  )
}

export default CreateCategoryForm
