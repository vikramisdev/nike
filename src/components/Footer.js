function Footer() {
  return (
    <footer class="bg-white py-8 px-12">
      <div class="container mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
          <div>
            <h4 class="font-bold mb-4">Resources</h4>
            <ul className="grid gap-2">
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Membership</a>
              </li>
              <li>
                <a href="#">Nike x NBA</a>
              </li>
              <li>
                <a href="#">Nike Journal</a>
              </li>
              <li>
                <a href="#">Site Feedback</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4">Help</h4>
            <ul className="grid gap-2">
              <li>
                <a href="#">Get Help</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Order Cancellation</a>
              </li>
              <li>
                <a href="#">Payment Options</a>
              </li>
              <li>
                <a href="#">Gift Card Balance</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4">Company</h4>
            <ul className="grid gap-2">
              <li>
                <a href="#">About Nike</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Purpose</a>
              </li>
              <li>
                <a href="#">Sustainability</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4">Promotions & Discounts</h4>
            <ul className="grid gap-2">
              <li>
                <a href="#">Student</a>
              </li>
              <li>
                <a href="#">Military</a>
              </li>
              <li>
                <a href="#">Teacher</a>
              </li>
              <li>
                <a href="#">First Responders & Medical Professionals</a>
              </li>
              <li>
                <a href="#">Birthday</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t mt-8 pt-4 text-xs text-gray-600">
          <div class="md:flex md:justify-between items-center">
            <p className="mb-5">© 2024 Nike, Inc. All Rights Reserved</p>
            <div class="md:flex md:space-x-4 grid grid-cols-2 gap-y-5">
              <a href="#">Guides</a>
              <a href="#">Terms of Sale</a>
              <a href="#">Terms of Use</a>
              <a href="#">Nike Privacy Policy</a>
              <a href="#">Your Privacy Choices</a>
              <a href="#">CA Supply Chains Act</a>
            </div>
            <div class="flex items-center space-x-2">
              <span>United States</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
