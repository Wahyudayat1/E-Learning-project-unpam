import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <p className=''>&copy; 2025 SiRumed. All Right Reserved.</p>
        <div className="footer__links">
            {['Tentang Kami', 'Kebijakan Privasi', 'Syarat & Ketentuan'].map((item) => (
                <Link key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className='footer__link'>
                    {item}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Footer