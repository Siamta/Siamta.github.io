import classNames from "classnames"

interface AProps {
  href: string
  color?: boolean
  children: React.ReactNode
}

function A({ href, color, children }: AProps): JSX.Element {
  return (
      <a href={href} className={classNames({
        "hover:text-primary": color,
        "underline": color,
      })}>
        {children}
      </a>
  )
}

export default A
