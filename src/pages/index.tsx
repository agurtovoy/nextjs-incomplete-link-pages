import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-96`}
    >
      <Link href="http:" className="hover:underline">
        Incomplete link
      </Link>
    </main>
  );
}
