import {
  Input,
  InputGrid,
  Label,
  SelectInput,
  SubmitButton
} from '@/components/twin'
import React from 'react'

const AddProduct = () => {
  return (
    <div>
      <p className="pt-3 text-lg mb-5 font-bold ">Products</p>
      <p>Upload Product Image (max 5)</p>
      <div className="space-x-2">
        {Array.from(Array(5).keys()).map((_v) => (
          <>
            <label
              htmlFor="file-upload"
              className="inline-block px-4 py-4 text-black border border-secondary bg-white rounded-main cursor-pointer"
            >
              Browse image
            </label>
            <input type="file" id="file-upload" className="hidden" />
          </>
        ))}
      </div>
      <InputGrid>
        {/* Product Name */}
        <div className="sm:col-span-3">
          <Label>Product name</Label>
          <Input placeholder="XYZ" />
        </div>
        {/* Product Size */}
        <div className="sm:col-span-3">
          <Label htmlFor="country">Product size</Label>
          <div className="mt-2">
            <SelectInput
              id="country"
              name="country"
              placeholder={'Select'}
              value={1}
            >
              <option value="1" selected disabled hidden>
                Select
              </option>
              <option>IT</option>
              <option>Clothing</option>
              <option>Marketing</option>
            </SelectInput>
          </div>
        </div>
        {/* Store name */}
        <div className="sm:col-span-3">
          <Label>Store name</Label>
          <Input placeholder="XYZ" />
        </div>
        {/* Store URL */}
        <div className="sm:col-span-3">
          {/* // TODO select dropdown */}
          <Label htmlFor="country">Store URL</Label>
          <div className="mt-2">
            <SelectInput
              id="country"
              name="country"
              placeholder={'Select'}
              value={1}
            >
              <option value="1" selected disabled hidden>
                Select
              </option>
              <option>IT</option>
              <option>Clothing</option>
              <option>Marketing</option>
            </SelectInput>
          </div>
        </div>
        {/* Product URL */}
        <div className="sm:col-span-3">
          <Label>Product URL</Label>
          <Input placeholder="XYZ" />
        </div>
        <div className="sm:col-span-3">
          {/* // TODO select dropdown */}
          <Label htmlFor="country">ASIN/ISBN</Label>
          <div className="mt-2">
            <SelectInput
              id="country"
              name="country"
              placeholder={'Select'}
              value={1}
            >
              <option value="1" selected disabled hidden>
                Choose ASIN / ISBN
              </option>
              <option>ASIN</option>
              <option>ISBN</option>
            </SelectInput>
          </div>
        </div>
        <div className="col-span-full">
          <Label>ASIN Number</Label>
          <Input placeholder="XYZ" />
        </div>
        <div className="sm:col-span-3 flex space-x-2">
          <div>
            <Label>Dimentions</Label>
            <Input placeholder="XYZ" />
          </div>
          <div>
            <Label className="!text-transparent">|</Label>
            <Input />
          </div>
          <div>
            <Label className="!text-transparent">|</Label>
            <Input />
          </div>
        </div>
        <div className="sm:col-span-3">
          <Label>Weight</Label>
          <Input placeholder="XYZ" />
        </div>
        <div className="col-span-full">
          {/* // TODO select dropdown */}
          <Label htmlFor="country">Product Category</Label>
          <div className="mt-2">
            <SelectInput
              id="country"
              name="country"
              placeholder={'Select'}
              value={1}
            >
              <option value="1" selected disabled hidden>
                Select
              </option>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </SelectInput>
          </div>
        </div>
        <div className="col-span-full">
          <Label>Title (max 50 characters)</Label>
          <Input placeholder="XYZ" />
        </div>
        <div className="col-span-full">
          <Label htmlFor="about">Main features (max 250 characters)</Label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              placeholder="lorem ispum..."
              rows={3}
              className="block w-full rounded-main border border-secondary py-3 px-2 text-gray-900"
            />
          </div>
        </div>
        <div className="col-span-full">
          <Label htmlFor="about">Descriptions (max 250 characters)</Label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              placeholder="lorem ispum..."
              rows={3}
              className="block w-full rounded-main border border-secondary py-3 px-2 text-gray-900"
            />
          </div>
        </div>
        <div className="col-span-full">
          <Label htmlFor="about">
            Other available colors, size, models (max 250 characters)
          </Label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              placeholder="lorem ispum..."
              rows={3}
              className="block w-full rounded-main border border-secondary py-3 px-2 text-gray-900"
            />
          </div>
        </div>
      </InputGrid>
      <fieldset className="my-5">
        <p>Can BaakMart visitors test your products?</p>
        <div className="my-6 flex space-x-6">
          <div className="flex items-center gap-x-3">
            <input
              id="push-everything"
              name="push-notifications"
              type="radio"
              className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="push-everything"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Yes
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="push-email"
              name="push-notifications"
              type="radio"
              className="h-6 w-6 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="push-email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              No
            </label>
          </div>
        </div>
      </fieldset>
      <InputGrid>
        <div className="col-span-full">
          <Label htmlFor="about">Additional address information</Label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              value={'Reason why No'}
              placeholder="lorem ispum..."
              rows={2}
              className="block w-full rounded-main border border-secondary py-3 px-2 text-gray-900"
            />
          </div>
        </div>
        <div className="col-span-full">
          <Label htmlFor="about">
            Do you have any special request regarding testing your product?
          </Label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              placeholder="lorem ispum..."
              rows={2}
              className="block w-full rounded-main border border-secondary py-3 px-2 text-gray-900"
            />
          </div>
        </div>
      </InputGrid>
      <div className="mt-2">
        <span className="font-bold">NOTE:</span>
        <span className="ml-2">
          You can't edit details later, except title, description, main features
          and models. If you need to change other details, We recommended you to
          cancel the Baak Slot, and book a new one
        </span>
      </div>
      <SubmitButton>Add Product</SubmitButton>
    </div>
  )
}

export default AddProduct
