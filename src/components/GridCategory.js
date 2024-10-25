function GridCategory() {
  return (
    <div className="md:grid md:grid-cols-2 text-white">
      <div className="flex items-end bg-[url('https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_960,c_limit/58e760c3-0df8-46f4-8afe-795de4cd42a6/nike-just-do-it.jpg')] bg-cover bg-center min-h-screen md:p-12 p-8 ">
        <div>
          <h1>Unlock Your Motion</h1>
          <h1 className="text-2xl">Nike Tech Woven Suit</h1>
          <button className="px-4 py-2 rounded-full bg-white text-black mt-5">
            SHOP
          </button>
        </div>
      </div>

      <div className="flex items-end bg-[url('https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1159,c_limit/a22b4fbb-2139-4336-b317-ec1b0757760d/nike-just-do-it.jpg')] bg-cover bg-center min-h-screen md:p-12 p-8 ">
        <div>
          <h1>Always Iconic</h1>
          <h1 className="text-2xl">All The Latest Dunks</h1>
          <button className="px-4 py-2 rounded-full bg-white text-black mt-5">
            SHOP
          </button>
        </div>
      </div>
      <div className="flex items-end bg-[url('https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1159,c_limit/ac1ee033-95a0-4ade-b260-13fd115df354/nike-just-do-it.jpg')] bg-cover bg-center min-h-screen md:p-12 p-8 ">
        <div>
          <h1>Nike C1TY</h1>
          <h1 className="text-2xl">Nothing Beats The C1TY</h1>
          <button className="px-4 py-2 rounded-full bg-white text-black mt-5">
            SHOP
          </button>
        </div>
      </div>
      <div className="flex items-end bg-[url('https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1159,c_limit/5f755edf-0f89-4b7e-89e7-3e8a6fbb8af1/nike-just-do-it.jpg')] bg-cover bg-center min-h-screen md:p-12 p-8 ">
        <div>
          <h1>Give Sports</h1>
          <h1 className="text-2xl">Fleece That Performs</h1>
          <button className="px-4 py-2 rounded-full bg-white text-black mt-5">
            SHOP GIFTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default GridCategory;
