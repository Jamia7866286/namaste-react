import React from 'react'

 const CatagorySectionCard = ({catagoryCard}) => {

    console.log("props section",catagoryCard)
  return (
      <li className="catagory_section">{
        catagoryCard?.name
      }</li>
  )
}
export default CatagorySectionCard
