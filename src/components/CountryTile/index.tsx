"use client";

import { Country } from "@/types/country";
import {
  Tile,
  TileLink,
  Flag,
  Info,
  Name,
  Region,
  FavoriteButton,
} from "./styled";

interface CountryTileProps {
  country: Country;
  favorites: string[];
  toggleFavorite: (code: string) => void;
}

export function CountryTile({
  country,
  favorites,
  toggleFavorite,
}: CountryTileProps) {
  const isFavorited = favorites.includes(country.cca3);

  return (
    <Tile>
      <TileLink href={`/countries/${country.name.common}`}>
        <Flag
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          width={60}
          height={40}
        />
        <Info>
          <Name>{country.name.common}</Name>
          <Region>{country.region}</Region>
        </Info>
      </TileLink>
      <FavoriteButton
        onClick={() => toggleFavorite(country.cca3)}
        aria-label="Toggle favorite"
      >
        {isFavorited ? "❤️" : "🤍"}
      </FavoriteButton>
    </Tile>
  );
}
