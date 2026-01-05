import { CountryDetails } from "@/types/country";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get("region");

  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3"
    );
    const countries = await response.json();
    const filtered = countries.filter(
      (country: CountryDetails) => country.region === region
    );
    return new Response(JSON.stringify(filtered), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch countries" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
