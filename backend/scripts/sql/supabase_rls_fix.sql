-- LevelUpEnglish - Supabase RLS hotfix
-- Run this if tables were already created without RLS.

BEGIN;

SET search_path TO public;

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS users_service_role_all ON public.users;
DROP POLICY IF EXISTS progress_service_role_all ON public.progress;
DROP POLICY IF EXISTS topics_public_read ON public.topics;
DROP POLICY IF EXISTS topics_service_role_all ON public.topics;

CREATE POLICY users_service_role_all
ON public.users
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY progress_service_role_all
ON public.progress
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

CREATE POLICY topics_public_read
ON public.topics
FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY topics_service_role_all
ON public.topics
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

COMMIT;
