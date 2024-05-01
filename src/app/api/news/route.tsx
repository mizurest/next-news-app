export async function GET(req: any) {
  const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=ja&country=ja&max=10&apikey=${process.env.API_KEY}`;
  const res = await fetch(url,{ next: { revalidate: 300 } });
  console.log(res)
  const news = await res.json();
  return Response.json({ news });
}

