const Hero = () => {
  return (
    <section
      id="home"
      className="sm:bg-contain md:bg-fixed bg-parallax bg-cover flex  h-full"
    >
      <div className="w-full h-screen flex justify-center text-center items-center">
        <div className=" mb-0">
          <h1 className="text-white text-5xl font-serif w-full uppercase font-bold md:text-8xl">
            New Beginnings Outreach WorldWide Mininstries
          </h1>
          <p className="mt-2  text-3xl md:text-3xl text-slate-100 font-semibold capitalize tracking-wide">
            Where Faith Restores, Hope Rebuilds, and Lives Begin Anew.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Hero
