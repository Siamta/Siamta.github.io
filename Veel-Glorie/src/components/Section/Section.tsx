import classNames from "classnames"
import { ReactNode, Children } from "react"

import { getIndex } from "@utils/transformers"

const separations = {
  DEFAULT: "DEFAULT",
  SMALL: "SMALL",
}

interface SectionProps {
  withBackground?: boolean
  isFooter?: boolean
  children: ReactNode | ReactNode[]
  separation?: typeof separations[keyof typeof separations]
}

function Section({
  withBackground = false,
  isFooter = false,
  separation = separations.DEFAULT,
  children,
}: SectionProps): JSX.Element {
  const classes = classNames(
    separation === separations.DEFAULT ? "py-[var(--separator)]" : "py-[var(--separator-small)]",
    {
      "bg-primary": withBackground,
    }
  )
  const childrenWrapper = (
    <div className="container flex m-auto px-[var(--separator-big)]">
      <div className="flex flex-col justify-center m-auto space-y-[var(--separator-big)]">
        {getIndex(Children.toArray(children)).map((item_1_data) => (
          <div key={item_1_data.id} className="m-auto">
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
export { separations }
