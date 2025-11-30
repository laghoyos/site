'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/about" className="logo">
          <Image
            src="/images/me.jpg"
            alt="Luis A Guerrero Hoyos"
            width={200}
            height={200}
            priority
          />
        </Link>
        <header>
          <h2>Luis A&apos;Guerrero Hoyos</h2>
          <p>
            <a href="mailto:laghoyos@gmail.com">laghoyos@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I&apos;m Luis Angel. I am a geospatial and remote sensing engineer
          with applications to to the civil and environmental engineering
          industries. I am a{' '}
          <a href="https://www.washington.edu/">
            University of Washington (UW)
          </a>
          alumnus.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Luis A&apos;Guerrero Hoyos
          <Link href="/">https://laghoyos.github.io/site/</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
