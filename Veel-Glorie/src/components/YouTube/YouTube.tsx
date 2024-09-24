interface YouTubeProps {
  title: string
  url: string
}

function YouTube({ title, url }: YouTubeProps): JSX.Element {
  return (
    <iframe
      title={title}
      src={url}
      className="border-none"
      allowFullScreen
    />
  )
}

export default YouTube
