import { redirect } from "next/navigation"; // リダイレクトを実現する

import { auth, signIn } from "@acme/auth";
import { Button } from "@acme/ui/button";

import { HydrateClient } from "~/trpc/server";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    // すでにログインしている場合は /protected にリダイレクト
    redirect("/main");
  }

  // ログインフォーム
  return (
    <HydrateClient>
      <main className="flex h-screen items-center justify-center bg-gray-100">
        <div className="rounded-md bg-white p-6 text-center shadow-md">
          <h1 className="mb-4 text-2xl font-bold">ログイン</h1>
          <form>
            <Button
              size="lg"
              formAction={async () => {
                "use server";
                await signIn("google");
              }}
            >
              Sign in with Google
            </Button>
          </form>
        </div>
      </main>
    </HydrateClient>
  );
}
