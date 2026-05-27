
-- Public buckets allow direct URL access without needing a SELECT policy.
DROP POLICY IF EXISTS "Public can read materials files" ON storage.objects;

-- Lock down has_role: only the SQL executor (RLS context) needs it.
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO service_role;
