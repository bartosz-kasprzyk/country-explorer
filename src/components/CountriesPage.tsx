"use client";

import { MainPageContainer } from "./Containers";
import { CountryList } from "./CountryList";
import { CountryTile } from "./CountryTile";
import useFavorites from "@/hooks/useFavorites";
import { Title } from "./Text";

interface CountryProps {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string;
  region: string;
}

interface CountriesPageProps {
  initialCountries: CountryProps[];
}

export default function CountriesPage({
  initialCountries,
}: CountriesPageProps) {
  const { favorites, toggleFavorite } = useFavorites();

  const filteredCountries = initialCountries.filter((country) =>
    country.name.common.toLowerCase()
  );

  return (
    <MainPageContainer>
      <Title>Country Explorer</Title>
      <CountryList>
        {filteredCountries.map((country) => (
          <CountryTile
            key={country.cca3}
            country={country}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </CountryList>
    </MainPageContainer>
  );
}
