function App() {
  return (
    <div class="p-4">
      <div class="pl-5">
      <button class="p-3 bg-gray-200 rounded-xl hover:bg-gray-300 active:bg-gray-500 cursor-pointer text-xl">Click Here !</button>
      </div>
      <div class="m-4 shadow-lg hover:scale-105 w-100 transition-transform">
        <img src="https://img.freepik.com/free-photo/mixed-fruits-with-apple-banana-orange-other_74190-938.jpg?semt=ais_hybrid&w=740&q=80" alt="fruits" />
      </div>
      <div class="p-4 sm:text-xl md:text-3xl lg:text-5xl">
        <h2 class="bg-linear-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text inline-block font-bold">Welcome to Thailand ! Explore this beautiful city !!</h2>
      </div>
      <div class="list-disc list-inside pl-5 text-xl text-green-600 hover:text-blue-600">
        <li type="square">Apple</li>
        <li type="square">Orange</li>
        <li type="square">Mango</li>
        <li type="square">Grapes</li>
        <li type="square">Kiwi</li>
      </div>
      <div class="m-5 p-5 w-100 h-140 border rounded">
        <img src="https://www.cdn.travejar.com/storage/india_attraction_tour/1748254838.webp" alt="Wat Arun" />
        <p class="text-xl text-center font-semibold p-1">Wat Arun Temple</p>
        <p class="text-justify p-1">Wat Arun (Temple of Dawn) is a stunning Buddhist temple in Bangkok, Thailand, famous for its central, porcelain-decorated spire that symbolizes Mount Meru, located on the west bank of the Chao Phraya River and representing the transition from darkness to light, featuring Khmer-Thai architecture and offering incredible views, especially at sunrise/sunset.</p>
        <div class="flex justify-center items-center">  
          <button class="p-3 bg-amber-400 rounded-xl hover:bg-amber-300 active:bg-amber-500 cursor-pointer text-xl">Learn More</button>
        </div>
      </div>
      <table class="min-w-full border border-emerald-300 border-collapse">
          <thead class="bg-emerald-100">
            <tr>
              <th class="border border-emerald-300 px-4 py-2 text-indigo-900">Name</th>
              <th class="border border-emerald-300 px-4 py-2 text-indigo-900">Role</th>
              <th class="border border-emerald-300 px-4 py-2 text-indigo-900">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="even:bg-emerald-50 hover:bg-emerald-200 transition-colors text-center">
              <td class="border border-emerald-300 px-4 py-2">Ananya</td>
              <td class="border border-emerald-300 px-4 py-2">Designer</td>
              <td class="border border-emerald-300 px-4 py-2">Active</td>
            </tr>
            <tr class="even:bg-emerald-50 hover:bg-emerald-200 transition-colors text-center">
              <td class="border border-emerald-300 px-4 py-2">Rajesh</td>
              <td class="border border-emerald-300 px-4 py-2">Developer</td>
              <td class="border border-emerald-300 px-4 py-2">Inactive</td>
            </tr>
            <tr class="even:bg-emerald-50 hover:bg-emerald-200 transition-colors text-center">
              <td class="border border-emerald-300 px-4 py-2">Madhu</td>
              <td class="border border-emerald-300 px-4 py-2">Manager</td>
              <td class="border border-emerald-300 px-4 py-2">Active</td>
            </tr>
          </tbody>
      </table>
      <div class="p-4">
        <form class="p-2 m-2 border rounded border-red-600">
          <p>Name : <input type="text" placeholder="Enter name" class="border rounded m-1 p-1 focus:border-red-600"/></p>
          <p>Email : <input type="email" placeholder="Enter email" class="border rounded m-1 p-1 focus:border-red-600"/></p>
          <p>Password : <input type="password" placeholder="Enter password" class="border rounded m-1 p-1 focus:border-red-600"/></p>
          <div>
            <button class="px-5 py-3 rounded text-white bg-green-600 hover:bg-green-500 active:bg-green-700 cursor-pointer">Submit</button>
          </div>
          </form>
      </div>
      <nav class="bg-violet-600 p-4 text-2xl">
        <ul class="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-white">
          <li><a href="#" class="hover:text-gray-300">Home</a></li>
          <li><a href="#" class="hover:text-gray-300">About</a></li>
          <li><a href="#" class="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
      <div class="p-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-sky-300 p-4 rounded-lg shadow">Card 1</div>
          <div class="bg-sky-300 p-4 rounded-lg shadow">Card 2</div>
          <div class="bg-sky-300 p-4 rounded-lg shadow">Card 3</div>
          <div class="bg-sky-300 p-4 rounded-lg shadow">Card 4</div>
          <div class="bg-sky-300 p-4 rounded-lg shadow">Card 5</div>
          <div class="bg-sky-300 p-4 rounded-lg shadow">Card 6</div>
        </div>
      </div>
      <div class="bg-gray-200">
        <nav class="bg-blue-600 p-4">
          <ul class="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 text-white">
            <li><a href="#" class="hover:underline">Home</a></li>
            <li><a href="#" class="hover:underline">Features</a></li>
            <li><a href="#" class="hover:underline">Contact</a></li>
          </ul>
        </nav>

        <section class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white">
          <div>
            <h1 class="text-3xl font-bold mb-4">Build Fast with Tailwind CSS</h1>
            <p class="text-gray-600">
              Create modern, responsive layouts easily using utility-first CSS.
            </p>
          </div>
          <img
            src="https://cdnblog.webkul.com/blog/wp-content/uploads/2024/05/tailwindcss-1633184775.webp"
            alt="Hero"
            class="rounded-lg w-full"
          />
        </section>

        <section class="p-6">
          <h2 class="text-2xl font-bold mb-4 text-center">Features</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-4 rounded-lg shadow text-center">Fast Development</div>
            <div class="bg-white p-4 rounded-lg shadow text-center">Fully Responsive</div>
            <div class="bg-white p-4 rounded-lg shadow text-center">Easy Customization</div>
          </div>
        </section>

        <section class="p-6 bg-white">
          <h2 class="text-2xl font-bold mb-4">Pricing</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full border border-gray-200">
              <thead class="bg-gray-100">
                <tr>
                  <th class="p-3 border">Plan</th>
                  <th class="p-3 border">Price</th>
                  <th class="p-3 border">Features</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr>
                  <td class="p-3 border">Basic</td>
                  <td class="p-3 border">$10</td>
                  <td class="p-3 border">Core Tools</td>
                </tr>
                <tr>
                  <td class="p-3 border">Pro</td>
                  <td class="p-3 border">$25</td>
                  <td class="p-3 border">Advanced Tools</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="p-6">
          <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
          <form class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow">
            <input
              type="text"
              placeholder="Name"
              class="border p-2 rounded col-span-1"
            />
            <input
              type="email"
              placeholder="Email"
              class="border p-2 rounded col-span-1"
            />
            <textarea
              placeholder="Message"
              class="border p-2 rounded md:col-span-2"
              rows="4"
            ></textarea>
            <button
              class="bg-blue-600 text-white py-2 px-4 rounded md:col-span-2 hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
export default App;