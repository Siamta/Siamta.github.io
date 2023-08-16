
import A from "src/components/A"

interface ButtonProps {
  url: string
  children: React.ReactNode
}

function Button({ url, children }: ButtonProps): JSX.Element {
  return (
    <A href={url}>
      <div className="border-opacity-0 btn btn-primary text-lg">
        {children}
      </div>
    </A>
  )
}

export default Button
