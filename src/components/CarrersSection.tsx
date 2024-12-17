import * as React from "react";
import styled from "styled-components";

interface JobListing {
  title: string;
  location: string;
  experience: string;
  openings: number;
}

interface JobCardProps extends JobListing {
  key?: number;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  location,
  experience,
  openings,
}) => {
  return (
    <CardWrapper>
      <HighlightBar />
      <ContentWrapper>
        <TitleSection>
          <JobTitle>{title}</JobTitle>
          <OpeningsCount>{openings}</OpeningsCount>
        </TitleSection>
        <JobDetails>{`${location} · ${experience}`}</JobDetails>
      </ContentWrapper>
      <IconWrapper>
        <NavigationIcon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/b29d7c90013566363d01836a3abdda36fb348a3650d845d9726cbcf08a4f3be0?apiKey=8daf534316604d9cae29e22c036504a0&"
          alt="Navigate to job details"
        />
      </IconWrapper>
    </CardWrapper>
  );
};

export const CareersSection: React.FC = () => {
  const jobListings: JobListing[] = [
    {
      title: "Software Developer",
      location: "India",
      experience: "7-10 years",
      openings: 2,
    },
    {
      title: "Junior Developer",
      location: "India",
      experience: "1-3 years",
      openings: 2,
    },
  ];

  return (
    <Container>
      <SectionHeading>HIRING</SectionHeading>
      <MainTitle>Let's build something great together!</MainTitle>

      {jobListings.map((job, index) => (
        <JobCard
          key={index}
          title={job.title}
          location={job.location}
          experience={job.experience}
          openings={job.openings}
        />
      ))}

      <ViewAllButton>
        <ButtonText>VIEW ALL</ButtonText>
        <ButtonIcon
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/7aff83d42bddca12b7521e39803e046cf533190a9610de3d1589bca5ce28ce7b?apiKey=8daf534316604d9cae29e22c036504a0&"
          alt="View all jobs"
        />
      </ViewAllButton>
    </Container>
  );
};

const Container = styled.section`
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, sans-serif;
  margin: 0 auto;
  padding: 40px 60px;
  @media (max-width: 767px) {
    padding: 40px 20px;
  }
`;

const SectionHeading = styled.h2`
  color: var(--Text-Heading-02, #c4c7ce);
  text-align: center;
  letter-spacing: 3px;
  font: 500 14px Raleway, sans-serif;
  margin: 0;
`;

const MainTitle = styled.h1`
  color: var(--Text-Heading, #d9d6df);
  text-align: center;
  margin: 8px 0 44px;
  font: 600 32px Raleway, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 40px;
  }
`;

const CardWrapper = styled.div`
  border-radius: 4px;
  background-color: rgba(30, 26, 43, 1);
  box-shadow: 0px 11px 35px rgba(0, 0, 0, 0.05);
  align-self: stretch;
  display: flex;
  width: 100%;
  padding-right: 32px;
  gap: 20px;

  margin-top: 24px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const HighlightBar = styled.div`
  border-radius: 0px 0px 0px 0px;
  display: flex;
  width: 8px;
  height: 122px;
  fill: var(
    --Primary-Primary-01,
    linear-gradient(91deg, #5f01bd 5%, #3c0475 115.73%)
  );
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  flex-grow: 1;
`;

const TitleSection = styled.div`
  display: flex;
  gap: 8px;
`;

const JobTitle = styled.h3`
  color: var(--Text-Heading, #d9d6df);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
`;

const OpeningsCount = styled.span`
  background-color: #5b5b65;
  border-radius: 50%;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  font-weight: 350;
  width: 24px;
  height: 24px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const JobDetails = styled.p`
  color: var(--Text-Body-01, #cdc9e4);
  font-size: 18px;
  font-weight: 350;
  line-height: 2;
  margin: 4px 0 0;
`;

const NavigationIcon = styled.img`
  aspect-ratio: 0.9;
  object-fit: contain;
  object-position: center;
  width: 18px;
  margin: auto 0;
`;

const ViewAllButton = styled.button`
  border-radius: 24px;
  display: flex;
  margin-top: 48px;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  padding: 12px 16px;
  border: 2px solid rgba(141, 73, 228, 1);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(141, 73, 228, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(141, 73, 228, 0.5);
  }

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ButtonText = styled.span`
  margin: auto 0;
`;

const ButtonIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  margin: auto 0;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
