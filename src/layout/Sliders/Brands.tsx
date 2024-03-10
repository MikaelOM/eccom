import './Brands.css'

const imageLink = [
  'https://i.imgur.com/Qoc0YF7.png',
  'https://i.imgur.com/cHLLxR4.png',
  'https://i.imgur.com/JOTNQgl.png',
  'https://i.imgur.com/PN0nOAY.png',
  'https://i.imgur.com/qZ1WvYA.png'
]

export function Brands() {
  return (
    <section className="brands">
      <h3>Marcas Parceiras</h3>
      <div className="brands-images-container">
        {imageLink.map((item) => (
          <img key={item} src={item} alt="brand image" />
        ))}
      </div>
    </section>
  )
}