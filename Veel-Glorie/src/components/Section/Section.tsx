import classNames from "classnames"
import { ReactNode, Children } from "react"

import { getIndex } from "../../utils/transformers"
import { separations } from "./constants"

interface SectionProps {
  background?: "primary" | "secondary"
  transparency?: boolean
  isFooter?: boolean
  children: ReactNode | ReactNode[]
  separation?: (typeof separations)[keyof typeof separations]
}

function Section({
  background = undefined,
  transparency = false,
  isFooter = false,
  separation = separations.DEFAULT,
  children,
}: SectionProps): JSX.Element {
  const classes = classNames(
    separation,
    {
      "bg-primary": background === "primary",
    },
    {
      "bg-secondary": background === "secondary",
    },
    {
      "bg-opacity-50": transparency,
    },
  )
  const childrenWrapper = (
    <div className="container flex m-auto px-[var(--separator-big)]">
      <div className="flex flex-col justify-center m-auto space-y-[var(--separator-big)]">
        {getIndex(Children.toArray(children)).map((item_1_data) => (
          <div key={item_1_data.id} className="m-auto max-w-prose">
            {item_1_data.data}
          </div>
        ))}
      </div>
    </div>
  )
  return isFooter ? (
    <footer className={classes}>{childrenWrapper}</footer>
  ) : (
    <section className={classes}>{childrenWrapper}</section>
  )
}

export default Section
