import Link from "next/link";

export default function Home() {

  return (
    <main>
      <img src="/bird_logo.jpg" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><a href="/about">About us 1</a></p>
      <p><Link href="/about">About us 2</Link></p>
    </main>
  );
}
