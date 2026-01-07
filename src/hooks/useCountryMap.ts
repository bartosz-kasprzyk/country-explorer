import { useState, useEffect } from "react";

export interface CountryCodeMap {
  [cca3: string]: string;
}

let countryMapCache: CountryCodeMap | null = null;

export function useCountryMap() {
  const [countryMap, setCountryMap] = useState<CountryCodeMap | null>(
    countryMapCache
  );
  const [loading, setLoading] = useState(!countryMapCache);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (countryMapCache) return;

    async function fetchMap() {
      setLoading(true);
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=cca3,name"
        );
        const data: { cca3: string; name: { common: string } }[] =
          await res.json();

        const map = Object.fromEntries(
          data.map((c) => [c.cca3, c.name.common])
        );

        countryMapCache = map;
        setCountryMap(map);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchMap();
  }, []);

  return { countryMap, loading, error };
}
