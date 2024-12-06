"use client";

import { Button } from "@acme/ui/button";
import { signOutAction } from "./signOutAction";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
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
