"use client";

import { CountryDetails } from "@/types/country";
import { Card, FlagImage } from "./styled";

interface CountryDetailsTileProps {
  country: CountryDetails;
}

export function CountryDetailsTile({ country }: CountryDetailsTileProps) {
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
      <p>Borders: {country.borders?.join(", ") || "None"}</p>
    </Card>
  );
}
