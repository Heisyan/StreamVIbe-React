import { SUBSCRIPTIONS } from "../../../constant/mockData";
import { BaseLinkSecondary } from "../../../styles/components/Button";
import {
  Container,
  HeadingTitleMd,
  Paragraph,
} from "../../../styles/global/default";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import {
  SubscriptionItemWrapper,
  SubscriptionWrapper,
} from "./Subscription.styles";
import PropTypes from "prop-types";

const Subscription = () => {
  return (
    <SubscriptionWrapper>
      <SectionTitle
        title={"Pilih paket yang tepat untuk Anda"}
        text={
          "Bergabunglah dengan StreamVibe dan pilih dari opsi langganan fleksibel kami yang disesuaikan dengan preferensi menonton Anda. Bersiaplah untuk hiburan tanpa henti!"
        }
      />
      <Container>
        <div className="subs-content">
          <div className="subs-list grid">
            {SUBSCRIPTIONS?.length > 0 ? (
              SUBSCRIPTIONS.map((subscription) => (
                <SubscriptionItem key={subscription.id} data={subscription} />
              ))
            ) : (
              <p>Tidak ada paket yang tersedia.</p>
            )}
          </div>
        </div>
      </Container>
    </SubscriptionWrapper>
  );
};

const SubscriptionItem = ({ data }) => {
  return (
    <SubscriptionItemWrapper className="bg-black10 flex flex-col justify-between">
      <div className="item-top">
        <HeadingTitleMd>{data.plan}</HeadingTitleMd>
        <Paragraph>{data.description}</Paragraph>
      </div>
      <div className="item-bottom">
        <div className="item-price flex items-baseline flex-wrap flex-col">
          <p className="item-price-text font-semibold">${data.monthly_price}/bulan</p>
          <p className="item-price-text">${data.yearly_price}/tahun</p>
        </div>
        <div className="item-btn-group flex items-center flex-wrap">
          <BaseLinkSecondary className="item-btn">
            <span className="btn-text">Mulai Uji Coba Gratis</span>
          </BaseLinkSecondary>
          <BaseLinkSecondary className="item-btn">
            <span className="btn-text">Pilih Paket</span>
          </BaseLinkSecondary>
        </div>
      </div>
    </SubscriptionItemWrapper>
  );
};

SubscriptionItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    description: PropTypes.string,
    monthly_price: PropTypes.number.isRequired,
    yearly_price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Subscription;