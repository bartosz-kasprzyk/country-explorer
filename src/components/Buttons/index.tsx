"use client";

import Link from "next/link";
import styled from "styled-components";

export const FullWidthButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 20px;
  background-color: #0070f3;
  color: white;
  text-align: center;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #005bb5;
  }
`;
