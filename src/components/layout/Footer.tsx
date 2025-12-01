// src/components/layout/Footer.tsx
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="relative">
      <div
        className="bg-gradient-to-b from-[#c6e2ee] to-[#fff7c9]
        w-full pt-10 pb-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10 flex flex-col md:flex-row justify-between items-start gap-10 relative z-[3]">

          {/* Logo + Description */}
          <div className="w-full md:w-1/3">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Little Flower"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="font-bold text-lg">LITTLE FLOWER</div>
                <div className="text-sm text-gray-600">Kids Play School</div>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              Nurturing curiosity, creativity and kindness — where little hearts
              and minds blossom.
            </p>
          </div>

          {/* Explore + Contact + Follow Us */}
          <div className="flex flex-col sm:flex-row gap-10 w-full md:w-auto">

            {/* Explore */}
            <div>
              <h4 className="footer-title">Explore</h4>
              <ul className="footer-list">
                <li><a className="footer-link" href="/programs">Programs</a></li>
                <li><a className="footer-link" href="/admissions">Admissions</a></li>
                <li><a className="footer-link" href="/philosophy">Our Philosophy</a></li>
                <li><a className="footer-link" href="/gallery">Gallery</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer-title">Contact</h4>
              <div className="footer-list space-y-1">
                <div>Phone: +91 98765 43210</div>
                <div>Email: hello@littleflower.school</div>
                <div className="mt-2">Address: Your Street, Your City</div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="footer-title">Follow Us</h4>
              <ul className="footer-list space-y-3">

                <li className="footer-social">
                  <FaInstagram className="text-pink-500 text-lg" />
                  <a className="footer-link" href="https://instagram.com/littleflower_playschool" target="_blank">
                    @littleflower_playschool
                  </a>
                </li>

                <li className="footer-social">
                  <FaFacebook className="text-blue-600 text-lg" />
                  <a className="footer-link" href="https://facebook.com/LittleFlowerPlaySchool" target="_blank">
                    LittleFlowerPlaySchool
                  </a>
                </li>

                <li className="footer-social">
                  <FaYoutube className="text-red-600 text-lg" />
                  <a className="footer-link" href="https://youtube.com/@LittleFlowerKidsSchool" target="_blank">
                    LittleFlowerKidsSchool
                  </a>
                </li>

                <li className="footer-social">
                  <FaWhatsapp className="text-green-600 text-lg" />
                  <a className="footer-link" href="https://wa.me/919876543210" target="_blank">
                    +91 98765 43210
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 text-xs text-gray-700 text-center">
            © {new Date().getFullYear()} Little Flower — All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
  