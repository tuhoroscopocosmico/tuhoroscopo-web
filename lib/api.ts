export async function forwardToSupabase(payload: any) {
  const base = process.env.SUPABASE_EDGE_URL;
  const token = process.env.INTERNAL_TOKEN;
  if (!base) throw new Error('Missing SUPABASE_EDGE_URL');
  const res = await fetch(`${base}/ef_alta_suscriptor`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : ''
    },
    body: JSON.stringify(payload)
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || 'Edge function error');
  return data;
}
