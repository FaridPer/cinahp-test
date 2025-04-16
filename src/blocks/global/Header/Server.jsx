import { getPayload } from 'payload'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import './header.css'
import Link from 'next/link'
import SearchBar from './search'
import { FaFacebookF, FaInstagram, FaYoutube,FaBars } from 'react-icons/fa'; // Importar íconos de Facebook, Twitter, Instagram, YouTube
import { AiFillTwitterCircle } from 'react-icons/ai'; 

export default async function HeaderServer() {
    const payload = await getPayload({ config })
    const header = await payload.findGlobal({
        slug: 'header',
        depth: 2,
    })
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={header.logo.url} alt="INAH Puebla Logo" className="logo-img" />
          <Image src={header.logo.url}
          className='logo-img' alt={header.logo.alt}
          width={0}
          height={0}
          ></Image>
        </div>
        <div className="social-icons" id="iconos">
          <a href="https://www.facebook.com/share/16GPxc3FCi/" target="_blank" ><FaFacebookF /></a>
          <a href="https://x.com/centroinahpue?lang=es" target="_blank"><AiFillTwitterCircle /></a> {/* Twitter (X) */}
          <a href="https://www.instagram.com/centroinahpuebla/" target="_blank"><FaInstagram /></a>
          <a href="https://www.youtube.com/@centroinahpuebla5005" target="_blank"><FaYoutube /></a> {/* YouTube */}
        </div>
      </div>
      <div className="nav-container">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FaBars/>
        </label>
        <ul>
          {header.nav.map((item,index)=>{
            return (
              <li key={item.id}> {/* Using 'item.link' as the unique key */}
                <Link href={item.link}>{item.label}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <SearchBar/>
      </div>
    </header>
  )
}
