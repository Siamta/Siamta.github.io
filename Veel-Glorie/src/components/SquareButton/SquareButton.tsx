import { ReactNode } from "react"

import Link from "../Link"

interface SquareButtonLinkProps {
  url: string
  onClick?: undefined
  children: ReactNode
}

interface SquareButtonNormalProps {
  url?: undefined
  onClick: () => void
  children: ReactNode
}

type SquareButtonProps = SquareButtonLinkProps | SquareButtonNormalProps

function SquareButton({ url, onClick, children }: SquareButtonProps): JSX.Element {
  if (url) {
    return (
      <Link href={url}>
        <div className="text-2xl btn btn-ghost btn-square">{children}</div>
      </Link>
    )
  }
  return (
    <button onClick={onClick} type="button" className="text-2xl btn btn-ghost btn-square">
      {children}
    </button>
  )
}

export default SquareButton
