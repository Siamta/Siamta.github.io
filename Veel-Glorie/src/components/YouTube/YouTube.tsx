interface YouTubeProps {
  title: string
  url: string
}

function YouTube({ title, url }: YouTubeProps): JSX.Element {
  return (
    <iframe
        src={`https://www.youtube.com/embed/${url}`}
        title={`${title} - [YouTube]`}
        className="border-none w-[17rem] md:w-[35rem] h-[8rem] md:h-[20rem]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
    />
  )
}

export default YouTube
