import { DetailPageContainer } from "@/components/Containers";
import { CountryDetailsTile } from "@/components/CountryDetailsTile";
import { FullWidthButton } from "@/components/Buttons";
import { notFound } from "next/navigation";

interface CountryDetailProps {
  params: { name: string };
}

export async function generateStaticParams(): Promise<{ name: string }[]> {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name"
  );
  const countries: { name: { common: string } }[] = await response.json();
  console.log(countries.map((c) => c.name.common));

  return countries.map((country) => ({
    name: country.name.common,
  }));
}

export default async function CountryDetail({ params }: CountryDetailProps) {
  const { name } = await params;

  const response = await fetch(
    `https://restcountries.com/v3.1/name/${encodeURIComponent(
      name
    )}?fullText=true`
  );
  const data = await response.json();
  const country = data[0];

  if (!data || data.status === 404) {
    notFound();
  }

  return (
    <DetailPageContainer>
      <CountryDetailsTile country={country} />
      <FullWidthButton href="/">← Back to Homepage</FullWidthButton>
    </DetailPageContainer>
  );
}
