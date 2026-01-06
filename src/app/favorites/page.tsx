"use client";

import { useEffect, useState } from "react";
import useFavorites from "@/hooks/useFavorites";
import { CountryTile } from "@/components/CountryTile";
import { LargeButton } from "@/components/Buttons";
import { CenteredContainer, MainPageContainer } from "@/components/Containers";
import { Message, Title } from "@/components/Text";
import { CountryList } from "@/components/CountryList";
import { Country } from "@/types/country";

export default function Favorites() {
  const [countries, setCountries] = useState<Country[]>([]);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (favorites.length === 0) {
      setCountries([]);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,region,cca3"
        );
        const allCountries: Country[] = await response.json();
        const filtered = allCountries.filter((country) =>
          favorites.includes(country.cca3)
        );
        setCountries(filtered);
      } catch (error) {
        console.error(error);
        setCountries([]);
      }
    };

    fetchData();
  }, [favorites]);

  return (
    <MainPageContainer>
      <Title>Favorites</Title>

      {countries.length === 0 ? (
        <Message>No favorites yet. Go like some countries!</Message>
      ) : (
        <CountryList>
          {countries.map((country) => (
            <CountryTile
              key={country.cca3}
              country={country}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </CountryList>
      )}

      <CenteredContainer>
        <LargeButton href="/">← Back to Homepage</LargeButton>
      </CenteredContainer>
    </MainPageContainer>
  );
}
