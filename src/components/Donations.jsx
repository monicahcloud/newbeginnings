import  { useState } from 'react'


const Donations = () => {
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState('')
  const [donationMethod, setDonationMethod] = useState('cashapp')

  const handleDonate = (e) => {
    e.preventDefault()
    if (amount && parseFloat(amount) > 0) {
      alert(
        `Thank you for your donation of $${amount} via ${donationMethod.toUpperCase()}!`
      )
      setAmount('')
      setMessage('')
    } else {
      alert('Please enter a valid donation amount.')
    }
  }

  return (
    <div id='donate' className="flex justify-center mt-20">
        <div className="">
            <h1></h1>
        </div>
      <div className=" bg-white shadow-md rounded-lg p-6 w-full max-w-lg m-9">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Support Our Mission
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Choose your preferred donation method. Every contribution helps!
        </p>
        <form onSubmit={handleDonate}>
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-gray-700 font-medium mb-2"
            >
              Donation Amount ($)
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message (Optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add a message for us"
              rows="3"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="donationMethod"
              className="block text-gray-700 font-medium mb-2"
            >
              Donation Method
            </label>
            <select
              id="donationMethod"
              value={donationMethod}
              onChange={(e) => setDonationMethod(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="cashapp">CashApp</option>
              <option value="zelle">Zelle</option>
              <option value="creditcard">Credit/Debit Card</option>
            </select>
          </div>
          {donationMethod === 'cashapp' && (
            <div className="mb-4 text-center text-gray-600">
              <p>
                Send your donation to our CashApp:{' '}
                <strong className="text-purple-500">$Nubegining8</strong>
              </p>
            </div>
          )}
          {donationMethod === 'zelle' && (
            <div className="mb-4 text-center text-gray-600">
              <p>
                Use Zelle to send your donation to:{' '}
                <strong className="text-blue-500">
                  yourzelleemail@example.com
                </strong>
              </p>
            </div>
          )}
          {donationMethod === 'creditcard' && (
            <div className="mb-4">
              <label
                htmlFor="cardDetails"
                className="block text-gray-700 font-medium mb-2"
              >
                Enter Card Details
              </label>
              <input
                type="text"
                id="cardDetails"
                placeholder="Card Number"
                className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default Donations
