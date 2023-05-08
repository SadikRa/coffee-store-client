import React from "react";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = event =>{
    event.preventDefault()

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {name, quantity, supplier, taste, category, details, photo}
    console.log(newCoffee)

    fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                  Swal.fire({
                    title: 'Success!',
                    text: 'user added successfully ',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                }
            })
    
  }
  return (
    <div className="container mx-auto bg-[#F4F3F0] p-28">
      <h1 className="text-center text-5xl">Add Coffee</h1>
      <p className="text-center">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddCoffee}>
        {/* from name and quantity row */}
        <div className="md:flex my-16 gap-12">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
              name="name"
                type="text"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
              name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* from Supplier and taste row */}

        <div className="md:flex my-16 gap-12">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
              name="supplier"
                type="text"
                placeholder="Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
              name="taste"
                type="text"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

{/* from Category and Details row */}

        <div className="md:flex my-16 gap-12">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
              name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
              name="details"
                type="text"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

{/* from name and quantity row */}

        <div className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
              name="photo"
                type="text"
                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" className="btn btn-block my-16" value="ADD COFFEE" />
      </form>
    </div>
  );
};

export default AddCoffee;
