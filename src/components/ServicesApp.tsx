import * as React from "react";
import styled from "styled-components";

interface ServiceCardProps {
  label: string;
}

const ServiceCard = ({ label }: ServiceCardProps) => {
  return <CardContainer>{label}</CardContainer>;
};

interface ServicesHeaderProps {
  title: string;
  iconSrc: string;
  menuIconSrc: string;
}

const ServicesHeader = ({
  title,
  iconSrc,
  menuIconSrc,
}: ServicesHeaderProps) => {
  return (
    <HeaderContainer>
      <TitleWrapper>
        <ServiceIcon src={iconSrc} loading="lazy" alt="Service icon" />
        <HeaderTitle>{title}</HeaderTitle>
      </TitleWrapper>
      <MenuIcon src={menuIconSrc} loading="lazy" alt="Menu icon" />
    </HeaderContainer>
  );
};

const primaryServices = [
  "E-Commerce",
  "Marketing",
  "Enterprise",
  "Development",
];
const secondaryServices = [
  "Automation",
  "UI/UX Design",
  "Modern Web Services",
  // "SEO",
];

interface ServicesAppProps {
  noPadding?: boolean;
}

export const ServicesApp: React.FC<ServicesAppProps> = ({
  noPadding = false,
}) => {
  return (
    <PanelContainer noPadding={noPadding}>
      <ContentWrapper noPadding={noPadding}>
        <ServicesHeader
          title="Our Services"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/4e18331c3692cce806ae59b27c57342576e806ae13fab6e9b24ebe4324bda9b5?apiKey=8daf534316604d9cae29e22c036504a0&"
          menuIconSrc="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/5d5fbafa28016877459174cd01c0d8311a37574bb271a58289a3d754e46b9faa?apiKey=8daf534316604d9cae29e22c036504a0&"
        />
        <PrimaryServicesRow>
          {primaryServices.map((service, index) => (
            <ServiceCard key={`primary-${index}`} label={service} />
          ))}
        </PrimaryServicesRow>
        <SecondaryServicesRow>
          {secondaryServices.map((service, index) => (
            <ServiceCard key={`secondary-${index}`} label={service} />
          ))}
        </SecondaryServicesRow>
      </ContentWrapper>
    </PanelContainer>
  );
};

const PanelContainer = styled.div<{ noPadding?: boolean }>`
  border-radius: 0px 0px 0px 0px;
  display: flex;
  max-width: 437px;
  flex-direction: column;
  color: rgba(250, 249, 253, 1);
  font: 400 14px Raleway, sans-serif;
  padding: ${(props) => (props.noPadding ? "0" : "20px 20px")};
`;

const CardContainer = styled.div`
  align-self: stretch;
  border-radius: 80px;
  border: 1px solid var(--Lines-Stroke, #9a9daa);
  gap: 10px;
  overflow: hidden;
  white-space: nowrap;
  padding: 8px;
`;

const HeaderContainer = styled.div`
  align-self: stretch;
  display: flex;
  width: 100%;
  gap: 20px;
  font-size: 18px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  align-self: end;
  display: flex;
  margin-top: 21px;
  gap: 12px;
`;

const ServiceIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 32px;
`;

const HeaderTitle = styled.div`
  flex-basis: auto;
  margin: auto 0;
`;

const MenuIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 53px;
  border-radius: 0px 0px 0px 0px;
`;

const ContentWrapper = styled.div<{ noPadding: boolean }>`
  background: var(
    --Primary-Primary-01,
    linear-gradient(91deg, #5f01bd 5%, #3c0475 115.73%)
  );
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  padding: ${(props) => (props.noPadding ? "0" : "3px 0 20px 10px")};
`;

const PrimaryServicesRow = styled.div`
  display: flex;
  margin-top: 26px;
  width: 100%;
  max-width: 395px;
  gap: 8px;
  white-space: nowrap;
`;

const SecondaryServicesRow = styled.div`
  display: flex;
  margin-top: 16px;
  width: 100%;
  gap: 5px;
`;
