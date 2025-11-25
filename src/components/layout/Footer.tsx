// src/components/layout/Footer.tsx
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer(): React.JSX.Element {
  return (
    <footer>
      <div className="bg-[#c6e2eeff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-start gap-12">

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

            <p className="mt-4 text-sm text-gray-700 max-w-md leading-relaxed">
              Nurturing curiosity, creativity and kindness — where little hearts
              and minds blossom.
            </p>
          </div>

          {/* Explore + Contact + Follow Us */}
          <div className="flex flex-col sm:flex-row gap-10 w-full md:w-auto">

            {/* Explore */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Explore</h4>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li><a href="/programs">Programs</a></li>
                <li><a href="/admissions">Admissions</a></li>
                <li><a href="/philosophy">Our Philosophy</a></li>
                <li><a href="/gallery">Gallery</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Contact</h4>
              <div className="mt-3 text-sm text-gray-700 space-y-1">
                <div>Phone: +91 98765 43210</div>
                <div>Email: hello@littleflower.school</div>
                <div className="mt-2">Address: Your Street, Your City</div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Follow Us</h4>
              <ul className="mt-3 space-y-3 text-sm text-gray-700">

                <li className="flex items-center gap-2">
                  <FaInstagram className="text-pink-500 text-lg" />
                  <a
                    href="https://instagram.com/littleflower_playschool"
                    target="_blank"
                  >
                    @littleflower_playschool
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <FaFacebook className="text-blue-600 text-lg" />
                  <a
                    href="https://facebook.com/LittleFlowerPlaySchool"
                    target="_blank"
                  >
                    LittleFlowerPlaySchool
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <FaYoutube className="text-red-600 text-lg" />
                  <a
                    href="https://youtube.com/@LittleFlowerKidsSchool"
                    target="_blank"
                  >
                    LittleFlowerKidsSchool
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <FaWhatsapp className="text-green-600 text-lg" />
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                  >
                    +91 98765 43210
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-t-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} Little Flower — All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
