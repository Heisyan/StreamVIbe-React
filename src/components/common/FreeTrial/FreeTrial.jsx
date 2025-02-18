import { FreeTrialWrapper } from "./FreeTrial.styles"
import { Container, HeadingTitle, Paragraph } from "../../../styles/global/default";
import { BaseLinkPrimary } from "../../../styles/components/Button"

const FreeTrial = () => {
  return (
    <FreeTrialWrapper className="section-py">
      <Container>
        <div className="free-trial-content bg-black06 flex items-center justify-between flex-wrap">
          <div>
            <HeadingTitle>Mulai uji coba gratis Anda hari ini!</HeadingTitle>
            <Paragraph>
              Ini adalah ajakan yang jelas dan ringkas yang mendorong pengguna untuk mendaftar uji coba gratis StreamVibe.
            </Paragraph>
          </div>
          <BaseLinkPrimary>Mulai Uji Coba Gratis</BaseLinkPrimary>
        </div>
      </Container>
    </FreeTrialWrapper>
  )
}

export default FreeTrial
