import Link from "../Link"

interface ButtonProps {
  url: string
  children: React.ReactNode
}

function Button({ url, children }: ButtonProps): JSX.Element {
  return (
    <Link href={url}>
      <div className="border-opacity-0 btn btn-primary text-lg">{children}</div>
    </Link>
  )
}

export default Button
