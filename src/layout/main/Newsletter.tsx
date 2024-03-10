import './Newsletter.css'

export function Newsletter() {
  return (
    <div className="news-letter">
      <p>Recebe Nossa Newsletter</p>
      <form action="">
        <input type="text" placeholder="Digite seu e-mail"/>
        <button>Enviar</button>
      </form>
    </div>
  )
}