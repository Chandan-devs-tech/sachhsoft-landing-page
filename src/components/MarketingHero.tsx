import styled from "styled-components";
import MaskGroupIcon from "../assets/Mask-group-icon.svg";

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 383px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  font-family: Avenir, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 670px;
    height: 134px;
    margin-left: auto;
    margin-right: 0;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const BrandCard = styled.div`
  width: 100%;
  max-width: 185px;
  height: 238px;
  background-color: #1e1a2b;
  border-radius: 8px;
  padding: 36px 16px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 768px) {
    position: absolute;
    left: 0;
    top: 0;
    width: 324px;
    height: 134px;
    max-width: none;
    padding: 24px 60px 24px 70px;
    justify-content: space-between;
  }
`;

const MaskIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 64px;
  height: 64px;

  @media (min-width: 768px) {
    top: 0px;
    left: 0px;
    width: 64px;
    height: 64px;
  }
`;

const BrandContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: 768px) {
    padding-top: 12px;
  }
`;

const Heading = styled.h2`
  color: #ffffff;
  font-size: 20px;
  line-height: 28px;
  font-weight: 350;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const BoldText = styled.span`
  font-weight: 800;
`;

const TeamSignature = styled.div`
  color: #d9d6df;
  font-size: 12px;
  font-weight: 350;
  margin-top: 31px;

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 12px;
    line-height: 16px;
  }
`;

const BrandImage = styled.img`
  object-fit: contain;
  margin-top: auto;
  align-self: flex-end;
  position: absolute;
  width: 87px;
  height: 127px;
  right: 175px;
  top: 112px;

  @media (min-width: 768px) {
    position: absolute;
    width: 87px;
    height: 127px;
    right: 348px;
    top: 7px;

    right: 350px;
    top: 10px;
  }
`;

const StatsCard = styled.div`
  width: 100%;
  max-width: 173px;
  height: 238px;
  background-color: #fe720d;
  opacity: 0.9;
  border-radius: 8px;
  padding: 26px 0px 5px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 324px;
    height: 134px;
    max-width: none;
    padding: 12px 30px;
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }
`;

const StatGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatValue = styled.div`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  color: #180c1f;

  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 66px;
  }
`;

const StatLabel = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #3f2410;
  opacity: 0.89;

  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

export const MarketingHero = () => {
  return (
    <HeroContainer>
      <BrandCard>
        <MaskIcon src={MaskGroupIcon} alt="Mask Group Icon" />
        <BrandContent>
          <Heading>
            You <BoldText>dream</BoldText> it,
            <br />
            We <BoldText>build</BoldText> it.
          </Heading>
          <TeamSignature>- Team Sacchsoft</TeamSignature>
        </BrandContent>
      </BrandCard>
      <BrandImage
        src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/62302bbdaea28f8db4fbf9a2fd3da2cbe217305c61c608a67525185a7976e491?apiKey=8daf534316604d9cae29e22c036504a0&"
        alt="Sacchsoft brand illustration"
      />
      <StatsCard>
        <StatGroup>
          <StatValue>10+</StatValue>
          <StatLabel>INDUSTRY YEARS</StatLabel>
        </StatGroup>
        <StatGroup>
          <StatValue>$10M</StatValue>
          <StatLabel>REVENUE GENERATED FOR CLIENTS</StatLabel>
        </StatGroup>
      </StatsCard>
    </HeroContainer>
  );
};
