export const getPokemonImgId = (id) => {

    console.log('long. '+id.length)
    switch (id.length) {
        case 1:
            return `00${id}`
        case 2:
          return `0${id}`
        default:
          return id
      }
    // if(id.length === 1){
    //     return `00${id}`
    // }
    // if(id.length === 2){
    //     return `0${id}`
    // }
    // if(id.length > 2){
    //     return `00${id}`
    // }
}