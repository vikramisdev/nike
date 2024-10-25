import React from 'react';

const NewAndFeaturedMenu = () => {
  return (
    <div className="md:grid md:grid-cols-4 gap-10 p-8">
      {/* Column 1 */}
      <div>
        <h3 className="font-bold mb-3">Limited Time</h3>
        <ul>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">
            Extra 25% Off Select Styles
          </li>
        </ul>
        <h3 className="font-bold mt-6 mb-3">New</h3>
        <ul>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">New Arrivals</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Best Sellers</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Shop Gifts</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Latest Drops</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">SNKRS Launch Calendar</li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="font-bold mb-3">Trending</h3>
        <ul>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">ACG Essentials</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Retro Running</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Vintage Green Shop</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Shop Sport</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className="font-bold mb-3">Shop Classics</h3>
        <ul>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Dunk</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Air Jordan 1</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Air Force</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Air Max</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Blazer</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Vomero</li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h3 className="font-bold mb-3">Explore</h3>
        <ul>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Running Shoe Finder</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Bra Finder</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Product Care</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Member Rewards</li>
          <li className="text-gray-600 hover:underline cursor-pointer mb-2">Buying Guides</li>
        </ul>
      </div>
    </div>
  );
};

export default NewAndFeaturedMenu;
