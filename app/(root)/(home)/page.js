import HomeCards from "@/components/HomeCards";

function Home() {
  const pres = new Date();
  const t = pres.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const d = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    pres
  );
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-gradient-to-tr from-gray-800 to-slate-700">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              The admin dashboard home
            </h1>
          </div>
        </div>
      </div>
      <HomeCards />
    </section>
  );
}

export default Home;
