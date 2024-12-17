import * as React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { US } from "country-flag-icons/react/3x2";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

interface ServiceOption {
  id: string;
  label: string;
}

const serviceOptions: ServiceOption[] = [
  { id: "development", label: "Development" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "webdesign", label: "Web/Product Design" },
];

const mobileOptions = serviceOptions.slice(0, 2);

export const ContactSection: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  const [selectedService, setSelectedService] = React.useState<string>("");
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });
  };

  return isMobile ? (
    <MobileContainer>
      <MobileWrapper>
        <Header>GET IN TOUCH</Header>
        <Title>Have a project? We would love to help</Title>
        <FormContainer onSubmit={handleSubmit}>
          <FormContent>
            <SectionTitle>I'm interested in...</SectionTitle>
            <ServiceOptionsWrapper>
              {(isMobile ? mobileOptions : serviceOptions).map((option) => (
                <ServiceOptionLabel key={option.id}>
                  <ServiceInput
                    type="radio"
                    name="service"
                    value={option.id}
                    checked={selectedService === option.id}
                    onChange={(e) => setSelectedService(e.target.value)}
                  />
                  <ServiceText>{option.label}</ServiceText>
                </ServiceOptionLabel>
              ))}
            </ServiceOptionsWrapper>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Work E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="phone">Contact</Label>
              <PhoneInputWrapper>
                <PhonePrefix>
                  <FlagWrapper>
                    <US title="United States" />
                  </FlagWrapper>
                  <CountryCode>+1</CountryCode>
                </PhonePrefix>
                <PhoneInput
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                />
              </PhoneInputWrapper>
            </InputGroup>
            <InputGroup>
              <Label htmlFor="message">Tell us about your project</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                aria-required="true"
              />
            </InputGroup>
            <AttachmentButton type="button">
              <AttachIcon
                src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/eb89cfdd90b579e7070cacf809e69f8ceb004548a8f5cae305c115d1c221268f?apiKey=8daf534316604d9cae29e22c036504a0&"
                alt=""
              />
              <span>Add attachment</span>
            </AttachmentButton>
            <SubmitButton type="submit">
              <span>Submit</span>
              <SubmitIcon
                src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/7aff83d42bddca12b7521e39803e046cf533190a9610de3d1589bca5ce28ce7b?apiKey=8daf534316604d9cae29e22c036504a0&"
                alt=""
              />
            </SubmitButton>
          </FormContent>
        </FormContainer>
        <CompanyLogo
          src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/6c069e79884924114fb79b4e5f4c04d79fbe17261f65ffdd2f3daea2bcd9141e?apiKey=8daf534316604d9cae29e22c036504a0&"
          alt="Company Logo"
        />
        <ContactInfo>
          Chicago, USA
          <br />
          +1 (805) 427-3883
          <br />
          <ContactLink href="mailto:ceo@sachhsoft.com">
            ceo@sachhsoft.com
          </ContactLink>
        </ContactInfo>
      </MobileWrapper>
    </MobileContainer>
  ) : (
    <DesktopContainer>
      <DesktopWrapper>
        <DesktopContent>
          <LeftColumn>
            <CompanyLogo
              src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/6c069e79884924114fb79b4e5f4c04d79fbe17261f65ffdd2f3daea2bcd9141e?apiKey=8daf534316604d9cae29e22c036504a0&"
              alt="Company Logo"
            />
            <GetInTouch>GET IN TOUCH</GetInTouch>
            <ProjectTitle>Have a project? We would love to help</ProjectTitle>
            <ContactInfo>
              Chicago, USA
              <br />
              +1 (805) 427-3883
              <br />
              <ContactLink href="mailto:ceo@sachhsoft.com">
                ceo@sachhsoft.com
              </ContactLink>
            </ContactInfo>
          </LeftColumn>
          <RightColumn>
            <FormContainer onSubmit={handleSubmit}>
              <FormContent>
                <SectionTitle>I'm interested in...</SectionTitle>
                <ServiceOptionsWrapper>
                  {serviceOptions.map((option) => (
                    <ServiceOptionLabel key={option.id}>
                      <ServiceInput
                        type="radio"
                        name="service"
                        value={option.id}
                        checked={selectedService === option.id}
                        onChange={(e) => setSelectedService(e.target.value)}
                      />
                      <ServiceText>{option.label}</ServiceText>
                    </ServiceOptionLabel>
                  ))}
                </ServiceOptionsWrapper>
                <InputGroup>
                  <Label htmlFor="desktop-name">Name</Label>
                  <Input
                    id="desktop-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                  />
                </InputGroup>
                <TwoColumnInputs>
                  <InputGroup>
                    <Label htmlFor="desktop-email">Work E-mail</Label>
                    <Input
                      id="desktop-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label htmlFor="desktop-phone">Contact</Label>
                    <PhoneInputWrapper>
                      <PhonePrefix>
                        <FlagWrapper>
                          <US title="United States" />
                        </FlagWrapper>
                        <CountryCode>+1</CountryCode>
                      </PhonePrefix>
                      <PhoneInput
                        id="desktop-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                      />
                    </PhoneInputWrapper>
                  </InputGroup>
                </TwoColumnInputs>
                <InputGroup>
                  <Label htmlFor="desktop-message">
                    Tell us about your project
                  </Label>
                  <TextArea
                    id="desktop-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                  />
                </InputGroup>
                <AttachmentButton type="button">
                  <AttachIcon
                    src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/eb89cfdd90b579e7070cacf809e69f8ceb004548a8f5cae305c115d1c221268f?apiKey=8daf534316604d9cae29e22c036504a0&"
                    alt=""
                  />
                  <span>Add attachment</span>
                </AttachmentButton>
                <SubmitButton type="submit">
                  <span>Submit</span>
                  <SubmitIcon
                    src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/7aff83d42bddca12b7521e39803e046cf533190a9610de3d1589bca5ce28ce7b?apiKey=8daf534316604d9cae29e22c036504a0&"
                    alt=""
                  />
                </SubmitButton>
              </FormContent>
            </FormContainer>
          </RightColumn>
        </DesktopContent>
      </DesktopWrapper>
    </DesktopContainer>
  );
};

