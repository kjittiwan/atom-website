import React from 'react'
import { ImFacebook, ImTwitter, ImInstagram, ImYoutube} from 'react-icons/im'
export default function Socials() {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-6'>
        <li>
          <a href="http://www.facebook.com" target='_blank'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="http://www.twitter.com" target='_blank'>
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="http://www.instagram.com" target='_blank'>
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="http://www.youtube.com" target='_blank'>
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  )
}
