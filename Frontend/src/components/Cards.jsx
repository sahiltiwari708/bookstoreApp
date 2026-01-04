import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className="mt-5 my-3 px-3">
        <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline hover:text">Fashion</div>
      <div className="badge badge-outline hover:text">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards