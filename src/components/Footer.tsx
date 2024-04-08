import React from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import Arrow from './Arrow';

import styles from './Footer.module.css';

export async function Footer() {
  const client = createClient();

  const footer = await client.getSingle('footer');

  return (
    <footer className={styles.Footer}>
      <section className={styles.Main}>
        <section
          className={`${styles.SubcontainerUpper} ${styles.LogoContainer}`}
        >
          <a href="/">
            <PrismicNextImage
              field={footer.data.logo}
              className={styles.Logo}
            />
          </a>
        </section>
        <section
          className={`${styles.SubcontainerUpper} ${styles.AddressContainer}`}
        >
          <section className={styles.AddressOutter}>
            <section className={styles.AddressData}>
              {footer.data.address.map(({ label, value }) => (
                <p key={label} className={styles.AddressData}>
                  {value}
                </p>
              ))}
            </section>
            <section className={styles.ContactData}>
              {footer.data.contact.map(({ label, value }) => (
                <p key={label} className={styles.ContactData}>
                  {value}
                </p>
              ))}
            </section>

            <section className={styles.Social}>
              {footer.data.social.map(({ icon, link }) => (
                <a
                  key={icon?.url ?? `key-${icon}`}
                  href={link ?? ''}
                  target="_blank"
                  className={styles.SocialLink}
                >
                  <PrismicNextImage field={icon} />
                </a>
              ))}
            </section>
          </section>
        </section>
        <div className={styles.LinkContainer}>
          <section
            className={`${styles.SubcontainerUpper} ${styles.InternalContainer}`}
          >
            <ul>
              {footer.data.internal_nav.map(({ link, label }) => (
                <li key={label} className={styles.Listobject}>
                  <PrismicNextLink field={link} className={styles.Link}>
                    <span className={styles.Linkspan}>{label}</span>
                    <Arrow />
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </section>
          <section
            className={`${styles.SubcontainerUpper} ${styles.ExternalContainer}`}
          >
            <ul>
              {footer.data.external_nav.map(({ label, link }) => (
                <li key={label} className={styles.Listobject}>
                  <a href={link ?? ''} target="_blank" className={styles.Link}>
                    <span className={styles.Linkspan}>{label}</span>
                    <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
      <section className={`${styles.SubcontainerUpper} ${styles.MapContainer}`}>
        <a
          href="https://www.google.com/maps/place/Dietrich+Schwarz+Architekten+ETH%2FSIA/@47.3523211,8.5566546,17z/data=!3m1!4b1!4m6!3m5!1s0x479aa7cfdd328a73:0x36f2b2b6993200e8!8m2!3d47.3523211!4d8.5592295!16s%2Fg%2F11t7m_y3l1?entry=ttu"
          target="_blank"
        >
          <PrismicNextImage field={footer.data.map} />
        </a>
      </section>
      <p className={styles.Copyright}>© {new Date().getFullYear()}</p>
    </footer>
  );
}
