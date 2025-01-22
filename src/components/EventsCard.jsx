import { events } from '../data'
import { useState } from 'react'

const EventsCard = () => {
  const [showAll, setShowAll] = useState(false)
  const toggleShowAll = () => {
    setShowAll(!showAll)
  }
  return (
    <>
    <div className="flex flex-col items-center">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => {
          return (
            <article
              key={event.id}
              className=" shadow-md rounded-lg p-4 items-start hover:shadow-lg transition-shadow"
            >
              <img
                src={event.img}
                alt={event.title}
                className="rounded-md w-full mb-4"
              />
              
                <h2 className="text-lg  text-slate-100 font-semibold mb-2">{event.title}</h2>
                {/* <div className="text-center text-white font-semibold">
                  <h4 className="mt-4 text-xl ">{event.location} </h4>
                  <h4 className=" text-xl ">{event.date}</h4>
                </div> */}
            
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
      </div>
    </>
  )
}

export default EventsCard
