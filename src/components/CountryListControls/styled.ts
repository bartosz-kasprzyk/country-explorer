import styled from "styled-components";
import Link from "next/link";

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const ControlsGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #2c2f35;
  background-color: #2c2f35;
  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out;
`;

export const DropdownSelect = styled.select`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #2c2f35;
  border-right: 7px solid #2c2f35;
  background-color: #2c2f35;
  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out;
`;

export const StyledButton = styled(Link)`
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s ease;

  &:hover {
    background-color: #005bb5;
  }
`;
