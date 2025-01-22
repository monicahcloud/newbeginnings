const Title = ({ text }) => {
  return (
    <>
      <div className="border-b border-base-300 pb-5 text-white">
        <h2 className="text-6xl font-medium tracking-wider capitalize">
          {text}
        </h2>
      </div>
    </>
  )
}

export default Title
