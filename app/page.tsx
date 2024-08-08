import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <Header />
      <div className="min-h-screen">
        <h1 className="text-white text-center text-lg">hijibiji</h1>
      </div>
    </main>
  );
}
