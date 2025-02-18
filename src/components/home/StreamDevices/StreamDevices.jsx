import { STREAM_DEVICES } from "../../../constant/mockData";
import {
  Container,
  HeadingTitleMd,
  Paragraph,
} from "../../../styles/global/default";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import { StreamDevicesWrapper } from "./StreamDevices.styles";

const StreamDevices = () => {
  return (
    <StreamDevicesWrapper className="section-py">
      <SectionTitle
        title={"Kami memberikan pengalaman streaming di berbagai perangkat."}
        text={
          "Dengan StreamVibe, Anda bisa menonton film dan serial TV favorit kapan pun dan di mana pun. Platform kami mendukung banyak perangkat, sehingga Anda selalu bisa menikmati hiburan tanpa batas."
        }
      />
      <Container>
        <div className="stream-dev-content">
          <div className="stream-dev-list grid">
            {STREAM_DEVICES?.map((streamDevice) => {
              return (
                <div className="stream-dev-item" key={streamDevice.id}>
                  <div className="item-head flex items-center justify-start">
                    <div className="item-icon bg-black12 flex items-center justify-center">
                      <div className="icon-wrapper flex items-center justify-center">
                        <img src={streamDevice.icon} alt="" />
                      </div>
                    </div>
                    <HeadingTitleMd className="item-title">
                      {streamDevice.device_name}
                    </HeadingTitleMd>
                  </div>
                  <div className="item-body">
                    <Paragraph>{streamDevice.description}</Paragraph>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </StreamDevicesWrapper>
  );
};

export default StreamDevices;
