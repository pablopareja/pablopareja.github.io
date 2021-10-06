import { useState } from 'react';
import Head from 'next/head';

// containers
import Footer from 'containers/footer';
import Header from 'containers/header';

// icons
import DIAGONAL from 'svgs/ui/diagonal.svg?sprite';

// components
import Icon from 'components/icon';

const Contact: React.FC = () => {
  const [text, setText] = useState<string>('');
  const showSecretSections = text.includes('secret');
  return (
    <div
      onKeyDown={({ key }) => {
        setText(`${text}${key}`);
      }}
      tabIndex={0}
      role="menu"
    >
      <Head>
        <title>Pablo Pareja</title>
      </Head>
      <div>
        <div className="h-screen py-16 px-36">
          <img
            className="absolute top-0 left-0 object-cover w-full h-full"
            src="/images/PabloParejaPianoPlaying.jpg"
            alt="Media"
            style={{ filter: 'grayscale(100%)', zIndex: -1 }}
          />
          {/* <div
            className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none"
            style={{ backdropFilter: 'blur(1px)', zIndex: -1 }}
          /> */}
          {showSecretSections && <Header black />}
          {/* <div
            className="relative flex items-center justify-center w-full h-full text-3xl leading-9 text-white"
            style={{ letterSpacing: '18px' }}
          >
            CONTACT
          </div> */}
        </div>
        {showSecretSections && (
          <div className="relative flex p-56 text-2xl text-white bg-black">
            <div>
              <div className="flex mr-24 font-sans text-xl">
                <div>
                  <Icon className="w-9 h-9" icon={DIAGONAL} />
                </div>
                <div className="flex px-8 pb-8 leading-10" style={{ letterSpacing: '2px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula metus,
                  vulputate eleifend vulputate quis, condimentum aliquam velit. Vivamus vehicula ac
                  elit vitae placerat. Proin sed condimentum enim, et pretium urna. Quisque cursus
                  ullamcorper felis, nec pretium risus accumsan nec.
                </div>
                <div className="flex items-end">
                  <Icon className="w-9 h-9" icon={DIAGONAL} />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full" style={{ minWidth: '352px', maxWidth: '352px' }}>
              <div className="text-lg mb-14">CONTACT</div>
              <form
                className="flex flex-col items-start w-full"
                action="https://formspree.io/f/xgerqnkk"
                method="POST"
              >
                <label className="flex flex-col w-full text-xs" htmlFor="name">
                  <span className="mb-4">NAME</span>
                  <input
                    className="h-10 bg-black border border-white"
                    name="Name"
                    id="name"
                    type="name"
                  />
                </label>
                <label className="flex flex-col w-full mt-8 text-xs" htmlFor="email">
                  <span className="mb-4">EMAIL</span>
                  <input
                    className="h-10 bg-black border border-white"
                    name="Email"
                    id="email"
                    type="text"
                  />
                </label>
                <label className="flex flex-col w-full mt-8 text-xs" htmlFor="message">
                  <span className="mb-4">MESSAGE</span>
                  <textarea
                    className="h-24 bg-black border border-white"
                    name="Message"
                    id="message"
                  />
                </label>
                <button
                  className="px-10 py-2 mt-8 font-sans text-xs leading-4 border border-white"
                  style={{ letterSpacing: '0.6px' }}
                  type="submit"
                >
                  CONTACT
                </button>
              </form>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Contact;