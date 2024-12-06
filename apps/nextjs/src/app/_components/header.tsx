"use client";

import { Button } from "@acme/ui/button";

import { signOutAction } from "./signOutAction";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-lg font-bold">YouTube サムネイル</h1>
        <form>
          <Button
            size="lg"
            formAction={signOutAction} // Server Action を呼び出す
          >
            ログアウト
          </Button>
        </form>
      </div>
    </header>
  );
}
