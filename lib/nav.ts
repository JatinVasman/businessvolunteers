"use client";
import { useRouter } from "next/navigation";
import { PATHS } from "./data";

// Translates the app's internal page keys (go("services")) into real route
// pushes, so existing components keep working unchanged.
export function useGo() {
  const router = useRouter();
  return (key: string) => {
    router.push((PATHS as Record<string, string>)[key] || "/");
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
