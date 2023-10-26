import { Navbar, Header, Services, Footer } from "../components"

const Home = () => {
  return (
    <div className="w-[100%] overflow-hidden">
     <div className="bg-office bg-cover bg-no-repeat bg-center h-[80vh]">
      <div className="bg-blue/30 w-[100%] h-[80vh]">
       <Navbar/>
       <Header/>
      </div>
     </div>
     <Services/>
     <Footer/>
    </div>
  )
}

export default Home