import Navbar from '../Components/Navbar'
export default function Layout({ children }) {
    return (
    <>
     <Navbar />
     <main>
      {children}
     </main>
     <img src="/images/profile.jpg" alt="Your Name" />
    </>

    )
  }