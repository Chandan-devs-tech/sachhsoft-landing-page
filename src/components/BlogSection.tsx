import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface BlogPost {
  imageUrl: string;
  title: string;
  date: string;
  readTime: string;
}

interface BlogCardProps extends BlogPost {}

interface BlogHeaderProps {
  subtitle: string;
  title: string;
  titleHighlight: string;
}

interface BlogNavigationProps {
  onViewAll: () => void;
}

const blogPosts: BlogPost[] = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/8b6d764eafbacbf7bdc85bca7722b66cf29b749c2848fd33145342156836fa5e?apiKey=8daf534316604d9cae29e22c036504a0&",
    title: "Maximising business success: The Power of SEO",
    date: "March 20, 2023",
    readTime: "2 min read",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/aab0ec83f6f00cae5f26b8942812b2ac00d2c67ea80efb5cd6345053e7c76999?apiKey=8daf534316604d9cae29e22c036504a0&",
    title: "The Impact of IT Industry on E-Commerce",
    date: "March 20, 2023",
    readTime: "2 min read",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/4390e027edb0e34d2d06be5c1e2f2c3dbf66cc352348639a42b7dcbe4d8a8b58?apiKey=8daf534316604d9cae29e22c036504a0&",
    title: "The Impact of IT Industry on E-Commerce",
    date: "March 20, 2023",
    readTime: "2 min read",
  },
];

const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  title,
  date,
  readTime,
}) => {
  return (
    <CardWrapper>
      <CardImage loading="lazy" src={imageUrl} alt={title} />
      <CardContent>
        <CardOverlay>
          <CardTitle>{title}</CardTitle>
          <CardMeta>{`${date} • ${readTime}`}</CardMeta>
          <CardIcon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/890c943a338e0c6e2897cdaa30d86a3503e4635fbeaf10ce1d50cb745717a651?apiKey=8daf534316604d9cae29e22c036504a0&"
            alt=""
          />
        </CardOverlay>
      </CardContent>
    </CardWrapper>
  );
};

const BlogHeader: React.FC<BlogHeaderProps> = ({
  subtitle,
  title,
  titleHighlight,
}) => {
  return (
    <HeaderWrapper>
      <Subtitle>{subtitle}</Subtitle>
      <Title>
        {title} <TitleHighlight>{titleHighlight}</TitleHighlight>
      </Title>
    </HeaderWrapper>
  );
};

const BlogNavigation: React.FC<BlogNavigationProps> = ({ onViewAll }) => {
  return (
    <NavigationButton onClick={onViewAll}>
      <ButtonText>VIEW ALL</ButtonText>
      <ButtonIcon
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/7aff83d42bddca12b7521e39803e046cf533190a9610de3d1589bca5ce28ce7b?apiKey=8daf534316604d9cae29e22c036504a0&"
        alt=""
      />
    </NavigationButton>
  );
};

export const BlogSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleViewAll = React.useCallback(() => {
    window.location.href = "/blog";
  }, []);

  if (isMobile) {
    return (
      <MobileBlogContainer>
        <MobileBlogHeader
          title="INNOVATION PIONEERS"
          subtitle="Explore insights through our knowledge-share blogs"
        />
        <MainImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/d1c64e6c4125d402f94245e9f1457ae987c9ded329d07bd54b62f37290dc9129?apiKey=8daf534316604d9cae29e22c036504a0&"
          alt="Blog content preview"
        />
        <DecorativeImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/bb10c487cee179ab5a56f167d8d1a2fdf0b34fae78fa234bd2f8d6f62c1ea510?apiKey=8daf534316604d9cae29e22c036504a0&"
          alt=""
        />
        <MobileViewAllButton
          text="VIEW ALL"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/8daf534316604d9cae29e22c036504a0/6aa06d7c78980938bab4c654b8a1c01612bcd9bc0759e78d88356e1289422a0b?apiKey=8daf534316604d9cae29e22c036504a0&"
          onClick={handleViewAll}
        />
      </MobileBlogContainer>
    );
  }

  return (
    <BlogContainer>
      <HeaderSection>
        <BlogHeader
          subtitle="BLOG"
          title="Explore insights through our"
          titleHighlight="knowledge-share blogs"
        />
      </HeaderSection>

      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogGridItem key={`blog-post-${index}`}>
            <BlogCard {...post} />
          </BlogGridItem>
        ))}
      </BlogGrid>

      <NavigationSection>
        <BlogNavigation onViewAll={handleViewAll} />
      </NavigationSection>
    </BlogContainer>
  );
};

const BlogContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const HeaderSection = styled.div`
  margin-bottom: 40px;
`;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Raleway, sans-serif;
`;

const Subtitle = styled.span`
  color: var(--Text-Heading-02, #c4c7ce);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Title = styled.h1`
  color: var(--Text-Highlighter, #fff);
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  margin-top: 8px;

  @media (max-width: 991px) {
    font-size: 28px;
    line-height: 40px;
  }

  @media (max-width: 640px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

const TitleHighlight = styled.span`
  color: rgba(255, 255, 255, 1);
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const BlogGridItem = styled.div`
  width: 100%;
`;

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  aspect-ratio: 0.611;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  position: relative;
  height: 100%;
  border-radius: 8px;
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
`;

const CardTitle = styled.h3`
  color: #fff;
  font: 600 24px/36px Raleway, sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const CardMeta = styled.div`
  color: var(--Text-Body-01, #cdc9e4);
  font: 350 16px Avenir, sans-serif;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CardIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 40px;
  margin-top: 8px;
  margin-left: auto;
  display: block;
`;

const NavigationSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 51px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const NavigationButton = styled.button`
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 1);
  padding: 12px 16px;
  font: 400 16px Avenir, sans-serif;
  border: 2px solid rgba(141, 73, 228, 1);
  background: transparent;
  cursor: pointer;

  &:hover {
    background: rgba(141, 73, 228, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(141, 73, 228, 0.5);
  }
`;

const ButtonText = styled.span`
  margin: auto 0;
`;

const ButtonIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 20px;
`;

const MobileBlogContainer = styled.section`
  border-radius: 0px 0px 0px 0px;
  display: flex;
  max-width: 480px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: Raleway, sans-serif;
  margin: 0 auto;
  padding: 40px 20px;
`;

const MobileBlogHeader: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <>
    <MobileTitle>{title}</MobileTitle>
    <MobileSubtitle>{subtitle}</MobileSubtitle>
  </>
);

const MobileTitle = styled.h1`
  color: var(--Text-Heading-02, #c4c7ce);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const MobileSubtitle = styled.h2`
  color: var(--Text-Heading, #d9d6df);
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-top: 12px;
`;

const MainImage = styled.img`
  aspect-ratio: 0.62;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 0px 0px 0px 0px;
  align-self: stretch;
  margin-top: 44px;
`;

const DecorativeImage = styled.img`
  aspect-ratio: 5.68;
  object-fit: contain;
  object-position: center;
  width: 68px;
  margin-top: 32px;
`;

const MobileViewAllButton: React.FC<{
  text: string;
  iconSrc: string;
  onClick?: () => void;
}> = ({ text, iconSrc, onClick }) => (
  <MobileButtonWrapper onClick={onClick}>
    <MobileButtonText>{text}</MobileButtonText>
    <MobileButtonIcon loading="lazy" src={iconSrc} alt="" />
  </MobileButtonWrapper>
);

const MobileButtonWrapper = styled.button`
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  color: rgba(255, 255, 255, 1);
  justify-content: center;
  padding: 12px 16px;
  font: 400 16px Avenir, sans-serif;
  border: 2px solid rgba(141, 73, 228, 1);
  background: transparent;
  cursor: pointer;
  margin-top: 44px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(141, 73, 228, 0.1);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(141, 73, 228, 0.5);
  }
`;

const MobileButtonText = styled.span`
  align-self: stretch;
  margin: auto 0;
`;

const MobileButtonIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  align-self: stretch;
  margin: auto 0;
`;
