import { type ChangeEvent, type FC, type PropsWithChildren, useEffect, useState } from "react"
import { type PropsInterface } from "./CreateCategoryForm.constant"
import { styles } from "./CreateCategoryForm.style"
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import ButtonGlobal from "../../_input/Button/Button"
import Icon from "@mui/material/Icon"
import axios, { type AxiosResponse } from "axios"

const CreateCategoryForm: FC<PropsWithChildren<PropsInterface>> = (
  props: PropsWithChildren<PropsInterface>
): JSX.Element => {
  //region Default
  const { titleStyle } = styles
  const { isOpen, superId } = props
  //endregion

  //region Context
  //endregion

  //region Route
  //endregion

  //region UseState
  const [open, setOpen] = useState<boolean>(isOpen)
  const [categoryName, setCategoryName] = useState("")
  //endregion

  //region UseEffect
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])
  //endregion

  //region Handle
  const handleCloseCreateForm = (): void => {
    setOpen(false)
  }

  const handleCreateCategory = (name: string, superId: string = "61f90735-45ff-46d0-9b1d-9e24e778adc8"): void => {
    axios
      .post("http://localhost:4000/categories", { name, superId })
      .then((res: AxiosResponse) => {
        console.log(res)
        handleCloseCreateForm()
      })
      // eslint-disable-next-line @typescript-eslint/typedef
      .catch((err) => {
        console.log(err)
      })
  }
  //endregion

  return (
    <Dialog open={open}>
      <DialogTitle sx={titleStyle}>
        <Box>Nouvelle Catégorie</Box>
        <Icon sx={{ cursor: "pointer" }} onClick={handleCloseCreateForm}>
          close
        </Icon>
      </DialogTitle>
      <DialogContent sx={{ margin: 2 }}>
        <TextField
          type={"text"}
          id={"id"}
          label={"Catégorie"}
          name={"name"}
          autoComplete={"name"}
          onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setCategoryName(e.target.value)
          }}
        />
      </DialogContent>
      <DialogActions>
        <ButtonGlobal
          onClick={() => {
            handleCreateCategory(categoryName, superId)
          }}
        >
          Créer la catégorie
        </ButtonGlobal>
      </DialogActions>
    </Dialog>
  )
}

export default CreateCategoryForm
