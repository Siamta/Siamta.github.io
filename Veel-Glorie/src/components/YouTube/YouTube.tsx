interface YouTubeProps {
  title: string
  url: string
}

function YouTube({ title, url }: YouTubeProps): JSX.Element {
  return (
    <iframe
      // Documentation about parameters:
      // - controls: https://developers.google.com/youtube/player_parameters#Parameters
      // - allow: https://developer.mozilla.org/en-US/docs/Web/HTTP/Permissions_Policy#browser_compatibility
      src={`https://www.youtube.com/embed/${url}?controls=2&iv_load_policy=3&cc_load_policy=0&origin=*&rel=0`}
      title={`${title} - YouTube`}
      className="border-none w-[17rem] sm:w-[41rem] h-[8rem] sm:h-[23rem]"
      allow="accelerometer; encrypted-media; fullscreen; geolocation; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}

export default YouTube
