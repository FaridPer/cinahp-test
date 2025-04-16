import React from 'react'
import './footer.css'
import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'

export default async function FooterServer() {
  const payload = await getPayload({ config })
      const footer = await payload.findGlobal({
          slug: 'footer',
          depth: 2,
      })
  return (
    <footer id="footer">
                <div className="footer-logos">
                  {footer.logo?.url && <img src={footer.logo.url} alt="Logo" className="footer-logo-an"/>}
                </div>
                <div className="footer-bottom">
                  {footer["secundary-logo"]?.url && <img src={footer["secundary-logo"].url} alt="Secondary Logo" />}
                  {footer.nav.map((item,index)=>{
                    return (
                      <p key={item.id} >
                        <Link key={index} href={item.link} className="footer-bottom">{item.label} </Link>
                      </p>
                    )
                  })}
                </div>
    </footer>
  )
}
