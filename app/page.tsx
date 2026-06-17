import { HomePageClient } from "@/components/HomePageClient";
import { getAllCases } from "@/lib/cases";

export default function HomePage() {
  const cases = getAllCases();

  return <HomePageClient cases={cases} />;
}
