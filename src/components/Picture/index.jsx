const Picture = ({ picture, title }) => {
          return (
                    <div>
                              <img src={picture} alt={title} className='w-5/6 rounded-md border-2 border-orange-600' />
                    </div>
          )
}

export default Picture;