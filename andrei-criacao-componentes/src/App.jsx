import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import News from './components/News'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {

  const headerMsg = 'Meu Website'
  const menuLinkList = [
    {id: 1, name: 'Home', href: '#home'},
    {id: 2, name: 'Notícias', href: '#news'},
    {id: 3, name: 'Contato', href: '#contact'},
    {id: 4, name: 'Sobre', href: '#about'}
  ]
  const newsTitle = 'Últimas Notícias'
  const newsList = [
    {id: 1, name: 'Notícia 1...'},
    {id: 2, name: 'Notícia 2...'}
  ]
  const sidebarTitle = 'Artigos Recomendados'
  const sidebarArticleList = [
    {id: 1, name: 'Artigo 1'},
    {id: 2, name: 'Artigo 2'},
    {id: 3, name: 'Artigo 3'}
  ]
  const footerMsg = '© 2024 Meu Website. Todos os direitos reservados.'

  return (
    <>
      <Header message={headerMsg} />
      <Menu linkList={menuLinkList} />
      <News title={newsTitle} newsList={newsList} />
      <Sidebar title={sidebarTitle} articleList={sidebarArticleList} />
      <Footer message={footerMsg} />
    </>
  )
}

export default App
