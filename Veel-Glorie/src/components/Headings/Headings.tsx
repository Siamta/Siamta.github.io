interface HeadingsProps {
  children: React.ReactNode
}

function H1({ children }: HeadingsProps): JSX.Element {
  return (
    <h1 className="text-5xl">
      <b>{children}</b>
    </h1>
  )
}

function H2({ children }: HeadingsProps): JSX.Element {
  return (
    <h2 className="text-4xl">
      <b>{children}</b>
    </h2>
  )
}

const Headings = {
  H1,
  H2,
}

export default Headings
