"use client";

import { FiGithub, FiGlobe, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { profile } from "@/data/cv";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.role}>{profile.role}</p>

      <address className={styles.address}>
        <ul className={styles.contactRow} aria-label="Contact details">
          <li className={styles.contactItem}>
            <FiMapPin aria-hidden="true" />
            <span>{profile.location}</span>
          </li>
          <li className={styles.contactItem}>
            <FiPhone aria-hidden="true" />
            <a href={profile.phoneHref}>{profile.phone}</a>
          </li>
          <li className={styles.contactItem}>
            <FiMail aria-hidden="true" />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
        </ul>

        <ul className={styles.linksRow} aria-label="Portfolio and social profiles">
          <li className={styles.linkItem}>
            <FiGlobe aria-hidden="true" />
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.websiteLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span className={styles.separator} aria-hidden="true">
              |
            </span>
          </li>
          <li className={styles.linkItem}>
            <FiGithub aria-hidden="true" />
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              {profile.githubLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span className={styles.separator} aria-hidden="true">
              |
            </span>
          </li>
          <li className={styles.linkItem}>
            <FiLinkedin aria-hidden="true" />
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              {profile.linkedinLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </address>

      <div className={styles.divider} aria-hidden="true" />
    </header>
  );
}