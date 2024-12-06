//ログインしてるか分岐
import { redirect } from "next/navigation";

import { auth } from "@acme/auth";

export default async function LoginPage(props: { children: React.ReactNode }) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  return <>{props.children}</>;
}
