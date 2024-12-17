import * as React from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import shopifySvg from "../assets/shopify.svg";
import awsSvg from "../assets/aws.svg";
import wordpressSvg from "../assets/wordpress.svg";
import googleCloudSvg from "../assets/google-cloud.svg";

export const TechnicalToolsetSection: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 767);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <TechnicalHeading>TECHNICAL TOOLSET</TechnicalHeading>
        <QualityStatement>
          We <HighlightedText>assure</HighlightedText> Quality Development
        </QualityStatement>
        <LogosContainer>
          <ChevronIcon>
            <ChevronLeft size={24} />
          </ChevronIcon>
          <Logo src={shopifySvg} alt="Shopify" />
          {!isMobile && (
            <>
              <Logo src={awsSvg} alt="AWS" />
              <Logo src={wordpressSvg} alt="WordPress" />
              <Logo src={googleCloudSvg} alt="Google Cloud" />
            </>
          )}
          <ChevronIcon>
            <ChevronRight size={24} />
          </ChevronIcon>
        </LogosContainer>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 80px 0;
  @media (max-width: 767px) {
    padding: 40px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TechnicalHeading = styled.h2`
  color: var(--Text-Heading-02, #c4c7ce);
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 3px;
  margin: 0 0 8px 0;
  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

const QualityStatement = styled.h1`
  color: var(--Text-Highlighter, #fff);
  font-family: "Raleway", sans-serif;
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 44px 0;
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #d9d6df;
  }
`;

const HighlightedText = styled.span`
  color: rgba(255, 255, 255, 1);
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid rgba(154, 157, 170, 0.5);
  border-bottom: 1px solid rgba(154, 157, 170, 0.5);
  @media (max-width: 767px) {
    justify-content: space-between;
    height: 129px;
  }
`;

const Logo = styled.img`
  height: 40px;
  object-fit: contain;
  @media (max-width: 767px) {
    width: 89px;
    height: 40.02px;
  }
`;

const ChevronIcon = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
