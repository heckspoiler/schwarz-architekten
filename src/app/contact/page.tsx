import { Metadata } from 'next';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import Bounded from '@/components/containers/Bounded';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import Image from 'next/image';
import TitleContainer from '@/components/containers/project/TitleContainer';
import styles from './Contact.module.css';
import TextblockContainer from '@/components/containers/project/TextblockContainer';
import mailImageSrc from 'public/icons/mail.svg';
import Arrow from '@/components/Arrow';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('contact');

  return (
    <Bounded>
      <TitleContainer>
        <section className={styles.TitleSection}>
          <PrismicRichText field={page.data.contact_title} />
        </section>
      </TitleContainer>
      <section className={styles.ContentSection}>
        <TextblockContainer>
          <div className={styles.DescriptionContainer}>
            <PrismicRichText field={page.data.contact_description_upper} />
          </div>
        </TextblockContainer>
        <TextblockContainer>
          <section className={styles.ContactSection}>
            <section className={styles.FormContainer}>
              <form className={styles.Form}>
                <div className={styles.FormUpperSection}>
                  <label className={styles.Label}>
                    <span className={styles.LabelWithStar}>
                      Vorname <span className={styles.RequiredStar}>*</span>
                    </span>
                    <input
                      type="text"
                      name="name"
                      className={styles.Input}
                      required
                    />
                  </label>
                  <label className={styles.Label}>
                    <span className={styles.LabelWithStar}>
                      Nachname <span className={styles.RequiredStar}>*</span>
                    </span>
                    <input
                      type="text"
                      name="surname"
                      className={styles.Input}
                      required
                    />
                  </label>
                </div>
                <div className={styles.FormLowerSection}>
                  <label className={styles.Label}>
                    <span className={styles.LabelWithStar}>
                      Telefonnummer{' '}
                      <span className={styles.RequiredStar}>*</span>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      className={styles.Input}
                      required
                    />
                  </label>
                  <label className={styles.Label}>
                    <span className={styles.LabelWithStar}>
                      Email <span className={styles.RequiredStar}>*</span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      className={styles.Input}
                      required
                    />
                  </label>
                </div>
                <label className={styles.Label}>
                  <span className={styles.LabelWithStar}>Ihre Nachricht </span>
                  <textarea
                    name="message"
                    className={styles.Textarea}
                    required
                  />
                </label>
                <button type="submit" className={styles.Button}>
                  Senden
                </button>
              </form>
            </section>
            <section className={styles.AddressSection}>
              <h3>Kontakt</h3>
              <div className={styles.Address}>
                <h4>Dietrich Schwarz Architekten AG</h4>
                <p>Seefeldstrasse 224</p>
                <p>CH-8008 Zürich</p>
              </div>
              <div className={styles.Contact}>
                <div className={styles.Email}>
                  <Image
                    src="/icons/phone.svg"
                    width={18}
                    height={18}
                    alt="Phone Symbol"
                  />
                  <a href="tel:+41443891060">+41 (0) 44 389 10 60</a>
                </div>
                <div className={styles.Email}>
                  <Image
                    src="/icons/email.svg"
                    width={18}
                    height={18}
                    alt="Email Symbol"
                  />
                  <a href="mailto: info@schwarz-architekten.com">
                    info@schwarz-architekten.com
                    <span className={styles.Arrow}>
                      <Arrow />
                    </span>
                  </a>
                </div>
              </div>
            </section>
          </section>
        </TextblockContainer>
      </section>
      <TextblockContainer>
        <PrismicRichText field={page.data.contact_subtitle} />
        <SliceZone slices={page.data.slices} components={components} />
      </TextblockContainer>
    </Bounded>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('contact');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
