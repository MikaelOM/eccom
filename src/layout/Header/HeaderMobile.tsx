import './Header.css'

export function HeaderMobile() {
  return (
    <>
      <section className='header'>
        <div className='header-left'>
          <div className='drawer-menu'></div>
          <p className='logo'>Logo</p>
        </div>
        <div className='header-right'>
          <div className='search'></div>
          <div className='minicart'></div>
        </div>
      </section>
    </>
  )
}