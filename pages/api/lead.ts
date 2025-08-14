import type { NextApiRequest, NextApiResponse } from 'next';
import { forwardToSupabase } from '@/lib/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const data = await forwardToSupabase({
      ...req.body,
      consentimiento: {
        aceptado: true,
        version: req.body?.version_politica || 'v1.0',
        fecha_iso: new Date().toISOString(),
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || null
      }
    });
    res.status(200).json({ ok: true, data });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Unknown error' });
  }
}
