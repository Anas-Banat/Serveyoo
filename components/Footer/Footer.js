import React from 'react';
import Image from 'next/image';
import playstore from "../../public/playstore.png";
import appstore from "../../public/appstore.png";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const FooterLink = ({ href, text }) => (
  <a href={href} className="text-gray-800 hover:opacity-50 transition duration-300 ease-in-out flex justify-center items-start space-x-2 mb-2">
    {text}
  </a>
);

const FooterContactItem = ({ href, icon, text }) => (
  <div className="flex items-center">
    <a href={href} className="text-gray-800 hover:opacity-50 transition duration-300 ease-in-out flex justify-center items-start space-x-2 mb-2">
      <span className="text-gray-800 mt-1">{icon}</span>
      <span className="ml-2 text-gray-800">{text}</span>
    </a>
  </div>
);

const ImageStore = ({ src, alt }) => (
  <Image className='mb-2'
    src={src}
    alt={alt}
    width={150}
  />
);

const FooterApp = ({text, playstoreLink, appstoreLink}) => (
  <div className="space-y-2 flex flex-col justify-center items-center">
    <span className="text-gray-800 text-l font-semibold mb-2">{text}</span>
      <a href={playstoreLink} className="md:w-2/2 hover:opacity-80 transition ease-in-out duration-300">
        <ImageStore 
          src={playstore}
          alt='Play Store'
        />
      </a>  
      <a href={appstoreLink} className="md:w-2/2 hover:opacity-80 transition ease-in-out duration-300">
        <ImageStore
          src={appstore}
          alt='App Store'
        />
      </a>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-8 py-4">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="mb-8 md:mb-0 ">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink href="#" text="About Us" />
              </li>
              <li>
                <FooterLink href="#" text="Events" />
              </li>
              <li>
                <FooterLink href="#" text="Blog" />
              </li>
              <li>
                <FooterLink href="#" text="Membership" />
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex flex-col justify-start items-center md:justify-start">
              <FooterContactItem
                href="https://www.facebook.com/Serveyoojo"
                icon={<FaFacebook className='text-blue-500' />}
                text="Facebook" 
              />
              <FooterContactItem
                href="https://www.instagram.com/serveyoojo/"
                icon={<FaInstagram className='text-red-500' />}
                text="Instagram" 
              />
              <FooterContactItem
                href="http://wa.me/+962796888179"
                icon={<FaWhatsapp className='text-green-500'/>}
                text="WhatsApp" 
              />
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col justify-start items-center md:justify-start">
              <FooterContactItem
                href="https://maps.app.goo.gl/EmqkBi1c1ocYonKV8"
                icon={<FaMapMarkerAlt />}
                text="Tabarbour, Amman, Jordan" 
              />
              <FooterContactItem
                href="mailto:info@serveyoo.com"
                icon={<FaEnvelope />}
                text="info@serveyoo.com" 
              />
              <FooterContactItem
                href="tel:+962796888179"
                icon={<FaPhone />}
                text="+962 796 888 179" 
              />
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Serveyoo Apps</h3>
            <div>
              <FooterApp
                text="Users Mobile App is available on"
                playstoreLink={'#'}
                appstoreLink={'https://apps.apple.com/us/app/serveyoouser-%D8%AA%D9%86%D8%B8%D9%8A%D9%81-%D9%88%D8%B5%D9%8A%D8%A7%D9%86%D8%A9/id6450360929'}
              />
              <FooterApp
                text="Providers Mobile App is available on"
                playstoreLink={'#'}
                appstoreLink={'https://apps.apple.com/us/app/serveyoo-provider/id6448701603'}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 text-gray-800 text-sm font-medium text-center mt-8">
        &copy; Copyright 2023. All Rights Reserved By <b>Serveyoo</b>.
      </div>
    </footer>
  );
};

export default Footer;
