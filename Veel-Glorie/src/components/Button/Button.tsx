import Link from "../Link"
import classNames from "classnames"

interface ButtonProps {
  url: string
  children: React.ReactNode
  isSVG?: boolean
}

function Button({ url, children, isSVG = false }: ButtonProps): JSX.Element {
  return (
    <Link href={url}>
      <div
        className={classNames("border-opacity-0 btn btn-primary", {
          "text-lg": !isSVG,
          "px-0 text-2xl w-12": isSVG,
        })}
      >
        {children}
      </div>
    </Link>
  )
}

export default Button
