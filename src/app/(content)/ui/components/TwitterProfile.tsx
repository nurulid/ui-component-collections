export const htmlCode = `<div class="transition-smooth bg-gray-950 hover:bg-zinc-900 hover:border-gray-900 text-white rounded-2xl relative max-w-[350px] w-full">
  <div class="flex items-center gap-2 p-4">
    <img class="w-8 invert" src="public/x-twitter.svg" alt="Twitter icon" />
    <span>Profile</span>
  </div>
  <!-- watermelon image source: "https://www.instagram.com/p/Cy6g8d4vUuf/" -->
  <div
    style="background-image: url('public/watermelon-palestine.jpeg')" 
    class=" bg-cover bg-no-repeat h-40 lg:h-32 relative px-3">
    <div class="absolute -bottom-11">
      <img class="w-[85px] rounded-full border-zinc-900 hover:border-zinc-950 border-4" src="public/me-ai.png" alt="Profile image" />
    </div>
  </div>
  <div class="text-right px-3 pt-4 pb-2">
    <a href="https://twitter.com/nurulide" target="_blank" class="py-2 px-6 border-zinc-500 bg-transparent hover:bg-white hover:text-black border rounded-full transition-all duration-200 ease-linear">Follow</a>
  </div>
  <div class="p-4">
    <h2 class="text-xl">Nurul ID 🪴</h2>
    <p class="text-zinc-400">@nurulide</p>
    <p class="text-zinc-600">Just an ordinary person.</p>
  </div>
</div>`

export const reactCode = `const user = {
  name: 'Nurul ID 🪴',
  username: 'nurulide',
  avatar: '/images/me-ai.png',
  cover: '/images/watermelon-palestine.jpeg', // watermelon image source: https://www.instagram.com/p/Cy6g8d4vUuf/
  description: 'Just an ordinary person.',
  url: 'https://twitter.com/nurulide',
  following: 301,
  followers: 300,
};

export const TwitterProfile = () => {
  return (
    <div className="transition-smooth bg-gray-950 hover:bg-zinc-900 hover:border-gray-900 text-white rounded-2xl relative max-w-[350px] w-full">
      <div className="flex items-center gap-2 p-4">
        <img
          className="w-8 invert"
          src="/icons/x-twitter.svg"
          alt="Twitter icon"
        />
        <span>Profile</span>
      </div>
      <div
        style={{ backgroundImage: "url("+ user.cover +")" }}
        className="bg-cover bg-no-repeat h-40 lg:h-32 relative px-3"
      >
        <div className="absolute -bottom-11">
          <img
            className="w-[85px] rounded-full border-zinc-900 hover:border-zinc-950 border-4"
            src={user.avatar}
            alt="Profile image"
          />
        </div>
      </div>
      <div className="text-right px-3 pt-4 pb-2">
        <a
          href={user.url}
          target="_blank"
          className="py-2 px-6 border-zinc-500 bg-transparent hover:bg-white hover:text-black border rounded-full transition-all duration-200 ease-linear"
        >
          Follow
        </a>
      </div>
      <div className="p-4">
        <h2 className="text-xl">{user.name}</h2>
        <p className="text-zinc-400">@{user.username}</p>
        <p className="text-zinc-600">{user.description}</p>
      </div>
    </div>
  );
};`

const user = {
  name: 'Nurul ID 🪴',
  username: 'nurulide',
  avatar: '/images/me-ai.png',
  cover: '/images/watermelon-palestine.jpeg', // watermelon image source: https://www.instagram.com/p/Cy6g8d4vUuf/
  description: 'Just an ordinary person.',
  url: 'https://twitter.com/nurulide',
  following: 301,
  followers: 300,
};

export const TwitterProfile = () => {
  return (
    <div className="flex justify-center">
      <div className="transition-smooth bg-gray-950 hover:bg-zinc-900 hover:border-gray-900 text-white rounded-2xl relative max-w-[350px] w-full">
        <div className="flex items-center gap-2 p-4">
          <img
            className="w-8 invert"
            src="/icons/x-twitter.svg"
            alt="Twitter icon"
          />
          <span>Profile</span>
        </div>
        <div
          style={{ backgroundImage: "url("+ user.cover +")" }}
          className="bg-cover bg-no-repeat h-40 lg:h-32 relative px-3"
        >
          <div className="absolute -bottom-11">
            <img
              className="w-[85px] rounded-full border-zinc-900 hover:border-zinc-950 border-4"
              src={user.avatar}
              alt="Profile image"
            />
          </div>
        </div>
        <div className="text-right px-3 pt-4 pb-2">
          <a
            href={user.url}
            target="_blank"
            className="py-2 px-6 border-zinc-500 bg-transparent hover:bg-white hover:text-black border rounded-full transition-all duration-200 ease-linear"
          >
            Follow
          </a>
        </div>
        <div className="p-4">
          <h2 className="text-xl">{user.name}</h2>
          <p className="text-zinc-400">@{user.username}</p>
          <p className="text-zinc-600">{user.description}</p>
        </div>
      </div>
    </div>
  );
};
