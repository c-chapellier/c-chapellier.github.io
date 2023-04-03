import React from 'react'
import Logo from '../../components/logo/Logo'
import NavButton from '../../components/navButton/NavButton'
import { menus } from '../../utils/constants'
import './Footer.scss'

const Footer: React.FC<any> = () => {
  const socialNetworks = [
    {
      name: 'github',
      url: 'https://github.com/c-chapellier'
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/corentin-chapellier-b16432251/'
    },
    {
      name: 'email',
      url: 'mailto:chapellier.corentin@icloud.com'
    }
  ]

  return (
    <footer>
      <Logo />

      <div className='links'>
        {
          menus.map((text, index) => (
            <div key={index} className='link'>
              <NavButton key={index} index={index} text={text} />
            </div>
          ))
        }
      </div>

      <p>All rights non reserved</p>

      <div className='social-networks'>
        {
          socialNetworks.map((socialNetwork, index) => (
            <a key={index} href={socialNetwork.url} target='_blank' rel='noreferrer'>
              <img src={require(`../../assets/networks/${socialNetwork.name}.svg`)} alt={socialNetwork.name} />
            </a>
          ))
        }
      </div>

      <Logo />
    </footer>
  )
}

export default Footer
