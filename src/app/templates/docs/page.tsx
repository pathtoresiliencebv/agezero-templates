import * as React from "react";
import {
  DocsPageTemplate,
  type DocsTocItem,
} from "@/components/templates/docs";

export const metadata = {
  title: "Docs Template · AgeZero UI",
  description:
    "3-column docs page template: sidebar nav, content, table of contents. Drop your content into the slot.",
};

const NAV = [
  { title: "Introduction", href: "#intro" },
  { title: "Installation", href: "#install" },
  { title: "Quick start", href: "#quick" },
  { title: "Configuration", href: "#config" },
  { title: "Deployment", href: "#deploy" },
  { title: "FAQ", href: "#faq" },
];

const TOC: DocsTocItem[] = [
  { id: "intro", title: "Introduction" },
  { id: "install", title: "Installation" },
  { id: "quick", title: "Quick start" },
  { id: "config", title: "Configuration" },
  { id: "deploy", title: "Deployment" },
];

export default function DocsTemplatePage() {
  return (
    <DocsPageTemplate
      nav={NAV}
      toc={TOC}
      title="Docs template"
      description="A clean 3-column docs layout. Use it as a starting point for your own documentation site."
    >
      <section id="intro" className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Introduction</h2>
        <p>
          Welcome to the docs template. This page is rendered by{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            DocsPageTemplate
          </code>{" "}
          — a 3-column layout with navigation, content, and table of
          contents.
        </p>
        <p>
          Replace this body with your own MDX or React Server Components.
          The template handles the surrounding shell.
        </p>
      </section>

      <section id="install" className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <p>Add the template to your project:</p>
        <pre className="overflow-x-auto rounded-md border border-border bg-muted/40 p-3 text-sm">
          <code>pnpm dlx agezero-ui add docs-template</code>
        </pre>
      </section>

      <section id="quick" className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Quick start</h2>
        <p>
          Drop the component into a page, pass your nav items and table of
          contents, and you&apos;re done.
        </p>
      </section>

      <section id="config" className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Configuration</h2>
        <p>
          Customize the look by passing <code>className</code> or wrapping
          it in a parent container with your brand styles.
        </p>
      </section>

      <section id="deploy" className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight">Deployment</h2>
        <p>
          Build and deploy on any platform. The template ships zero
          runtime dependencies — it&apos;s pure React + Tailwind.
        </p>
      </section>
    </DocsPageTemplate>
  );
}