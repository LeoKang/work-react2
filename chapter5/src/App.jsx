import './App.css'

const Header2 = () => {
  return (
    <header>
      <h1>header2</h1>
    </header>
  )
}

function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Header2 />
    </div>
  )
}

export default App
