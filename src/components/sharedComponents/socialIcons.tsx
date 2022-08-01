import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

export const SocialIcons = (): JSX.Element => {
    return (
        <div className='flex space-x-8 flex-wrap mx-auto'>
            <FaFacebook className='h-20 cursor-pointer text-primary' />
            <FaInstagram className='h-20 cursor-pointer text-primary' />
            <FaTwitter className='h-20 cursor-pointer text-primary' />
            <FaTwitch className='h-20 cursor-pointer text-primary' />
            <FaGithub className='h-20 cursor-pointer text-primary' />
        </div>
    );
}