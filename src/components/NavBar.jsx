import { useState, Fragment } from 'react'
import { Link } from 'react-scroll'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Projects', href: 'portfolio', current: false },
  { name: 'Education', href: 'timeline', current: false },
  { name: 'Contact', href: 'contact', current: false },
]

const logoLg = (
    <svg 
        className='fill-stone-800 dark:fill-white hidden h-8 w-auto lg:block'
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 384 512"
    >
        <path d="M222.6 43.2l-.2 4.8H288c53 0 96 43 96 96s-43 96-96 96H248V160h40c8.8 0 16-7.2 16-16s-7.2-16-16-16H248 220l-4.5 144H256c53 0 96 43 96 96s-43 96-96 96H240V384h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H213l-3.1 99.5L208.5 495l0 1c-.3 8.9-7.6 16-16.5 16s-16.2-7.1-16.5-16l0-1-1-31H136c-22.1 0-40-17.9-40-40s17.9-40 40-40h36l-1-32H152c-53 0-96-43-96-96c0-47.6 34.6-87.1 80-94.7V256c0 8.8 7.2 16 16 16h16.5L164 128H136 122.6c-9 18.9-28.3 32-50.6 32H56c-30.9 0-56-25.1-56-56S25.1 48 56 48h8 8 89.5l-.1-4.8L161 32c0-.7 0-1.3 0-1.9c.5-16.6 14.1-30 31-30s30.5 13.4 31 30c0 .6 0 1.3 0 1.9l-.4 11.2zM64 112c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16z"/>
    </svg>
);

const logoSm = (
    <svg 
        className='fill-stone-800 dark:fill-white block h-8 w-auto lg:hidden'
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 384 512"
    >
        <path d="M222.6 43.2l-.2 4.8H288c53 0 96 43 96 96s-43 96-96 96H248V160h40c8.8 0 16-7.2 16-16s-7.2-16-16-16H248 220l-4.5 144H256c53 0 96 43 96 96s-43 96-96 96H240V384h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H213l-3.1 99.5L208.5 495l0 1c-.3 8.9-7.6 16-16.5 16s-16.2-7.1-16.5-16l0-1-1-31H136c-22.1 0-40-17.9-40-40s17.9-40 40-40h36l-1-32H152c-53 0-96-43-96-96c0-47.6 34.6-87.1 80-94.7V256c0 8.8 7.2 16 16 16h16.5L164 128H136 122.6c-9 18.9-28.3 32-50.6 32H56c-30.9 0-56-25.1-56-56S25.1 48 56 48h8 8 89.5l-.1-4.8L161 32c0-.7 0-1.3 0-1.9c.5-16.6 14.1-30 31-30s30.5 13.4 31 30c0 .6 0 1.3 0 1.9l-.4 11.2zM64 112c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16z"/>
    </svg>
);


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure 
        as="nav" 
        className="bg-soft-white dark:bg-stone-800 sticky top-0 z-30 shadow-xl"
    >
        {({ open }) => (
        <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile hamburger */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-stone-800 dark:text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                    </Disclosure.Button>
                    </div>
                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <Link
                            activeClass="active" 
                            to="intro" 
                            spy={true} 
                            smooth={true} 
                            offset={-275} 
                            duration={900}
                        >
                            <div className="flex flex-shrink-0 items-cente cursor-pointer">
                                    {logoLg}
                                    {logoSm}
                            </div>
                        </Link>
                        {/* Desktop nav bar */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link 
                                        activeClass="active" 
                                        to={item.href} 
                                        spy={true} 
                                        smooth={true} 
                                        offset={-100} 
                                        duration={800}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-stone-800 dark:text-white hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Socials Drop Down Menu */}
                    <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="public/selfie.svg"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.linkedin.com/in/armando-espinoza999/"
                            target="_blank"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            alt="LinkedIn"
                          >
                            <svg
                                className="w-7 h-7 fill-current"
                                role="img"
                                viewBox="0 0 256 256"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                            <g>
                                <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
                            </g>
                            </svg>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://github.com/earmando29"
                            target="_blank"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            alt="GitHub"
                          >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="w-7"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                            <g fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                    fill="currentColor"
                                />
                            </g>
                            </svg>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Pending
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                </div>
            </div>

            {/* Mobile hamburger */}
            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                    <Link
                        activeClass="active" 
                        to={item.href} 
                        spy={true} 
                        smooth={true} 
                        offset={-275} 
                        duration={900}
                    >
                        <Disclosure.Button
                            key={item.name}
                            as="a"
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-stone-800 dark:text-white hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                                {item.name}
                        </Disclosure.Button>
                    </Link>
                    ))}
                </div>
            </Disclosure.Panel>
        </>
        )}
    </Disclosure>
  )
}
