import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Tile = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px solid #2c2f35;
  border-radius: 10px;
  margin-bottom: 12px;
  background-color: #2c2f35;
  transition: border 0.2s ease-in-out, background-color 0.2s ease-in-out,
    filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const TileLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex: 1;
`;

export const Flag = styled(Image)`
  object-fit: cover;
  margin-right: 16px;
  width: 60px;
  height: 40px;
  border-radius: 4px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 17.6px;
  color: #eee;
  transition: color 0.2s ease-in-out;
  margin: 0;
`;

export const Region = styled.p`
  font-size: 14.4px;
  color: #ccc;
  transition: color 0.2s ease-in-out;
  margin: 0;
`;

export const FavoriteButton = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