const MobileContainer = styled.div`
  border-radius: 0;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  font-weight: 500;
  margin: 0 auto;
  margin-top: 60px;
`;

const MobileWrapper = styled.div`
  border-radius: 4px;
  background: linear-gradient(91deg, #5f01bd 5%, #3c0475 115.73%);
  width: 100%;
  padding: 35px 24px;
`;

const Header = styled.div`
  color: #c4c7ce;
  letter-spacing: 3px;
  font: 12px Raleway, sans-serif;
`;

const Title = styled.h1`
  color: #d9d6df;
  margin-top: 12px;
  font: 600 32px/48px Raleway, sans-serif;
`;

const FormContainer = styled.form`
  border-radius: 12px;
  background-color: #fff;
  width: 100%;
  margin-top: 32px;
`;

const FormContent = styled.div`
  padding: 24px;
`;

const SectionTitle = styled.h2`
  color: #030114;
  font: 600 18px Raleway, sans-serif;
  margin: 0 0 24px;
`;

const ServiceOptionsWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 44px;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    flex-wrap: nowrap;
  }
`;

const ServiceOptionLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ServiceInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #f0e6ff;
    border-color: #8d49e4;
  }
`;

const ServiceText = styled.span`
  border-radius: 24px;
  border: 1px solid #9a9daa;
  padding: 8px 16px;
  color: #030114;
  font: 400 16px Avenir, sans-serif;
  transition: all 0.2s ease;
  &:hover {
    border-color: #8d49e4;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 31px;
`;

const Label = styled.label`
  display: block;
  color: #030114;
  font: 16px Raleway, sans-serif;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 4px;
  border: 1px solid #9a9daa;
  padding: 0 16px;
  font: 16px Raleway, sans-serif;
  &:focus {
    outline: none;
    border-color: #8d49e4;
  }
`;

const PhoneInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #9a9daa;
  border-radius: 4px;
  height: 45px;
`;

const PhonePrefix = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
`;

const CountryCode = styled.span`
  color: #030114;
  font: 14px Avenir, sans-serif;
`;

const PhoneInput = styled.input`
  border: none;
  height: 100%;
  flex: 1;
  padding: 0 16px;
  font: 16px Raleway, sans-serif;
  &:focus {
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 175px;
  border-radius: 4px;
  border: 1px solid #9a9daa;
  padding: 16px;
  font: 16px Raleway, sans-serif;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #8d49e4;
  }
`;

const AttachmentButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #030114;
  font: 16px Raleway, sans-serif;
  cursor: pointer;
  padding: 0;
  margin-top: 23px;
  &:hover {
    color: #8d49e4;
  }
`;

const AttachIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #8d49e4;
  border: none;
  border-radius: 24px;
  color: #fff;
  font: 400 16px Avenir, sans-serif;
  padding: 12px 16px;
  margin-top: 48px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #7b3fd0;
  }
`;

const SubmitIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const CompanyLogo = styled.img`
  width: 138px;
  margin-top: 40px;
`;

const ContactInfo = styled.div`
  color: #fff;
  margin-top: 24px;
  font: 400 18px/36px Avenir, sans-serif;
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const DesktopContainer = styled.div`
  border-radius: 0;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;

const DesktopWrapper = styled.div`
  border-radius: 4px;
  background: linear-gradient(91deg, #5f01bd 5%, #3c0475 115.73%);
  width: 100%;
  padding: 64px 80px;
`;

const DesktopContent = styled.div`
  display: flex;
  gap: 20px;
`;

const LeftColumn = styled.div`
  flex: 0 0 40%;
  color: #fff;
`;

const RightColumn = styled.div`
  flex: 0 0 60%;
`;

const GetInTouch = styled.div`
  color: #c4c7ce;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 3px;
  margin-top: 96px;
`;

const ProjectTitle = styled.h1`
  font-size: 44px;
  font-weight: 600;
  line-height: 64px;
  margin-top: 8px;
`;

const TwoColumnInputs = styled.div`
  display: flex;
  gap: 23px;
  margin-bottom: 31px;
`;

const FlagWrapper = styled.span`
  display: inline-block;
  width: 24px;
  height: 18px;
  margin-right: 8px;
  vertical-align: middle;
`;

export default ContactSection;
