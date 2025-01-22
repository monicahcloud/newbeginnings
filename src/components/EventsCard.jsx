import { events } from '../data'
import { useState } from 'react'

const EventsCard = () => {
  const [showAll, setShowAll] = useState(false)
  const toggleShowAll = () => {
    setShowAll(!showAll)
  }
  return (
    <>
      <div className="py-10 grid lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {events.map((event) => {
          return (
            <article
              key={event.id}
              className="rounded-lg shadow-md hover:shadow-xl duration-300"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full object-fit rounded-t-lg h-1/2"
              />
              <div className="capitalize p-4">
                <h2 className="text-3xl text-white tracking-wide text-center font-medium">
                  {event.title}
                </h2>
                <div className="text-center text-white font-semibold">
                  <h4 className="mt-4 text-xl ">{event.location} </h4>
                  <h4 className=" text-xl ">{event.date}</h4>
                </div>
              </div>
            </article>
          )
        })}
        {events.length > 2 && (
          <button
            onClick={toggleShowAll}
            className="mt-6 mb-6 bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        )}
      </div>
    </>
  )
}

export default EventsCard
