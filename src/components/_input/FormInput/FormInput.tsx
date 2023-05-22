import React, { type FC, type PropsWithChildren } from "react"
import type { PropsInterface } from "./FormInput.constant"
import { styles } from "../../_example/Example.style"
import { IconButton, InputAdornment, TextField } from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

const FormInput: FC<PropsWithChildren<PropsInterface>> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
  // region Default
  const {} = styles
  const { id, label, name, type, onChange, handleShowPassword } = props
  // endregion

  // region Context
  // endregion

  // region Route
  // endregion

  // region UseState
  // endregion

  // region UseEffect

  // endregion

  // region Handle
  // endregion

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      type={type}
      id={id}
      label={label}
      name={name}
      autoComplete={name}
      onChange={onChange}
      InputProps={
        name === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              )
            }
          : undefined
      }
    />
  )
}

export default FormInput
