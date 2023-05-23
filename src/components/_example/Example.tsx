import React, { type FC, type JSX, type PropsWithChildren } from "react"
import { Box } from "@mui/material"
import { styles } from "./Example.style"
import { type PropsInterface } from "./Example.constant"

const Example: FC<PropsWithChildren<PropsInterface>> = (props: PropsWithChildren<PropsInterface>): JSX.Element => {
  // region Default
  const {} = styles
  const {} = props
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

  return <Box></Box>
}

export default Example
