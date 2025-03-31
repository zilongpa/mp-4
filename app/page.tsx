"use client";
import Link from "next/link";
import { useState } from "react";
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

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <StyledDiv>
      <h2>Icon Search</h2>
      <p>Type in keywords to find relevant icons</p>
      <label>
        Query: &nbsp;
        <input
          type="text"
          placeholder="e.g. WIFI, Tiktok, Python"
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <StyledLink href={`/${query}`}>Get Icon</StyledLink>
    </StyledDiv>
  );
}
