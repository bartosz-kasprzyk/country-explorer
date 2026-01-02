import Image from "next/image";
import styled from "styled-components";

export const Card = styled.div`
  background-color: #2c2f35;
  padding: 30px;
  border: 1px solid #2c2f35;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;
`;

export const FlagImage = styled(Image)`
  margin: 10px auto;
  width: 200px;
  height: 120px;
  object-fit: contain;
  display: block;
`;
