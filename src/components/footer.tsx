import { SocialIcons } from "./sharedComponents/socialIcons";

export const Footer = (): JSX.Element => {
    return (
        <div className="w-full mt-24 bg-slate-900 text-gray-300 py-6 px-2">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
                <div>
                    <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1 cursor-pointer'>Marketing</li>
                        <li className='py-1 cursor-pointer'>Analytics</li>
                        <li className='py-1 cursor-pointer'>Commerce</li>
                        <li className='py-1 cursor-pointer'>Data</li>
                        <li className='py-1 cursor-pointer'>Cloud</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'>Support</h6>
                    <ul>
                        <li className='py-1 cursor-pointer'>Pricing</li>
                        <li className='py-1 cursor-pointer'>Documentation</li>
                        <li className='py-1 cursor-pointer'>Guides</li>
                        <li className='py-1 cursor-pointer'>API Status</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'>Company</h6>
                    <ul>
                        <li className='py-1 cursor-pointer'>About</li>
                        <li className='py-1 cursor-pointer'>Blog</li>
                        <li className='py-1 cursor-pointer'>Jobs</li>
                        <li className='py-1 cursor-pointer'>Press</li>
                        <li className='py-1 cursor-pointer'>Partners</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-bold uppercase pt-2'>Legal</h6>
                    <ul>
                        <li className='py-1 cursor-pointer'>Claims</li>
                        <li className='py-1 cursor-pointer'>Privacy</li>
                        <li className='py-1 cursor-pointer'>Terms</li>
                        <li className='py-1 cursor-pointer'>Policies</li>
                        <li className='py-1 cursor-pointer'>Conditions</li>
                    </ul>
                </div>

                <div className="col-span-2 pt-8 md:pt-2">
                    <p className='font-bold uppercase text-center md:text-start'>Subscribe to our newsletter</p>
                    <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form>
                        <input type="email" placeholder="Enter email.." className="w-full p-2 mr-4 rounded-md mb-4" />
                        <button type="submit" className="p-2 mb-4 border hover:bg-gray-700 w-full rounded border-white">Submit</button>
                    </form>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between">
                <p className='py-4'>2022 Workflow, LLC. All rights reserved</p>
                <SocialIcons />
            </div>
        </div >
    );
}