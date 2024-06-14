// components/Contact.tsx
import styles from './Contact.module.css';

const Contact = () => (
  <section className={styles.contact}>
    <h1>Contact</h1>
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;