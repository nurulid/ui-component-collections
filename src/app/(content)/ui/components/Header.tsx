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

export const htmlHeader = `<header className="py-10">
<nav className="flex items-center justify-between">
  <img src="/images/Logo.svg" height="34px" alt="Logo" />
  <ul className="nav-menu uppercase text-sm flex items-center flex-wrap gap-5">
    <li>
      <a href="#">Diets</a>
    </li>
    <li>
      <a href="#">Calorie calculator</a>
    </li>
    <li>
      <a href="#">Menu</a>
    </li>
    <li>
      <a href="#">Delivery</a>
    </li>
    <li>
      <a href="#">About Us</a>
    </li>
    <li>
      <a href="#">Blog</a>
    </li>
    <li>
      <a href="#">FAQ</a>
    </li>
  </ul>

  <ul className="flex gap-5 items-center">
    <li>
      <a href="#">
        <img src="/icons/bag.svg" alt="" />
      </a>
    </li>
    <li>
      <a href="#" className="btn-link">
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
              <a href={item.url} className="hover:underline transition-all text-gray-500">
                {item.title}
              </a>
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
      <nav className="nav-menu flex items-center justify-between">
        <Link href="/">
          <Image src="/fitme-logo.svg" height={50} width={100} alt="Logo" />
        </Link>

        <ul className="nav-menu uppercase text-sm flex items-center flex-wrap gap-5">
          {menu.map((item, i) => (
            <li key={i}>
              <a href={item.url} className="hover:underline transition-all text-gray-500">
                {item.title}
              </a>
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
};
