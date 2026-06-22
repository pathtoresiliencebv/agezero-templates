"use client";

import * as React from "react";
import { AuthTemplate } from "@/components/templates/auth";

export default function AuthTemplatePage() {
  return (
    <AuthTemplate
      title="Welcome back"
      description="Sign in to your account to continue."
      mode="sign-in"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    />
  );
}