const { query } = require('./db');

async function migrate() {
    console.log("Starting Admin Panel V2 migrations...");
    try {
        // 1. Add last_login_at to users
        await query(`
            ALTER TABLE public.users 
            ADD COLUMN IF NOT EXISTS last_login_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
        `);
        console.log("-> Added last_login_at to users.");

        // 2. Create audit_logs table
        await query(`
            CREATE TABLE IF NOT EXISTS public.audit_logs (
                id SERIAL PRIMARY KEY,
                admin_id INTEGER NOT NULL REFERENCES public.users(id) ON DELETE SET NULL,
                action TEXT NOT NULL,
                target_type TEXT NOT NULL,
                target_id INTEGER,
                details TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("-> Created audit_logs table (if not exists).");

        // 3. Add Index
        await query(`
            CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON public.audit_logs(created_at DESC);
        `);
        console.log("-> Added index on audit_logs.");

        console.log("Migration complete!");
        process.exit(0);
    } catch (err) {
        console.error("Migration failed:", err);
        process.exit(1);
    }
}

migrate();
