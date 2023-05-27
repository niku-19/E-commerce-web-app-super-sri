import Collection from "../../Components/Collectionvideo/Collection";
import HomeCarusel from "../../Components/Home-carosel/HomeCarusel";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import Marquee from "../../Components/MarqueeText/Marquee";
import NewLaunch from "../../Components/NerLaunches/NewLaunch";
import Partners from "../../Components/Partners/Partners";
import ProductListing from "../../Components/ProductListing/ProductListing";
import TopCategory from "../../Components/TopCategory/TopCategory";
const Lading = () => {
  return (
    <>
      <HomeBanner />
      <Marquee />
      <HomeCarusel />
      <NewLaunch />
      <Collection />
      <TopCategory />
      <ProductListing />
      <Partners />
    </>
  );
};

export default Lading;
