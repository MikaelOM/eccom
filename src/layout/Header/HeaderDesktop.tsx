import './Header.css'

export function HeaderDesktop() {
  return (
    <>
      <div className='header-desktop'>
        <p className='logo'>Logo</p>
        <div className='search-desktop'>
          <input placeholder='O que você busca ?'/>
          <button>Buscar</button>
        </div>
        <div className='account-buttons-container'>
          <button className='my-account'>Minha Conta</button>
          <button className='my-account-2'>Minha Conta</button>
          <button className='minicart-desktop'>Meu Carrinho</button>
        </div>
      </div>
      <div className='menu'>
        <ul className='menu-list'>
          <li><a href="#">Novidades</a></li>
          <li><a href="#">Vestidos</a></li>
          <li><a href="#">Roupas</a></li>
          <li><a href="#">Sapatos</a></li>
          <li><a href="#">Lingerie</a></li>
          <li><a href="#">Acessórios</a></li>
          <li><a href="#">OUTLET</a></li>
        </ul>
      </div>
    </>
  )
}