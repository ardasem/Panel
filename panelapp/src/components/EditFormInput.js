import React from 'react'

function EditFormInput({data}) {
  return (
    <div class="relative">
    <input
      type="search"
      id="default-search"
      class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
      placeholder={data}
      required
    />
  </div>
  )
}

export default EditFormInput