import { SocialIcon } from 'react-social-icons';
import React from 'react';
import styles from './styles.module.scss';

const SocialLinks = () => {
  return (
    <div>
      <ul className={styles.links}>
        <li>
          <SocialIcon
            fgColor='#ffffff'
            url="https://www.linkedin.com/in/carlos-em%C3%ADdio-02058a119/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
        <li>
          <SocialIcon
            fgColor='#ffffff'
            url="https://www.instagram.com/carlosemidio11/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
        <li>
          <SocialIcon
            fgColor='#ffffff'
            url="https://www.facebook.com/carlosemidio11"
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
        <li>
          <SocialIcon
            fgColor='#ffffff'
            url="https://web.whatsapp.com/send?phone=5584991911006"
            target="_blank"
            rel="noopener noreferrer"
          />
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
