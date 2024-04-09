export default async function KakaoCallbackPage({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  console.log(searchParams.code);
}
