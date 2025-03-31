"use server";
import ResultContents from "@/components/ResultContents";
import { Icon } from "@/interfaces/Icon";

export default async function Result({
  params,
}: {
  params: { query: string };
}) {
  const { query } = params;
  const rawData = await fetch(
    `https://api.iconfinder.com/v4/icons/search?query=${query}&count=30`,
    {
      headers: {
        Authorization: `Bearer ${process.env.ICONFINDER_API_KEY}`,
      },
    }
  );
  const { icons }: { icons: Icon[] } = await rawData.json();
  return <ResultContents icons={icons} />;
}
