import { Icons } from "../../../assets/icons";
import routeConstants from "../../../constant/routeConstants";
import { BaseLinkPrimary } from "../../../styles/components/Button";
import {
  Container,
  HeadingBanner,
  Paragraph,
} from "../../../styles/global/default";
import { BannerWrapper } from "./Banner.styles";

const Banner = () => {
  return (
    <BannerWrapper>
      <div className="banner-img flex items-center justify-center">
      <div className="banner-content mx-auto text-center">
          <HeadingBanner>Pengalaman Menonton Terbaik</HeadingBanner>
          <Paragraph className="banner-text text-lg">
          StreamVibe adalah platform streaming terbaik untuk menonton film dan acara favorit Anda secara
          on-demand, kapan pun dan di mana pun. Nikmati berbagai pilihan konten, mulai dari film terbaru, 
          film klasik, hingga serial TV populer. Buat watchlist pribadi agar lebih mudah menemukan konten 
          yang Anda sukai.
          </Paragraph>
          <BaseLinkPrimary to={routeConstants.SHOWS}>
            <span className="btn-icon">
              <img src={Icons.Play} alt="" />
            </span>
            <span className="btn-text">Start Watching Now</span>
          </BaseLinkPrimary>
        </div>
      </div>
      <Container className="text-center">
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
