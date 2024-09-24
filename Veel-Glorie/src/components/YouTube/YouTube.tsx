interface YouTubeProps {
    title: string
  url: string
}

function YouTube({ title, url }: YouTubeProps): JSX.Element {
    return (
        <iframe
            frameborder="0"
            allowfullscreen
            title={title}
            src={url}
        />
    )
}

export default YouTube
