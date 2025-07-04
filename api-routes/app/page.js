"use client"
export default function Home() {
  const handleClick = async () => {
    const data = { name: "Hanzla", age: 20 }
    const res = await fetch('/api', { method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify(data) })
    let resJson = await res.json()
    console.log(resJson);

  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}
