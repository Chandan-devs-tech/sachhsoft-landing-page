import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MarketingHero } from "./MarketingHero";
import { ServicesApp } from "./ServicesApp";

interface ServiceItemProps {
  label: string;
}

interface ServiceRowProps {
  items: string[];
}

interface QuoteProps {
  quote: string;
  author: string;
  imageSrc: string;
}

// interface ServiceCardProps {
//   icon: string;
//   title: string;
//   tags: string[];
// }

// interface StatCardProps {
//   value: string;
//   label: string;
// }

const ServiceItem: React.FC<ServiceItemProps> = ({ label }) => (
  <ServiceItemWrapper>{label}</ServiceItemWrapper>
);

const ServiceRow: React.FC<ServiceRowProps> = ({ items }) => (
  <ServiceRowWrapper>
    {items.map((item, index) => (
      <ServiceItem key={index} label={item} />
    ))}
  </ServiceRowWrapper>
);

const Quote: React.FC<QuoteProps> = ({ author, imageSrc }) => (
  <QuoteWrapper>
    <QuoteContent>
      <QuoteImage loading="lazy" src={imageSrc} alt="" />
      <QuoteTextWrapper>
        <QuoteText>
          <span className="light">You </span>
          <span className="bold">dream </span>
          <span className="light">it, We </span>
          <span className="bold">build </span>
          <span className="light">it.</span>
        </QuoteText>
        <QuoteAuthor>{author}</QuoteAuthor>
      </QuoteTextWrapper>
    </QuoteContent>
    <DecorativeImage
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/9c0d6ec5020b50a0584fd1ad2e4f22d2c38f966c302140f6a1cdf49e977c094c?apiKey=8daf534316604d9cae29e22c036504a0&"
      alt=""
    />
  </QuoteWrapper>
);

export const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const services = {
    row1: ["E-Commerce", "Marketing", "Enterprise"],
    row2: ["Development", "UI/UX Design"],
    row3: ["Digital", "Automation", "Modern Web Services"],
    row4: ["SEO", "Mobility", "Project Management"],
    row5: ["Cloud", "+ many other IT Services"],
  };

  return (
    <HeroWrapper>
      <MainContent>
        <LeftColumn>
          <ContentWrapper>
            <CompanyName>AT SACCHSOFT</CompanyName>
            <Headline>
              We revolutionize your technological ideas into{" "}
              <span style={{ color: "rgba(255,255,255,1)" }}>reality</span>
            </Headline>
            <Subheadline>
              Expert IT consulting tailored just for empowering your technical
              needs
            </Subheadline>
            <CTAButton>
              <CTAText>Get in touch</CTAText>
              <CTAIcon
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/7aff83d42bddca12b7521e39803e046cf533190a9610de3d1589bca5ce28ce7b?apiKey=8daf534316604d9cae29e22c036504a0&"
                alt=""
              />
            </CTAButton>
          </ContentWrapper>
        </LeftColumn>

        <RightColumn>
          {!isMobile && (
            <ServicesCard>
              <ServicesHeader>
                <ServicesTitleWrapper>
                  <ServicesIcon
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/4e18331c3692cce806ae59b27c57342576e806ae13fab6e9b24ebe4324bda9b5?apiKey=8daf534316604d9cae29e22c036504a0&"
                    alt=""
                  />
                  <ServicesTitle>Our Services</ServicesTitle>
                </ServicesTitleWrapper>
                <HeaderImage
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/1d6f753894adfb50bdaf4e3b3508da8b42d380ae250789deb2c0629ee87e96c7?apiKey=8daf534316604d9cae29e22c036504a0&"
                  alt=""
                />
              </ServicesHeader>
              {Object.values(services).map((items, index) => (
                <ServiceRow key={index} items={items} />
              ))}
            </ServicesCard>
          )}
        </RightColumn>
      </MainContent>

      {isMobile && <ServicesApp noPadding />}

      <MarketingHero />
    </HeroWrapper>
  );
};

const ServiceItemWrapper = styled.div`
  align-self: stretch;
  border-radius: 80px;
  border: 1px solid var(--Lines-Stroke, #9a9daa);
  color: rgba(250, 249, 253, 1);
  padding: 8px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 9px;
    font: 400 14px Raleway, sans-serif;
  }
`;

const ServiceRowWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  width: 100%;
  max-width: 300px;
  gap: 15px;
  @media (max-width: 991px) {
    margin-top: 26px;
    gap: 6px;
    flex-wrap: wrap;
  }
`;

const QuoteWrapper = styled.div`
  border-radius: 8px;
  background-color: rgba(30, 26, 43, 1);
  display: flex;
  width: 100%;
  padding-right: 9px;
  align-items: start;
  gap: 20px;
  font-family: Avenir, sans-serif;
  justify-content: space-between;
  @media (max-width: 991px) {
    padding: 31px 26px 0;
    width: 186px;
    flex-direction: column;
  }
