"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d4c9be;
  padding: 0.05em 1em;
  border-radius: 1em;
  color: #123458;
  margin-bottom: 0.5em;
`;

const StyledLink = styled(Link)`
  color: #123458;
  text-decoration: none;
  font-weight: bold;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>CS391 Icon Finder</h1>
      {useParams().query && <StyledLink href="/">Home</StyledLink>}
    </StyledHeader>
  );
}
