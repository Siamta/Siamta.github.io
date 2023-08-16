import { Root as AccessibleIcon } from "@radix-ui/react-accessible-icon"

interface BaseSVGProps {
  description: string
  width: number
  height: number
  children: React.ReactNode
}

type SVGType = JSX.Element

function BaseSVG({ description, width, height, children }: BaseSVGProps): SVGType {
  return (
    <AccessibleIcon label={description}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="inline-block"
        fill="currentColor"
        width="1em"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </AccessibleIcon>
  )
}

export default BaseSVG
export { type SVGType }
