import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
// import { FaLocationDot } from "react-icons/fa6";
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
   const form = useRef()
   const [formData, setFormData] = useState({
     name: '',
     email: '',
     message: '',
   })
   const [errors, setErrors] = useState({})

   const validateForm = () => {
     const newErrors = {}
     if (!formData.name.trim()) newErrors.name = 'Name is required'
     if (!formData.email.trim()) newErrors.email = 'Email is required'
     if (!formData.message.trim()) newErrors.message = 'Message is required'
     setErrors(newErrors)
     return Object.keys(newErrors).length === 0
   }

   const handleInputChange = (e) => {
     const { name, value } = e.target
     setFormData({ ...formData, [name]: value })
     setErrors({ ...errors, [name]: '' }) // Clear errors on input change
   }

  const sendEmail = (e) => {
    e.preventDefault()
     if (!validateForm()) return

    emailjs
      .sendForm('service_wnvatkc', 'template_5qvx3gq', form.current, {
        publicKey: 'XnLTFneXRVkwkphGD',
      })
      .then(
        () => {
          alert('Message Sent Successfully!')
          form.current.reset()
          setFormData({ name: '', email: '', message: '' }) // Reset form state
        },
        (error) => {
          alert('Failed to send message. Please try again later.')
          console.error('Failed to send message:', error)
        }
      )
  }

  return (
    <div id="contact" className="antialiased pt-20 w-full">
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-7xl p-8 md:rounded-xl shadow-lg text-white overflow-hidden">
          {/* Left Column: Contact Information */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            <h1 className="font-bold text-5xl tracking-wide text-center">
              Connect with Us!
            </h1>
            <p className="pt-2 text-white text-center text-lg">
              New Beginnings Outreach Worldwide Ministries exists to empower
              individuals and communities by spreading the love of Christ,
              fostering spiritual growth, and providing practical support for
              transformative living.
            </p>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <BsTelephoneFill className="text-purple-200 text-xl" />
                <span>(678) 891-7351</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <MdEmail className="text-purple-200 text-xl" />
                <span>apostlesanhw@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative z-10 rounded-xl shadow-lg p-8 text-gray-600 md:w-80 lg:w-1/2 w-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-4 w-full"
            >
              <div>
                <label htmlFor="name" className="text-xl text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-purple-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-xl text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-purple-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="text-xl text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-purple-300"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="inline-block self-end bg-violet-500 font-bold text-white rounded-lg px-6 py-2 uppercase text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
