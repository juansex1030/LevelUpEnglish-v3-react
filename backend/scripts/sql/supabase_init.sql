-- LevelUpEnglish - Supabase PostgreSQL init script
-- Safe to run multiple times.

BEGIN;

-- Keep everything in public schema (Supabase default)
SET search_path TO public;

CREATE TABLE IF NOT EXISTS public.users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    avatar TEXT DEFAULT 'default',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS public.topics (
    id SERIAL PRIMARY KEY,
    number INTEGER NOT NULL,
    level TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    theory TEXT,
    practice TEXT,
    UNIQUE(level, number)
);

CREATE TABLE IF NOT EXISTS public.progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    topic_id INTEGER NOT NULL REFERENCES public.topics(id) ON DELETE CASCADE,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, topic_id)
);

-- Optional indexes for faster lookups in dashboard/admin endpoints.
CREATE INDEX IF NOT EXISTS idx_topics_level_number ON public.topics(level, number);
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON public.progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_topic_id ON public.progress(topic_id);

-- Supabase security: enable RLS on all public tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;

-- Idempotent policy reset
DROP POLICY IF EXISTS users_service_role_all ON public.users;
DROP POLICY IF EXISTS progress_service_role_all ON public.progress;
DROP POLICY IF EXISTS topics_public_read ON public.topics;
DROP POLICY IF EXISTS topics_service_role_all ON public.topics;

-- Backend-only access for sensitive tables
-- service_role is used by trusted server-side integrations.
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

-- Topics can be public read-only if needed.
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

