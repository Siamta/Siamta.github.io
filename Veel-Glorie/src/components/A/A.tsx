interface AProps {
  // The linked URL.
  href: string

  // The elements wrapped by the `a` tag.
  children: React.ReactNode

  // The aria-label attribute.
  ariaLabel?: string

  // If the link should open in a new tab.
  newTab?: boolean

  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

function A({ href, children, ariaLabel, newTab, onMouseEnter, onMouseLeave }: AProps): JSX.Element {
  let target: string | undefined
  let rel: string | undefined

  if (newTab) {
    target = "_blank"
    rel = "noreferrer noopener"
  }

  return (
      <a
        href={href}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        onFocus={onMouseEnter}
        onBlur={onMouseLeave}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </a>
  )
}

export default A
