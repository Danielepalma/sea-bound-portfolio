
-- 1. Add topic + topic_order to materials
ALTER TABLE public.materials
  ADD COLUMN IF NOT EXISTS topic TEXT,
  ADD COLUMN IF NOT EXISTS topic_order INT NOT NULL DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_materials_area_topic ON public.materials(area, topic, topic_order, sort_order);

-- 2. Lock down user_roles (privilege escalation fix)
-- Only existing admins can insert/update/delete additional roles.
-- The first-admin bootstrap still works via public.handle_first_user_admin (SECURITY DEFINER trigger).

CREATE POLICY "Admins can insert roles"
  ON public.user_roles
  FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can update roles"
  ON public.user_roles
  FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete roles"
  ON public.user_roles
  FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- Belt + suspenders: revoke direct write grants from authenticated.
REVOKE INSERT, UPDATE, DELETE ON public.user_roles FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.user_roles FROM anon;

-- 3. Lock down has_role EXECUTE: only the DB owner / service_role should call it directly.
-- RLS policies that reference has_role continue to work because policies are evaluated
-- with the privileges of the function owner, not the calling role.
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;
