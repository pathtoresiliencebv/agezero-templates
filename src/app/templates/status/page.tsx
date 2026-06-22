import * as React from "react";
import { StatusPageTemplate } from "@/components/templates/status";

export const metadata = {
  title: "Status Template · AgeZero UI",
  description:
    "Public status page: components + incident timeline. Drop in your services and any active incidents.",
};

const COMPONENTS = [
  { id: "api", name: "API", description: "REST + GraphQL endpoints", status: "operational" as const },
  { id: "web", name: "Web app", description: "App.agezero-ui.dev", status: "operational" as const },
  { id: "auth", name: "Auth service", description: "Login + SSO", status: "operational" as const },
  { id: "db", name: "Database", description: "Primary + replicas", status: "degraded" as const },
  { id: "cdn", name: "CDN", description: "Static asset delivery", status: "operational" as const },
  { id: "ai", name: "AI inference", description: "Streaming chat completions", status: "maintenance" as const },
];

const INCIDENTS = [
  {
    id: "i1",
    title: "Elevated latency on database reads",
    status: "monitoring" as const,
    severity: "minor" as const,
    startedAt: "2026-06-22 14:12 UTC",
    updates: [
      { time: "14:12 UTC", message: "We are investigating reports of slow read queries on the primary DB." },
      { time: "14:38 UTC", message: "Identified a slow query plan. Tuning the index now." },
      { time: "15:04 UTC", message: "Latency has returned to normal levels. Monitoring." },
    ],
  },
];

export default function StatusTemplatePage() {
  return (
    <StatusPageTemplate components={COMPONENTS} incidents={INCIDENTS} />
  );
}