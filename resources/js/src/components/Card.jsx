const Card = ({title, content}) => {
  return (
    <div className='card border border-gray-300 p-5 rounded-md w-96 mx-2 my-2 text-left font-montserrat hover:shadow-cardShadow'>
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        <p className="text-sm">{content}</p>
    </div>
  )
}

export default Card