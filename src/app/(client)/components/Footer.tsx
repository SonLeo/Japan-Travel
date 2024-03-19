import Logo from "~/app/(client)/components/Logo";
import styles from "./Footer.module.css";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <section className="w-full py-4 text-white bg-indigo-950">
      <footer className="max-w-screen-2xl h-full mx-auto px-4">
        <div className="grid grid-cols-5 text-xs lg:text-base lg:grid-cols-9 gap-8">
          <div className="col-span-3 lg:col-span-3 mt-8 mb-0 lg:mb-8">
            <div className="mb-5">
              <Logo />
            </div>
            <div className="py-2 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">
              <PhoneIcon className="w-6 mr-2" />
              <span>0866211334</span>
            </div>
            <div className="py-2 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">
              <EnvelopeIcon className="w-6 mr-2" />
              <span>info@digitalagency.com</span>
            </div>
            <div className="py-2 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">
              <MapPinIcon className="w-6 mr-2" />
              <span>9574 Second Road Dunedin, FL 34698</span>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-2 mt-8 mb-0 lg:mb-8">
            <h3 className="mb-5 text-xl">About Us</h3>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Our Story</p>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Team</p>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Clients</p>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Testimonials</p>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Social Media</p>
          </div>

          <div className="col-span-3 row-span-2 lg:col-span-2 lg:row-span-1 mb-8 mt-0 lg:mt-8">
            <h3 className="mb-5 text-xl">Services</h3>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Web Design</p>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Social Media</p>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">PPC Advertising</p>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Content Creation</p>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Testimonials</p>
          </div>

          <div className="col-span-2 row-span-2 lg:col-span-2 lg:row-span-1 mb-8 mt-0 lg:mt-8">
            <h3 className="mb-5 text-xl">Portfolio</h3>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Case Studies</p>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Projects</p>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Success Stories</p>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Latest Posts</p>
            <p className="py-1 flex items-center text-gray-400 hover:cursor-pointer hover:text-white">Web Design</p>
          </div>
        </div>
        <div className="border-t border-gray-500">
          <p className="pt-4 text-center text-gray-400">© 2024 Created with Royal Elementor Addons</p>
        </div>
      </footer>
    </section>
  );
}
