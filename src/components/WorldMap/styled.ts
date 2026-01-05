import styled from "styled-components";

interface SvgMapProps {
  $regionFilter: string;
}

export const SvgMap = styled.svg<SvgMapProps>`
  width: 100%;
  height: auto;

  g[id] path {
    transition: fill 0.4s, filter 0.4s;
    cursor: pointer;
  }

  /*default or selected*/
  g#Asia path {
    fill: ${({ $regionFilter }) =>
      $regionFilter === "Asia" ? "#db591dcc" : "#db591d33"};
  }
  g#Europe path {
    fill: ${({ $regionFilter }) =>
      $regionFilter === "Europe" ? "#bb0000cc" : "#bb000033"};
  }
  g#Africa path {
    fill: ${({ $regionFilter }) =>
      $regionFilter === "Africa" ? "#ff9800cc" : "#ff980033"};
  }
  g#Americas path {
    fill: ${({ $regionFilter }) =>
      $regionFilter === "Americas" ? "#4caf50cc" : "#4caf5033"};
  }
  g#Oceania path {
    fill: ${({ $regionFilter }) =>
      $regionFilter === "Oceania" ? "#944aa1cc" : "#944aa133"};
  }
  g#Antarctic path {
    fill: ${({ $regionFilter }) =>
      $regionFilter === "Antarctic" ? "#1949cecc" : "#1949ce33"};
  }

  /*hover if not selected*/
  g#Asia:hover path {
    fill: ${({ $regionFilter }) =>
      $regionFilter === "Asia" ? "#db591dcc" : "#db591d80"};
  }

  g#Europe:hover path {
    fill: ${({ $regionFilter }) =>
      $regionFilter === "Europe" ? "#bb0000cc" : "#bb000080"};
  }

  g#Africa:hover path {
    fill: ${({ $regionFilter }) =>
      $regionFilter === "Africa" ? "#ff9800cc" : "#ff980080"};
  }

  g#Americas:hover path {
    fill: ${({ $regionFilter }) =>
      $regionFilter === "Americas" ? "#4caf50cc" : "#4caf5080"};
  }

  g#Oceania:hover path {
    fill: ${({ $regionFilter }) =>
      $regionFilter === "Oceania" ? "#944aa1cc" : "#944aa180"};
  }

  g#Antarctic:hover path {
    fill: ${({ $regionFilter }) =>
      $regionFilter === "Antarctic" ? "#1949cecc" : "#1949ce80"};
  }
`;
