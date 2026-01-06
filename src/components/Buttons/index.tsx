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

export const LargeButton = styled(Link)`
  display: inline-block;
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s ease;

  &:hover {
    background-color: #005bb5;
  }
`;
