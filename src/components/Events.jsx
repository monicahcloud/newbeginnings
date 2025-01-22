import EventCard from './EventsCard'
import Title from './Title'


const Events = () => {
  return (
    <section className="pt-36 align-element " id="events">
      <Title text="Events" />
      <div className="">
        <EventCard/>
      </div>
    </section>
  )
}

export default Events
