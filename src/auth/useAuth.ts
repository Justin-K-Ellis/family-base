import { useContext } from "react";
import type AuthContextValue from "../types/AuthContextValue";
import AuthContext from "./AuthContext";

export default function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
