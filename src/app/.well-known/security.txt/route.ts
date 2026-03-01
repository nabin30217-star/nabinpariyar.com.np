export function GET() {
  const body = `Contact: mailto:nabin30217@gmail.com
Preferred-Languages: en
Canonical: https://nabinpariyar.com.np/.well-known/security.txt
Expires: 2027-03-01T00:00:00.000Z
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
