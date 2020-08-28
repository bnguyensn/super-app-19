import React from 'react';
import GitHub from '../../icons/GitHub';
import Twitter from '../../icons/Twitter';

import styles from './CreatorBlock.module.css';

const SocialMediaBlock = ({ href, icon }) => {
  return (
    <a
      className="inline-block mx-2"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      {icon}
    </a>
  );
};

export default function CreatorBlock({
  name,
  avatarSrc,
  description,
  homepage,
  twitter,
  github,
}) {
  return (
    <div className="flex flex-col items-center flex-1 px-2">
      {/* AVATAR */}

      <a target="_blank" rel="noreferrer" href={homepage}>
        <img
          className={`w-20 h-20 md:w-32 md:h-32 rounded-full shadow ${styles.avatar}`}
          src={avatarSrc}
          alt={`Photo of ${name}`}
        />
      </a>

      {/* NAME & DESCRIPTION */}

      <div className="my-4">
        <h6 className="text-center">{name}</h6>

        <p className="my-4 text-center text-gray-700">{description}</p>

        <div className="flex justify-center items-center">
          {twitter && (
            <SocialMediaBlock
              href={twitter}
              icon={<Twitter className="w-6 h-6" />}
            />
          )}
          {github && (
            <SocialMediaBlock
              href={github}
              icon={<GitHub className="w-6 h-6" />}
            />
          )}
        </div>
      </div>
    </div>
  );
}
