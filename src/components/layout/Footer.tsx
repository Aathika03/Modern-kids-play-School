// src/components/layout/Footer.tsx
export default function Footer(): React.JSX.Element {
  return (
    <footer className="mt-12">
      <div className="bg-[#EAF6F4]"> {/* soft mint tint that pairs with your hero */}
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Little Flower" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-bold text-lg">LITTLE FLOWER</div>
                <div className="text-sm text-gray-600">Kids Play School</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-700 max-w-md">
              Nurturing curiosity, creativity and kindness — where little hearts and minds blossom.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Explore</h4>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li><a href="/programs">Programs</a></li>
                <li><a href="/admissions">Admissions</a></li>
                <li><a href="/philosophy">Our Philosophy</a></li>
                <li><a href="/gallery">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-800">Contact</h4>
              <div className="mt-3 text-sm text-gray-700">
                <div>Phone: +91 98765 43210</div>
                <div>Email: hello@littleflower.school</div>
                <div className="mt-2">Address: Your Street, Your City</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-t-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} Little Flower — All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
