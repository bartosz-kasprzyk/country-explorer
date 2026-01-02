import CountriesPage from "@/components/CountriesPage";

export default async function Home() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,cca3"
  );
  const countries = await response.json();

  return <CountriesPage initialCountries={countries} />;
}
