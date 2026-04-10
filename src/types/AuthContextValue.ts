import type { Session, User } from "@supabase/supabase-js";

export default interface AuthContextValue {
  session: Session | null;
  user: User | null;
  loading: boolean;
}
