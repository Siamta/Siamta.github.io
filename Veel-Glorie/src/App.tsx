import Base from "@layout/Base"
import Info from "@layout/Info"
import Separator from "@components/Separator"
import Slideshow from "@layout/Slideshow"
import Hero from "@layout/Hero"
import Introduction from "@layout/Introduction"
import Recruiting from "@layout/Recruiting"

function App() {
  return (
    <Base>
      <Hero />
      <div className="flex flex-col -mb-6">
        <Introduction />
        <Info />
        <Slideshow version={1} />
        <Recruiting />
        <Slideshow version={2} />
      </div>
    </Base>
  )
}

export default App
