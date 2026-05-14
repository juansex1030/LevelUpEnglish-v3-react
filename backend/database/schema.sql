-- LevelUpEnglish - COMPLETE PostgreSQL Schema
-- Consolidated and Optimized for Supabase/PostgreSQL 15+
-- Safe to run multiple times (Idempotent).

BEGIN;

-- 1. EXTENSIONS & SCHEMAS
SET search_path TO public;

-- 2. TABLES

-- USERS TABLE
CREATE TABLE IF NOT EXISTS public.users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT, -- Might be NULL for Google users
    is_admin BOOLEAN DEFAULT FALSE,
    is_premium BOOLEAN DEFAULT FALSE,
    premium_until TIMESTAMP DEFAULT NULL,
    avatar TEXT DEFAULT 'default',
    reset_otp VARCHAR(10) DEFAULT NULL,
    reset_otp_expires_at TIMESTAMP DEFAULT NULL,
    google_id VARCHAR(255) UNIQUE DEFAULT NULL,
    otp_attempts INTEGER DEFAULT 0,
    last_login_at TIMESTAMP DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TOPICS TABLE
CREATE TABLE IF NOT EXISTS public.topics (
    id SERIAL PRIMARY KEY,
    number INTEGER NOT NULL,
    level TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    theory TEXT,
    practice TEXT,
    premium_practice JSONB DEFAULT NULL,
    practice_zone_enabled BOOLEAN DEFAULT TRUE,
    UNIQUE(level, number)
);

-- PROGRESS TABLE
CREATE TABLE IF NOT EXISTS public.progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    topic_id INTEGER NOT NULL REFERENCES public.topics(id) ON DELETE CASCADE,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, topic_id)
);

-- AUDIT LOGS TABLE
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id SERIAL PRIMARY KEY,
    admin_id INTEGER REFERENCES public.users(id) ON DELETE SET NULL,
    action TEXT NOT NULL,
    target_type TEXT NOT NULL,
    target_id TEXT,
    details JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SUPPORT MESSAGES TABLE
CREATE TABLE IF NOT EXISTS public.support_messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES public.users(id) ON DELETE SET NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'unread',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. INDEXES
CREATE INDEX IF NOT EXISTS idx_topics_level_number ON public.topics(level, number);
CREATE INDEX IF NOT EXISTS idx_progress_user_id ON public.progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_topic_id ON public.progress(topic_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON public.users(email);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created ON public.audit_logs(created_at DESC);

-- 4. SECURITY (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.support_messages ENABLE ROW LEVEL SECURITY;

-- 5. POLICIES (Idempotent Reset)

-- Users Policies
DROP POLICY IF EXISTS users_service_role_all ON public.users;
CREATE POLICY users_service_role_all ON public.users FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Topics Policies
DROP POLICY IF EXISTS topics_public_read ON public.topics;
CREATE POLICY topics_public_read ON public.topics FOR SELECT TO anon, authenticated USING (true);
DROP POLICY IF EXISTS topics_service_role_all ON public.topics;
CREATE POLICY topics_service_role_all ON public.topics FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Progress Policies
DROP POLICY IF EXISTS progress_service_role_all ON public.progress;
CREATE POLICY progress_service_role_all ON public.progress FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Audit Logs Policies
DROP POLICY IF EXISTS audit_logs_service_role_all ON public.audit_logs;
CREATE POLICY audit_logs_service_role_all ON public.audit_logs FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Support Messages Policies
DROP POLICY IF EXISTS support_messages_service_role_all ON public.support_messages;
CREATE POLICY support_messages_service_role_all ON public.support_messages FOR ALL TO service_role USING (true) WITH CHECK (true);

COMMIT;
