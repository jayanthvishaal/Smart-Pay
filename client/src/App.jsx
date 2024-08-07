import { Navbar, Welcome, Footer, Services, Transactions } from "./components"

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
          <Transactions /> 
          {/* <Footer />   */}
        </div>
        <Services />
      </div>
    </>
  )
}

export default App
