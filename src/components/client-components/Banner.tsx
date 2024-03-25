export default function Banner( { content = "" } ) {
  return (
    <section className="relative bg-[url('https://i.imgur.com/Sz4IxU0.png')] py-40 bg-no-repeat bg-cover overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      <div className="max-w-[1140px] h-full mx-auto px-4 flex items-center justify-center">
        <h2 className="text-white text-7xl font-extrabold p-0 m-0 z-20">
          {content}
        </h2>
      </div>
    </section>
  );
}
