"use client";

import { MainPageContainer } from "./Containers";
import { CountryList } from "./CountryList";
import { CountryTile } from "./CountryTile";
import useFavorites from "@/hooks/useFavorites";
import { Title } from "./Text";
import { useEffect, useState } from "react";
import { CountryListControls } from "./CountryListControls";
import { WorldMap } from "./WorldMap";

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
  const [countries, setCountries] = useState(initialCountries);
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (!regionFilter) {
      setCountries(initialCountries);
      return;
    }

    async function fetchByRegion() {
      try {
        const response = await fetch(`/api/region?region=${regionFilter}`);
        if (!response.ok) throw new Error("Failed to fetch region");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
        setCountries([]);
      }
    }

    fetchByRegion();
  }, [regionFilter, initialCountries]);

  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.common.localeCompare(b.name.common));

  const regionList: string[] = [];
  for (const country of initialCountries) {
    const region = country.region;
    if (region && !regionList.includes(region)) {
      regionList.push(region);
    }
  }

  return (
    <MainPageContainer>
      <Title>Country Explorer</Title>

      <div style={{ maxWidth: "700px", margin: "-20px auto 20px" }}>
        <WorldMap
          regionFilter={regionFilter}
          setRegionFilter={setRegionFilter}
        />
      </div>

      <CountryListControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        regionFilter={regionFilter}
        setRegionFilter={setRegionFilter}
        regionList={regionList}
      />

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