`;

const QuoteContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;

const QuoteImage = styled.img`
  aspect-ratio: 1.12;
  object-fit: contain;
  width: 75px;
  border-radius: 0px;
  align-self: start;
  @media (max-width: 991px) {
    aspect-ratio: 0.72;
    width: 87px;
    margin-left: auto;
    display: block;
  }
`;

const QuoteTextWrapper = styled.div`
  align-self: end;
  display: flex;
  margin-top: 37px;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 31px;
  }
`;

const QuoteText = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  .light {
    font-weight: 350;
  }
  .bold {
    font-weight: 800;
  }
`;

const QuoteAuthor = styled.div`
  color: var(--Text-Heading, #d9d6df);
  font-size: 12px;
  font-weight: 350;
  align-self: start;
  margin-top: 8px;
`;

const DecorativeImage = styled.img`
  aspect-ratio: 0.68;
  object-fit: contain;
  width: 87px;
  margin-top: 7px;
`;

const HeroWrapper = styled.section`
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  padding: 120px 80px;
  @media (max-width: 991px) {
    max-width: 480px;
    width: 100%;
    align-items: center;
    margin: 0 auto;
    padding: 20px 20px;
  }
`;

const MainContent = styled.div`
  gap: 20px;
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
    width: 376px;
    max-width: 100%;
    margin-bottom: 40px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 64%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  font-family: Raleway, sans-serif;
  font-weight: 500;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const CompanyName = styled.div`
  color: var(--Text-Heading-02, #c4c7ce);
  font-size: 14px;
  letter-spacing: 3px;
  @media (max-width: 991px) {
    font-size: 12px;
  }
`;

const Headline = styled.h1`
  color: #fff;
  font-size: 44px;
  font-weight: 600;
  line-height: 64px;
  align-self: stretch;
  margin-top: 8px;
  @media (max-width: 991px) {
    font-size: 32px;
    line-height: 48px;
    margin-top: 24px;
    max-width: 100%;
  }
`;

const Subheadline = styled.div`
  color: var(--Text-Body-01, #cdc9e4);
  margin-top: 16px;
  font: 400 24px/36px Avenir, sans-serif;
  @media (max-width: 991px) {
    font-size: 20px;
    margin-top: 24px;
    max-width: 100%;
  }
`;

const CTAButton = styled.button`
  border: none;
  border-radius: 24px;
  background-color: rgba(141, 73, 228, 1);
  display: flex;
  margin-top: 56px;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  color: rgba(255, 255, 255, 1);
  justify-content: center;
  padding: 12px 16px;
  font: 16px Avenir, sans-serif;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-top: 24px;
  }
`;

const CTAText = styled.span`
  align-self: stretch;
  margin: auto 0;
`;

const CTAIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  align-self: stretch;
  margin: auto 0;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 36%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ServicesCard = styled.div`
  border-radius: 8px;
  background: linear-gradient(91deg, #5f01bd 5%, #3c0475 115.73%);
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  margin: 0 auto;
  padding: 1px 0 24px 24px;
  font: 600 14px Raleway, sans-serif;
  @media (max-width: 991px) {
    margin-top: 76px;
  }
`;

const ServicesHeader = styled.div`
  align-self: stretch;
  display: flex;
  width: 100%;
  gap: 20px;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  justify-content: space-between;
`;

const ServicesTitleWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin: auto 0;
`;

const ServicesIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
  @media (max-width: 991px) {
    width: 30px;
  }
`;

const ServicesTitle = styled.div`
  flex-basis: auto;
  margin: auto 0;
`;

const HeaderImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 75px;
  border-radius: 0px;
`;

// const BottomSection = styled.div`
//   align-self: end;
//   margin-top: 12px;
//   width: 724px;
//   max-width: 100%;
//   display: flex;
//   gap: 20px;
//   @media (max-width: 991px) {
//     flex-direction: column;
//     margin-top: 76px;
//     align-self: center;
//   }
// `;

// const StatisticWrapper = styled.div`
//   border-radius: 8px;
//   background-color: rgba(254, 114, 13, 1);
//   display: flex;
//   flex-grow: 1;
//   color: rgba(24, 12, 31, 1);
//   padding: 12px 24px 56px;
//   font: 800 48px Avenir, sans-serif;
//   @media (max-width: 991px) {
//     font-size: 36px;
//     padding: 0 20px;
//     width: 173px;
//   }
// `;

// const MobileServicesWrapper = styled.div`
//   padding: 0;
//   margin-top: 20px;
// `;

export default HeroSection;
