import Image from 'next/image';
import Link from 'next/link';

const menu = [
  { title: 'Diets', link: '#' },
  { title: 'Menu', link: '#' },
  { title: 'Delivery', link: '#' },
  { title: 'About Us', link: '#' },
  { title: 'Blog', link: '#' },
  { title: 'FAQ', link: '#' },
];

export const htmlHeader = `<header class="py-5 px-10 shadow bg-white flex items-center justify-between">
  <a href="/">
    <img src="/images/Logo.svg" height="34px" alt="Logo" />
  </a>

  <nav class="uppercase text-sm flex items-center flex-wrap gap-5">
    <a href="#" class="hover:underline transition-all text-gray-500">Diets</a>
    <a href="#" class="hover:underline transition-all text-gray-500">Menu</a>
    <a href="#" class="hover:underline transition-all text-gray-500">Delivery</a>
    <a href="#" class="hover:underline transition-all text-gray-500">About Us</a>
    <a href="#" class="hover:underline transition-all text-gray-500">Blog</a>
    <a href="#" class="hover:underline transition-all text-gray-500">FAQ</a>
  </nav>

  <nav class="flex gap-5 items-center">
    <a href="#">
      <img src="/icons/bag.svg" width="30px" alt="Bag icon" class="hover:scale-105 transition-all" />
    </a>
    <a href="#" class="py-[10px] px-6 text-sm bg-black hover:scale-105 transition-all rounded-xl text-white inline-block">
      Sign in
    </a>
  </nav>
</header>`;

export const reactHeader = `const menu = [
  { title: 'Diets', link: '#' },
  { title: 'Menu', link: '#' },
  { title: 'Delivery', link: '#' },
  { title: 'About Us', link: '#' },
  { title: 'Blog', link: '#' },
  { title: 'FAQ', link: '#' },
];

export const Header = () => {
  return (
    <header className="py-5 px-10 shadow bg-white min-w-[1020px] flex items-center justify-between">
      <Link href="/">
        <Image src="/fitme-logo.svg" height={50} width={100} alt="Logo" />
      </Link>

      <nav className="uppercase text-sm flex items-center flex-wrap gap-5">
        {menu.map((item, i) => (
          <Link key={i} href={item.link} className="hover:underline transition-all text-gray-500">
            {item.title}
          </Link>
        ))}
      </nav>

      <nav className="flex gap-5 items-center">
        <Link href="#">
          <Image
            src="/icons/bag.svg"
            height={30}
            width={30}
            alt="Bag icon"
            className='hover:scale-105 transition-all'
          />
        </Link>
        <Link href="#" className="py-[10px] px-6 text-sm bg-black hover:scale-105 transition-all rounded-xl text-white inline-block">
          Sign in
        </Link>
      </nav>
    </header>
  );
};
`

export const Header = () => {
  return (
    <div className="flex justify-start lg:justify-center overflow-x-auto">
      {/* TODO: HEADER ON MOBILE VIEW*/}
    <header className="py-5 px-10 shadow bg-white min-w-[1020px] flex items-center justify-between">
      <Link href="/">
        <Image src="/fitme-logo.svg" height={50} width={100} alt="Logo" />
      </Link>

      <nav className="uppercase text-sm flex items-center flex-wrap gap-5">
        {menu.map((item, i) => (
          <Link key={i} href={item.link} className="hover:underline transition-all text-gray-500">
            {item.title}
          </Link>
        ))}
      </nav>

      <nav className="flex gap-5 items-center">
        <Link href="#">
          <Image
            src="/icons/bag.svg"
            height={30}
            width={30}
            alt="Bag icon"
            className='hover:scale-105 transition-all'
          />
        </Link>
        <Link href="#" className="py-[10px] px-6 text-sm bg-black hover:scale-105 transition-all rounded-xl text-white inline-block">
          Sign in
        </Link>
      </nav>
    </header>
    </div>
  );
};
