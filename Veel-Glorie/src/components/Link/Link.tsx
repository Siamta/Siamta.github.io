import classNames from "classnames"

interface LinkProps {
  href: string
  color?: boolean
  children: React.ReactNode
}

function Link({ href, color, children }: LinkProps): JSX.Element {
  return (
    <a
      href={href}
      className={classNames({
        "hover:text-primary": color,
        underline: color,
      })}
    >
      {children}
    </a>
  )
}

export default Link
