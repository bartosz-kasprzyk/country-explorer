"use client";

import { CountryDetails } from "@/types/country";
import { BorderLink, Card, FlagImage } from "./styled";
import { useCountryMap } from "@/hooks/useCountryMap";
import Link from "next/link";

interface CountryDetailsTileProps {
  country: CountryDetails;
}

export function CountryDetailsTile({ country }: CountryDetailsTileProps) {
  const { countryMap, loading } = useCountryMap();

  if (loading) return <p>Loading…</p>;

  return (
    <Card>
      <h1>{country.name.common}</h1>
      <FlagImage
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        width={200}
        height={120}
      />
      <p>Capital: {country.capital?.[0] || "N/A"}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>
        Languages:{" "}
        {country.languages
          ? Object.values(country.languages).join(", ")
          : "N/A"}
      </p>
      <p>
        Currencies:{" "}
        {country.currencies
          ? Object.values(country.currencies)
              .map((currency) => currency.name)
              .join(", ")
          : "N/A"}
      </p>
      <p>
        Borders:{" "}
        {country.borders && country.borders.length > 0
          ? country.borders
              .map((code) => {
                const name = countryMap?.[code];
                if (!name) return null;
                return (
                  <BorderLink key={code} href={`/countries/${name}`}>
                    {name}
                  </BorderLink>
                );
              })
              .filter(Boolean)
              .reduce<React.ReactNode[]>((acc, curr, index) => {
                if (index > 0) acc.push(", ");
                acc.push(curr as React.ReactNode);
                return acc;
              }, [])
          : "None"}
      </p>
    </Card>
  );
}
