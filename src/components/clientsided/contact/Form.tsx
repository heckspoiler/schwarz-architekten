'use client';

import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Arrow from '@/components/Arrow';
import emailStore from '@/stores/EmailStore';
import { PrismicLink } from '@prismicio/react';

export const Form = ({ styles }: { styles: any }) => {
  const {
    firstname,
    setFirstname,
    surname,
    setSurname,
    phone,
    setPhone,
    email,
    setEmail,
    message,
    setMessage,
  } = emailStore((state) => ({
    ...state,
  }));

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [checkboxClicked, setCheckboxClicked] = useState(false);

  const resetForm = () => {
    setFirstname('');
    setSurname('');
    setPhone('');
    setEmail('');
    setMessage('');
    setCheckboxClicked(false);
  };

  const customerMail = async () => {
    try {
      const formData = {
        to: email,
        subject: 'Kontaktformular Schwarz Architekten AG',
        message: message,
        surname: surname,
        firstname: firstname,
        phone: phone,
      };
      const response = await fetch('/api/contact/customermail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email', error);
    }
  };

  const ourMail = async () => {
    try {
      const formData = {
        to: email,
        subject: 'Kontaktformular Website',
        message: message,
        surname: surname,
        firstname: firstname,
        phone: phone,
      };
      const response = await fetch('/api/contact/ourmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log(isSending);
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email', error);
    }
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await customerMail();
      await ourMail();
      setIsSent(true);
    } catch (error) {
      console.error('Error in sending emails', error);
      setIsSent(false);
    } finally {
      resetForm();
      setIsSending(false);
    }
  };

  return (
    <section className={styles.ContactSection}>
      <section className={styles.FormContainer}>
        <form
          className={styles.Form}
          onSubmit={(e: FormEvent<HTMLFormElement>) => sendEmail(e)}
        >
          <div className={styles.FormUpperSection}>
            <label htmlFor="firstname" className={styles.Label}>
              <span className={styles.LabelWithStar}>
                Vorname <span className={styles.RequiredStar}>*</span>
              </span>
              <input
                id="firstname"
                type="text"
                name="name"
                className={styles.Input}
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </label>
            <label htmlFor="surname" className={styles.Label}>
              <span className={styles.LabelWithStar}>
                Nachname <span className={styles.RequiredStar}>*</span>
              </span>
              <input
                id="surname"
                type="text"
                name="surname"
                className={styles.Input}
                required
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.FormLowerSection}>
            <label htmlFor="phone" className={styles.Label}>
              <span className={styles.LabelWithStar}>
                Telefonnummer <span className={styles.RequiredStar}>*</span>
              </span>
              <input
                id="phone"
                type="tel"
                name="phone"
                className={styles.Input}
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <label htmlFor="email" className={styles.Label}>
              <span className={styles.LabelWithStar}>
                Email <span className={styles.RequiredStar}>*</span>
              </span>
              <input
                id="email"
                type="email"
                name="email"
                className={styles.Input}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <label htmlFor="message" className={styles.Label}>
            <span className={styles.LabelWithStar}>Ihre Nachricht </span>
            <textarea
              id="message"
              name="message"
              className={styles.Textarea}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <div className={styles.CheckboxContainer}>
            <label htmlFor="checkbox" className={styles.CheckboxLabel}>
              <span className={styles.Checkbox}>Ich bin kein Roboter </span>
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                required
                value={message}
                onChange={() => setCheckboxClicked(!checkboxClicked)}
              />
            </label>
            <p>
              Mit dem Absenden des Formulars stimme ich den{' '}
              <PrismicLink href="/privacy-policy" target="_blank">
                Datenschutzbestimmungen
              </PrismicLink>
              <span> zu</span>
            </p>
          </div>

          <button
            type="submit"
            className={styles.Button}
            disabled={isSending || !checkboxClicked}
          >
            {isSending ? (
              <div className={styles.SendingIndicator}>
                <div className={styles.InnerIndicator}></div>
              </div>
            ) : isSent ? (
              'Gesendet!'
            ) : (
              'Senden'
            )}
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
            <Link href="tel:+41443891060">+41 (0) 44 389 10 60</Link>
          </div>
          <div className={styles.Email}>
            <Image
              src="/icons/email.svg"
              width={18}
              height={18}
              alt="Email Symbol"
            />
            <Link href="mailto: info@schwarz-architekten.com">
              info@schwarz-architekten.com
              <span className={styles.Arrow}>
                <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};
