const Header = () => {
  const view = `
      <div class="relative bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex justify-between items-center border-b-2 border-gray-100 py-6">
            <div class="">
              <a href="/" class="flex">
                <img>
                <h1 class="text-gray-900 font-bold text-xl">Rick and Morty</h1>
              </a>
            </div>
            <div class="items-center">
              <a href="/" class="flex">
                <img class="w-1/2" src="../assets/images/logo.png" name="angel-logo">
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  return view;
};
export default Header;
