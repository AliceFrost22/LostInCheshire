import LocationBanner from "@/components/content";
import Footer from "@/components/home-page/footer";
import Header from "@/components/home-page/header";
import Hero from "@/components/home-page/header/hero";
import Locations from "@/components/home-page/header/locations";
import Socials from "@/components/home-page/header/socials";
import Search from "@/components/home-page/search/search";


export default function Home() {
  return (
    <div>
      <div className="block block-inline">
          <Socials></Socials>
          <Header></Header>
      </div >

      <Hero></Hero>
      <Search></Search>

      <Locations></Locations>
      <div>
      <LocationBanner></LocationBanner>
      </div>
      <Footer></Footer>
      </div>
  )
}
