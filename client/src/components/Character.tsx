function Character({character}: any){
  
    return (
       <div>
        {
          character.map( data => {
            return (
              <div key = {data.id} >
                <h2>{data.name}</h2>
                <img src={data.image} alt = "Imagen" />
              </div>
            )
          } )
        }
      </div>
    )
}

export default Character

