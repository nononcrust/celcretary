import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

const SITE_URL = process.env.SITE_URL!;

export const siteConfig = {
  title: "경비서 - 인간관계까지 케어해주는 경조사 관리 서비스",
  description: "인간관계까지 케어해주는 경조사 관리 서비스",
  openGraph: {
    title: "유니버스 피아노",
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "경비서",
    description: "인간관계까지 케어해주는 경조사 관리 서비스",
  } as OpenGraph,
} as const;
