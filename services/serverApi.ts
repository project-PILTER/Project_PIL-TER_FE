import "server-only"
import { cookies } from "next/headers";
import { api } from "./axios";

export async function serverApiGet(url: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  const res = await api.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Cookie: `accessToken=${token}`,
      'Cache-Control': 'no-cache, no-store',
    },
  });

  return res.data;
}