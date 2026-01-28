import Header from "@/components/Header";
import PromotionalBanner from "@/components/PromotionalBanner";
import HeroSection from "@/components/HeroSection";
import CategoryBanner from "@/components/CategoryBanner";
import MegaCode from "@/components/MegaCode";
import CouponSection from "@/components/CouponSection";
import HolidayEdit from "@/components/HolidayEdit";
import MegaCuponSection from "@/components/MegaCuponSection";
import OfferBannerSection from "@/components/OfferBannerSection";
import BestOfTheBestDealsWrapper from "@/components/BestOfTheBestDeals/BestOfTheBestDealsWrapper";
import SeasonsBestsellersWrapper from "@/components/SeasonsBestsellers/SeasonsBestsellersWrapper";
import BeautyHolidayCollectionWrapper from "@/components/BeautyHolidayCollection/BeautyHolidayCollectionWrapper";
import FreeGiftWrapping from "@/components/FreeGiftWrapping";
import ProductCategories from "@/components/ProductCategories";
import ChristmasPicksWrapper from "@/components/ChristmasPicks/ChristmasPicksWrapper";
import SeasonOfGiving from "@/components/SeasonOfGiving";
import TrendingOnSaleWrapper from "@/components/TrendingOnSale/TrendingOnSaleWrapper";
import WomensWinterTravelPicksWrapper from "@/components/WomensWinterTravelPicks/WomensWinterTravelPicksWrapper";
import ShoppingIdeasTrends from "@/components/ShoppingIdeasTrends";
import WhyShopWithUs from "@/components/WhyShopWithUs";
import SocialMediaSubscription from "@/components/SocialMediaSubscription";
import Footer from "@/components/Footer";
import CategoryCarousel from "@/components/CategoryCarousel";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      <Header />
      {/* <PromotionalBanner /> */}
      <HeroSection />
      <CategoryBanner />
      {/* <MegaCode /> */}
      <CouponSection />
      {/* <HolidayEdit /> */}
      {/* <MegaCuponSection /> */}
      {/* <OfferBannerSection /> */}
      <BestOfTheBestDealsWrapper />
      <SeasonsBestsellersWrapper />
      <BeautyHolidayCollectionWrapper />
      {/* <FreeGiftWrapping /> */}
      {/* <ProductCategories /> */}
      <ChristmasPicksWrapper />
      {/* <SeasonOfGiving /> */}
      <TrendingOnSaleWrapper />
      <WomensWinterTravelPicksWrapper />
      <ShoppingIdeasTrends />
      <WhyShopWithUs />
      <SocialMediaSubscription />
      <Footer />
    </div>
  );
}
