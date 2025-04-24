import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Contact = ({ addJobSubmit }) => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const ContactM = {
      Name,
      Email,
      Message,
    };

    addJobSubmit(ContactM);
  };

  return (
    <section className='bg-black'>
      <div className='container max-w-29xl py-24 flex flex-col md:flex-row-reverse '>
        {/* Right Side Text */}
        <div className='md:w-1/2 text-white px-6 mb-6 md:mb-0'>
          <h2 className='text-2xl font-bold mb-2'>Contact Us Today</h2>
          <p className='text-white'>
            Fill out the form below to get in touch with us. We are here to answer any questions you may have and provide the support you need.
          </p>
        </div>

        {/* Form Section */}
        <div className='md:w-1/2 bg-black px-6 py-8 shadow-md rounded-md border'>
          <form onSubmit={submitForm}>
            <div className='mb-4'>
              <label className='block text-white font-bold mb-2'>Name</label>
              <input 
                type='text'
                id='name'
                name='name'
                className='border bg-gray-900 rounded w-full py-2 px-3 mb-2 text-white'
                required
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='block text-white font-bold mb-2'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className='border bg-gray-900 rounded w-full py-2 px-3 mb-2 text-white'
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='message' className='block text-white font-bold mb-2'>Message</label>
              <textarea
                id='message'
                name='message'
                className='border bg-gray-900 rounded w-full py-2 px-3 text-white'
                rows='4'
                required
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
