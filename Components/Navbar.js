import Link from 'next/link'
export default function Navbar() {
    return (
      <>
       <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/contact"><a>contact</a></Link></li>
       </ul>
     
        
        
      </>
    )
  }