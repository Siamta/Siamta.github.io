import { ReactNode } from "react"

import A from "src/components/A"

interface SquareButtonProps {
  url: string
  children: ReactNode
}

function SquareButton({ url, children }: SquareButtonProps): JSX.Element {
  return (
    <A href={url}>
      <div className="text-2xl btn btn-ghost btn-square">{children}</div>
    </A>
  )
}

export default SquareButton
