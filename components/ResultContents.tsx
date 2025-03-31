"use client";
import { Icon } from "@/interfaces/Icon";
import Link from "next/link";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 30em;
  margin: 20vh auto;
  background-color: #f1efec;
  padding: 0.25em 0;
  text-align: center;
  border-radius: 1em;
  // display: flex;
  color: #123458;
`;

const StyledLink = styled(Link)`
  background-color: #123458;
  color: #f1efec;
  text-decoration: none;
  display: block;
  max-width: 10em;
  margin: 2vh auto;
  padding: 0.25em 0;
  text-align: center;
  border-radius: 0.5em;
  &:hover {
    background-color:#0b1d31;
  }rgb(14, 39, 66)
`;

const Icons = styled.div`
  background-color: #f1efec;
  padding: 2em;
  text-align: center;
  border-radius: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  color: #123458;
`;

const StyledImg = styled.img`
  width: 10em;
`;

const IconDiv = styled.div`
  background-color: #f1efec;
  text-align: center;
  color: #123458;
  padding: 1em 1em;
`;

export default function ResultContents({
  icons,
}: {
  icons: Icon[] | undefined;
}) {
  if (!icons) {
    return (
      <StyledDiv>
        <h2>API Rate Limit Reached</h2>
        <p>Please wait an hour and try again.</p>
        <StyledLink href="/">Return to Home</StyledLink>
      </StyledDiv>
    );
  }

  if (icons.length === 0) {
    return (
      <StyledDiv>
        <h2>No results found</h2>
        <p>Please try different keywords.</p>
        <StyledLink href="/">Return to Home</StyledLink>
      </StyledDiv>
    );
  }

  return (
    <Icons>
      {icons.map((icon, index) => (
        <IconDiv key={index}>
          <StyledImg
            src={icon.raster_sizes.slice(-1)[0].formats[0].preview_url}
            alt={
              icon.raster_sizes
                .slice(-1)[0]
                .formats[0].preview_url.split("/")
                .slice(-1)[0]
            }
          />
          <h4>
            <a href={icon.raster_sizes.slice(-1)[0].formats[0].preview_url}>
                {icon.raster_sizes
                .slice(-1)[0]
                .formats[0].preview_url.split("/").slice(-1)[0].length > 25
                ? icon.raster_sizes
                  .slice(-1)[0]
                  .formats[0].preview_url.split("/").slice(-1)[0].substring(0, 25) + "..."
                : icon.raster_sizes
                  .slice(-1)[0]
                  .formats[0].preview_url.split("/").slice(-1)[0]}
            </a>
          </h4>
        </IconDiv>
      ))}
    </Icons>
  );
}
