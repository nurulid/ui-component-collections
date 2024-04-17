import Image from 'next/image';
import Link from 'next/link';

const menu = [
  { title: 'Diets', url: '#' },
  { title: 'Menu', url: '#' },
  { title: 'Delivery', url: '#' },
  { title: 'About Us', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'FAQ', url: '#' },
];

export const htmlHeader = `<header class="py-5 px-10 shadow bg-white">
<nav class="flex items-center justify-between">
  <a href="/">
    <img src="/images/Logo.svg" height="34px" alt="Logo" />
  </a>

  <ul class="uppercase text-sm flex items-center flex-wrap gap-5">
    <li>
      <a href="#" class="hover:underline transition-all text-gray-500">Diets</a>
    </li>
    <li>
      <a href="#" class="hover:underline transition-all text-gray-500">Menu</a>
    </li>
    <li>
      <a href="#" class="hover:underline transition-all text-gray-500">Delivery</a>
    </li>
    <li>
      <a href="#" class="hover:underline transition-all text-gray-500">About Us</a>
    </li>
    <li>
      <a href="#" class="hover:underline transition-all text-gray-500">Blog</a>
    </li>
    <li>
      <a href="#" class="hover:underline transition-all text-gray-500">FAQ</a>
    </li>
  </ul>

  <ul class="flex gap-5 items-center">
    <li>
      <a href="#">
        <img src="/icons/bag.svg" width="30px" alt="Bag icon" class="hover:scale-105 transition-all" />
      </a>
    </li>
    <li>
      <a href="#" class="py-[10px] px-6 text-sm bg-black hover:scale-105 transition-all rounded-xl text-white inline-block">
        Sign in
      </a>
    </li>
  </ul>
</nav>
</header>`;

export const reactHeader = `import Image from 'next/image';
import Link from 'next/link';

const menu = [
  { title: 'Diets', url: '#' },
  { title: 'Menu', url: '#' },
  { title: 'Delivery', url: '#' },
  { title: 'About Us', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'FAQ', url: '#' },
];

export const Header = () => {
  return (
    <header className="py-5 px-10 shadow bg-white">
      <nav className="nav-menu flex items-center justify-between">
        <Link href="/">
          <Image src="/fitme-logo.svg" height={50} width={100} alt="Logo" />
        </Link>

        <ul className="nav-menu uppercase text-sm flex items-center flex-wrap gap-5">
          {menu.map((item, i) => (
            <li key={i}>
              <Link href={item.url} className="hover:underline transition-all text-gray-500">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-5 items-center">
          <li>
            <a href="#">
              <Image
                src="/icons/bag.svg"
                height={30}
                width={30}
                alt="Bag icon"
                className='hover:scale-105 transition-all'
              />
            </a>
          </li>
          <li>
            <a href="#" className="py-[10px] px-6 text-sm bg-black hover:scale-105 transition-all rounded-xl text-white inline-block">
              Sign in
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};`

export const Header = () => {
  return (
    <header className="py-5 px-10 shadow bg-white">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/fitme-logo.svg" height={50} width={100} alt="Logo" />
        </Link>

        <ul className="uppercase text-sm flex items-center flex-wrap gap-5">
          {menu.map((item, i) => (
            <li key={i}>
              <Link href={item.url} className="hover:underline transition-all text-gray-500">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-5 items-center">
          <li>
            <Link href="#">
              <Image
                src="/icons/bag.svg"
                height={30}
                width={30}
                alt="Bag icon"
                className='hover:scale-105 transition-all'
              />
            </Link>
          </li>
          <li>
            <Link href="#" className="py-[10px] px-6 text-sm bg-black hover:scale-105 transition-all rounded-xl text-white inline-block">
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
