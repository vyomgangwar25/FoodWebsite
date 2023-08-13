import React from 'react'
const ResmenuCard = (props) => {
  return (
      <p>{props.resData.card.info.name}-Rs{props.resData.card.info.price/100.00 || props.resData.card.info.defaultprice}</p>
       )
}
export default ResmenuCard
