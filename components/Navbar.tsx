import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Projects', href: '/Projects', current: false },
    { name: 'Expertise', href: '/skills', current: false },
    { name: 'Education', href: '/education', current: false },
    { name: 'Achievements', href: '/achievement', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const router = useRouter();
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-items-end">
                            <div className="flex flex-1 items-end justify-end">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4 items-center">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    router.asPath === item.href ? 'bg-gray-900 text-white' : 'text-teal-200 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-1xl font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                        <a href="subhasreeResume.pdf" download="Subhasree's Resume">
                                            <button className='text-white text-medium font-medium bg-teal-500 pl-3 pr-3 rounded-md h-9'>Subhasree&apos;s Resume</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}
