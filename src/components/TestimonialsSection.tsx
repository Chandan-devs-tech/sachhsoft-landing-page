import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

interface TestimonialData {
  title: string;
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

const testimonialData: TestimonialData[] = [
  {
    title: "Incredible tech solutions",
    content:
      "Sacchsoft has truly transformed the way we do business. Fast, reliable, and innovative. They've resolved our tech issues swiftly and efficiently, every time",
    author: {
      name: "John Kegel",
      role: "CEO, RenewRX",
      image:
        "https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/ab4e48115f3a1fc8845b9bfa26e07a98030776f92a51f75ed0ddfe1a5ef76b0b?apiKey=8daf534316604d9cae29e22c036504a0&",
    },
  },
  {
    title: "Incredible tech solutions",
    content:
      "Sacchsoft has truly transformed the way we do business. Fast, reliable, and innovative. They've resolved our tech issues swiftly and efficiently, every time",
    author: {
      name: "John Kegel",
      role: "CEO, RenewRX",
      image:
        "https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/ab4e48115f3a1fc8845b9bfa26e07a98030776f92a51f75ed0ddfe1a5ef76b0b?apiKey=8daf534316604d9cae29e22c036504a0&",
    },
  },
];

interface TestimonialProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  authorName,
  authorTitle,
  authorImage,
}) => {
  return (
    <CardWrapper>
      <QuoteText>{quote}</QuoteText>
      <AuthorContainer>
        <AuthorImage src={authorImage} alt={authorName} loading="lazy" />
        <AuthorInfo>
          <AuthorName>{authorName}</AuthorName>
          <AuthorTitle>{authorTitle}</AuthorTitle>
        </AuthorInfo>
      </AuthorContainer>
    </CardWrapper>
  );
};

export function TestimonialsSection() {
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

  const mobileTestimonialData: TestimonialProps = {
    quote:
      "Sacchsoft has truly transformed the way we do business. Fast, reliable, and innovative. They've resolved our tech issues swiftly and efficiently, every time.",
    authorName: "John Kegel",
    authorTitle: "CEO, RenewRX",
    authorImage:
      "https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/ab4e48115f3a1fc8845b9bfa26e07a98030776f92a51f75ed0ddfe1a5ef76b0b?apiKey=8daf534316604d9cae29e22c036504a0&",
  };

  if (isMobile) {
    return (
      <SectionWrapper>
        <SectionHeader>TESTIMONIALS</SectionHeader>
        <SectionTitle>Hear from our valued partners</SectionTitle>
        <TestimonialCard {...mobileTestimonialData} />
        <RatingImage
          src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/839e49143e9cd8f54625cc267897b1d2b74b40063136e0da46c920890c2e8834?apiKey=8daf534316604d9cae29e22c036504a0&"
          alt="Rating"
          loading="lazy"
        />
      </SectionWrapper>
    );
  }

  return (
    <Container>
      <ContentWrapper>
        <HeaderWrapper>
          <Label>TESTIMONIALS</Label>
          <Title>
            Hear from our <HighlightedText>valued partners</HighlightedText>
          </Title>
        </HeaderWrapper>
        {!isMobile && (
          <LogoWrapper>
            <IconWrapper>
              <CircleArrowLeft size={40} />
            </IconWrapper>
            <IconWrapper>
              <CircleArrowRight size={40} />
            </IconWrapper>
          </LogoWrapper>
        )}
      </ContentWrapper>
      <TestimonialGrid>
        <TestimonialWrapper isMobile={isMobile}>
          {testimonialData.map((testimonial, index) => (
            <CardColumn key={index} isMobile={isMobile}>
              <CardContent>
                <CardTitle>{testimonial.title}</CardTitle>
                <CardText>{testimonial.content}</CardText>
                <AuthorSection>
                  <AuthorImage
                    loading="lazy"
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                  />
                  <AuthorInfo>
                    <AuthorName>{testimonial.author.name}</AuthorName>
                    <AuthorRole>{testimonial.author.role}</AuthorRole>
                  </AuthorInfo>
                </AuthorSection>
              </CardContent>
            </CardColumn>
          ))}
        </TestimonialWrapper>
      </TestimonialGrid>
    </Container>
  );
}

const Container = styled.section`
  border-radius: 0;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1176px;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Raleway, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Label = styled.span`
  color: var(--Text-Heading-02, #c4c7ce);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const Title = styled.h2`
  color: var(--Text-Highlighter, #fff);
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  margin-top: 8px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HighlightedText = styled.span`
  color: rgba(255, 255, 255, 1);
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  color: #9a9daa;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TestimonialGrid = styled.div`
  margin-top: 44px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const TestimonialWrapper = styled.div<{ isMobile: boolean }>`
  gap: 20px;
  display: flex;
  ${({ isMobile }) =>
    isMobile &&
    `
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  `}
`;

const CardColumn = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: ${({ isMobile }) => (isMobile ? "100%" : "50%")};
  margin-left: 0;
`;

const CardContent = styled.div`
  border-radius: 24px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  font-family: Avenir, sans-serif;
  font-weight: 500;
  margin: 0 auto;
  padding: 28px 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--Lines-Icon, #9747ff);
    opacity: 0.1;
    z-index: -1;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 24px;
    padding: 20px;
  }
`;

const CardTitle = styled.h3`
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  margin: 0;
`;

const CardText = styled.p`
  color: var(--Text-Body-01, #cdc9e4);
  align-self: stretch;
  margin: 22px 0 0;
  font: italic 20px/40px Raleway, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const AuthorSection = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 8px;
  font-weight: 350;
`;

const AuthorRole = styled.span`
  color: var(--Text-Body-01, #cdc9e4);
  font-size: 14px;
`;

const SectionWrapper = styled.section`
  border-radius: 0px 0px 0px 0px;
  display: flex;

  flex-direction: column;
  align-items: center;
  font-family: Raleway, sans-serif;
  font-weight: 500;
  padding: 40px 0;
`;

const SectionHeader = styled.h2`
  color: var(--Text-Heading-02, #c4c7ce);
  text-align: center;
  font-size: 12px;
  letter-spacing: 3px;
  margin: 0;
`;

const SectionTitle = styled.h3`
  color: var(--Text-Heading, #d9d6df);
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  margin-top: 12px;
  margin-bottom: 32px;
`;

const CardWrapper = styled.div`
  border-radius: 12px;
  width: 382px;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: Avenir, sans-serif;
  height: 345px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #9747ff;
    opacity: 0.1;
    z-index: -1;
  }
`;

const QuoteText = styled.div`
  color: var(--Text-Body-01, #cdc9e4);
  align-self: stretch;
  margin-top: 24px;
  font: italic 18px/40px Raleway, sans-serif;
`;

const AuthorContainer = styled.div`
  display: flex;
  margin-top: 44px;
  gap: 8px;
  font-weight: 350;
`;

const AuthorImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  border-radius: 4px;
  align-self: start;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.div`
  color: #fff;
  font-size: 16px;
  align-self: start;
`;

const AuthorTitle = styled.div`
  color: var(--Text-Body-01, #cdc9e4);
  font-size: 14px;
`;

const RatingImage = styled.img`
  aspect-ratio: 14.93;
  object-fit: contain;
  object-position: center;
  width: 180px;
  margin-top: 24px;
  max-width: 100%;
`;
