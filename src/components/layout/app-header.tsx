// components/app-header.tsx
import React from 'react';
import { Button } from '@/components/ui/button'; // Example using Shadcn Button

export function AppHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-8">
      <section>
        {/* Your branding/logo */}
        <h1 className="text-xl font-bold">My App</h1>
      </section>
      <section>
        {/* Example navigation or user actions */}
        <Button variant="ghost">Settings</Button>
      </section>
    </header>
  );
}