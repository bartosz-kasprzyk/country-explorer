import { DetailPageContainer } from "@/components/Containers";
import { CountryDetailsTile } from "@/components/CountryDetailsTile";
import { FullWidthButton } from "@/components/Buttons";
import { CountryDetails } from "@/types/country";

export default async function Random() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,languages,currencies,borders",
    {
      cache: "no-store",
    }
  );
  const countries: CountryDetails[] = await response.json();
  const random = countries[Math.floor(Math.random() * countries.length)];

  return (
    <DetailPageContainer>
      <CountryDetailsTile country={random} />
      <FullWidthButton href="/random">🎲 Show Another Country</FullWidthButton>
      <FullWidthButton href="/">← Back to Homepage</FullWidthButton>
    </DetailPageContainer>
  );
}
