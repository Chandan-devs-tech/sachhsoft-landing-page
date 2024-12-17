import React from "react";
import styled from "styled-components";

interface ProcessSectionProps {
  processNumber: string;
  totalSteps: string;
  title: string;
  description: string;
  imageSrc: string;
  dividerSrc1: string;
  dividerSrc2: string;
}

const processData: ProcessSectionProps = {
  processNumber: "01",
  totalSteps: "4",
  title: "We bring your ideas to life through discovery",
  description:
    "We shape and elevate brands with rigorous research, constantly challenging IT consulting assumptions",
  imageSrc:
    "https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/88061781a2410940b027c0d9d8de66088479eef042c6f1ac4db43cc6c6f01c60?apiKey=8daf534316604d9cae29e22c036504a0&",
  dividerSrc1:
    "https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/8d210d17657ddc21c22996ef1e5ece674c2a3f761f2708eeb61136fa03591f02?apiKey=8daf534316604d9cae29e22c036504a0&",
  dividerSrc2:
    "https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/2dd50ea251aaa70b3bcec1ae9e27a19ef14f6b515d207411dae21d693e64dc9c?apiKey=8daf534316604d9cae29e22c036504a0&",
};

export function ProcessSection() {
  return (
    <Container>
      <InnerContainer>
        <ContentWrapper>
          <ImageContainer>
            <ProcessImage
              src={processData.imageSrc}
              alt="Process visualization"
              loading="lazy"
            />
          </ImageContainer>
          <ContentContainer>
            <ProcessContent>
              <ProcessLabel>OUR PROCESS</ProcessLabel>
              <ProcessTitle>
                {processData.title
                  .split("discovery")
                  .map((part, index, array) =>
                    index === array.length - 1 ? (
                      <React.Fragment key={index}>
                        <HighlightText>discovery</HighlightText>
                        {part}
                      </React.Fragment>
                    ) : (
                      <React.Fragment key={index}>{part}</React.Fragment>
                    )
                  )}
              </ProcessTitle>
              <Divider
                src={processData.dividerSrc1}
                alt=""
                loading="lazy"
                $isFirst
              />
              <StepCounter>
                {processData.processNumber}
                <StepTotal>/{processData.totalSteps}</StepTotal>
              </StepCounter>
              <ProcessDescription>{processData.description}</ProcessDescription>
              <Divider
                src={processData.dividerSrc2}
                alt=""
                loading="lazy"
                $isFirst={false}
              />
            </ProcessContent>
          </ContentContainer>
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.section`
  border-radius: 0;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 80px 80px 80px;

  @media (max-width: 768px) {
    padding: 0;
    max-width: 382px;
  }
`;

const InnerContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const ContentWrapper = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  margin-left: 0;
  @media (max-width: 991px) {
    width: 100%;
    order: 1;
  }
`;

const ProcessImage = styled.img`
  aspect-ratio: 1.04;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 24px;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    aspect-ratio: 1.14;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 45%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
    order: 0;
  }
`;

const ProcessContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;
  font-family: Raleway, sans-serif;
  font-weight: 400;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const ProcessLabel = styled.div`
  color: var(--Text-Heading-02, #c4c7ce);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ProcessTitle = styled.h2`
  color: #d9d6df;
  margin-top: 16px;
  width: 395px;
  font: 600 32px/48px Raleway;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    width: 100%;
    margin-top: 12px;
  }
`;

const HighlightText = styled.span`
  color: #fe720d;
`;

const Divider = styled.img<{ $isFirst: boolean }>`
  width: 100%;
  max-width: 395px;
  margin-top: ${(props) => (props.$isFirst ? "40px" : "24px")};
  aspect-ratio: 333.33;
  object-fit: contain;
  object-position: center;
  stroke-width: 1px;
  stroke: var(--Lines-Stroke, #9a9daa);
`;

const StepCounter = styled.div`
  color: rgba(196, 199, 206, 1);
  margin-top: 45px;
  font: 46px Avenir, sans-serif;
`;

const StepTotal = styled.span`
  font-size: 16px;
`;

const ProcessDescription = styled.p`
  color: var(--Text-Body-01, #cdc9e4);
  margin-top: 8px;
  font: 16px/28px Avenir, sans-serif;
  max-width: 395px;

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;
