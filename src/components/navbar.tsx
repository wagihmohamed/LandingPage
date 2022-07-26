import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react';
import { Link } from 'react-scroll'
import { navigationItems } from '../utlis/consts';
import { loginPath } from '../utlis/routes';
import { SharedButton } from './sharedComponents/sharedButton';

export const NavBar = (): JSX.Element => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    const handleCloseNav = () => setNav(!nav);

    return (
        <div className='sticky top-0 z-10 w-full h-[80px] bg-zinc-200 drop-shadow-lg'>
            <div className='w-full h-full flex justify-between items-center px-6'>
                <h1 className='text-3xl font-bold sm:text-4xl'>CLOUD SYS</h1>
                <div className='hidden sm:flex items-center min-w-2xl'>
                    {navigationItems.map((element) => (
                        <Link className='font-medium cursor-pointer hover:border-b hover:border-gray-500  
                        transition-all text-gray-900 px-6 hover:text-gray-400'
                            key={element.id}
                            to={element.to}
                            smooth={true}
                            offset={element.offset}
                            duration={500}>
                            {element.name}
                        </Link>
                    ))}
                </div>
                <div className='hidden sm:flex'>
                    <SharedButton path={loginPath}>Get Started</SharedButton>
                </div>
                <div onClick={handleNav} className='md:hidden'>
                    {!nav ? <MenuIcon className='w-7' /> : <XIcon className='w-7' />}
                </div>
            </div>
            {nav && <ul className='absolute sm:hidden bg-zinc-200 w-full px-8'>
                {navigationItems.map((element) => (
                    <li className='border-b-2 my-4 text-center font-medium text-gray-900 px-8 hover:text-gray-500 border-zinc-300 w-full' key={element.id}>
                        <Link onClick={handleCloseNav} className='font-medium text-gray-900 px-8 hover:text-gray-500'
                            to={element.to}
                            smooth={true}
                            offset={element.offset}
                            duration={500}
                        >{element.name}
                        </Link>
                    </li>
                ))}
                <SharedButton path={loginPath}>Get Started</SharedButton>
            </ul>}
        </div>
    );
}

