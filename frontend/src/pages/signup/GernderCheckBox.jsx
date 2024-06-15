import React from 'react'

const GernderCheckBox = () => {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
              <span className='label-text'>Male</span>
              <input type="checkbox" className='checkbox border-slate-800' />
            </label>
        </div>
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text'>Female</span>
            <input type="checkbox" className='checkbox border-slate-800' id="" />
          </label>
        </div>
      
    </div>
  )
}

export default GernderCheckBox
