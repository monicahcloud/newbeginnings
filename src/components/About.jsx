import Title from "./Title"
import aboutImg from '../../public/logo2.svg'
const About = () => {
  return (
    <div className="pt-20 pb-5 lg:mb-24 align-element "id="about">
      <Title text="About" />
      <section className=" " >
        <div className="grid md:grid-cols-2 items-center gap-2 lg:gap-4 xl:gap-8">
          <div className="relative">
            {/* <div className="border-8 border-amber-500 absolute -top-6 -left-6 w-80 h-full"></div> */}
            <article className=" md:block">
              <img src={aboutImg} className="w-full h-full lg:h-full" />
            </article>
          </div>
          <article>
            <h1 className=" text-5xl font-bold tracking-wider text-white">
              Vision
            </h1>
            <p className="mt-4 text-3xl text-white capitalize tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              error dignissimos, nam molestiae sed labore quo tot
            </p>
            <h1 className=" text-5xl font-bold tracking-wider mt-8 text-white">
              Mission
            </h1>
            <p className="mt-4 text-3xl text-white capitalize tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              error dignissimos, nam molestiae sed labore quo tot
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default About
