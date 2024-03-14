import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSidebar } from "../ContextApi/SidebarContext";
import { motion } from "framer-motion";
import { addProduct, deleteProduct, updateProduct } from "../../reducers/productReducer";

const ProductsMangement = () => {
  const { isSidebarOpen } = useSidebar();
  const dispatch = useDispatch();
  const ProductList = useSelector((state) => state.products.value);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [rating, setRating] = useState("");
  const [userCount, setUsersCount] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [updateProductId, setUpdateProductId] = useState("");
  function onCloseModal() {
    setOpenModal(false);
  }
  const productsDeleteFunction = (id) => {
    dispatch(deleteProduct(id));
  };

  const productsEditfunction = (product) => {
    setOpenModal(true);
    setUpdateProductId(product.id);
    setPrice(product.price);
    setRating(product.rating.rate);
    setQuantity(product.quantity);
    setTitle(product.title);
    setImage(product.image);
    setUsersCount(product.rating.count);
    setIsEditing(true);
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;
    if (!title) {
      errors.title = "required";
      isValid = false;
    }
    if (!price) {
      errors.price = "required";
      isValid = false;
    }
    if (!rating) {
      errors.rating = "required";
      if (rating < 0 && rating > 5) {
        errors.rating = "must be between 0 and 5";
        isValid = false;
      }
    }
    if (!userCount) {
      errors.userCount = "required";
      if (userCount <= 0) {
        errors.userCount = "must be greaterthan 0 ";
        isValid = false;
      }
    }
    if (!quantity) {
      errors.quantity = "required";
      if (quantity <= 0) {
        errors.quantity = "must be greater than 0";
        isValid = false;
      }
    }
    if (!image) {
      errors.image = "required";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(
        updateProduct({ id: updateProductId, price, quantity, rating, title, userCount, image })
      );
      setOpenModal(false);
    }
  };
  const handleAddProduct = () => {
    setOpenModal(true);
    setPrice(0);
    setRating("");
    setQuantity(0);
    setTitle("");
    setImage("");
    setUsersCount("");
    setIsEditing(false);
  };
  const handleAddProductSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let newId = ProductList.length + 1;
      dispatch(
        addProduct({
          id: newId,
          price,
          quantity,
          rating: { rate: rating, count: userCount },
          title,
          userCount,
          image,
        })
      );
      setOpenModal(false);
    }
  };
  return (
    <>
      <div
        className={`  ${
          isSidebarOpen ? `ml-[200px]` : `ml-[0px]`
        } h-svh bg-black   text-white no-scrollbar mt-[65px]`}>
        <h1 className="text-3xl grid place-items-center mb-5 p-4 font-mono">All Products</h1>
        <div className="flex justify-between ml-5 mr-5 mb-5">
          <button
            className="bg-blue-400 p-3 rounded"
            onClick={() => {
              handleAddProduct();
            }}>
            AddProduct
          </button>
          <h1 className="bg-blue-400 p-3 rounded">{`Total Products-${ProductList.length}`}</h1>
        </div>
        <div className="p-4 bg-slate-700 flex flex-wrap justify-center gap-10">
          {ProductList?.map((prod) => {
            return (
              <div key={prod.id} className="flex flex-col gap-2 mb-5 font-mono">
                <div className="relative">
                  <img
                    src={`${prod.image}`}
                    alt={`${prod.title}`}
                    className="w-[210px] h-[280px] object-cover relative rounded-lg"
                  />
                  <div className="absolute top-63 bottom-0 mb-1 ml-1 bg-slate-300 text-black font-bold px-2 flex items-center rounded-lg ">
                    <span className="border-r-2 mr-1 my-1 border-black">{prod.rating.rate}⭐</span>
                    <span>{prod.rating.count}</span>
                  </div>
                </div>
                <div>
                  <div className=" w-[160px] truncate">{prod.title}</div>
                  <div>quantity-{prod.quantity}</div>
                  <span className="mr-3">₹{prod.price}</span>
                  <span className="line-through text-slate-400 mr-3">₹{prod.price * 2}</span>
                </div>
                <div className="flex justify-between">
                  <motion.button
                    className="bg-white text-black p-2 rounded "
                    initial={{ color: "black", background: "white" }}
                    whileHover={{ scale: 1.1, background: "orange", color: "white" }}
                    whileTap={{ scale: 0.9, transition: 0.5 }}
                    onClick={() => productsEditfunction(prod)}>
                    Edit
                  </motion.button>
                  <motion.button
                    className="bg-white text-black p-2 rounded "
                    initial={{ color: "black", background: "white" }}
                    whileHover={{ scale: 1.1, background: "red", color: "white" }}
                    whileTap={{ scale: 0.9, transition: 0.5 }}
                    onClick={() => productsDeleteFunction(prod.id)}>
                    Delete
                  </motion.button>
                </div>
              </div>
            );
          })}
          <div
            className={`modal ${
              openModal ? "modal-open" : "modal-closed"
            } flex justify-center items-center text-black`}
            onClose={onCloseModal}>
            <div className="modal-content bg-slate-200" onClick={(e) => e.stopPropagation()}>
              <span
                className=" flex justify-end cursor-pointer"
                onClick={(e) => setOpenModal(false)}>
                ❌
              </span>
              <div className="p-5 flex justify-center flex-col gap-5">
                <form onSubmit={isEditing ? handleEditSubmit : handleAddProductSubmit}>
                  <div>
                    <input
                      id="title"
                      placeholder="enter product"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      name="title"
                      required
                      className="w-[80%] p-2 border-2 rounded-lg border-black"
                    />
                    {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
                  </div>
                  <div>
                    <input
                      id="quantity"
                      placeholder="enter quantity"
                      name="quantity"
                      value={quantity}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                      required
                      className="w-[80%] p-2 border-2 rounded-lg border-black"
                    />
                    {errors.quantity && (
                      <p className="text-red-500 text-xs italic">{errors.quantity}</p>
                    )}
                  </div>

                  <div>
                    <input
                      id="price"
                      placeholder="enter price"
                      name="price"
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      required
                      className="w-[80%] p-2 border-2 rounded-lg border-black"
                    />
                    {errors.price && <p className="text-red-500 text-xs italic">{errors.price}</p>}
                  </div>

                  <div>
                    <input
                      id="image"
                      placeholder="image url"
                      name="image"
                      value={image}
                      onChange={(e) => {
                        setImage(e.target.value);
                      }}
                      required
                      className="w-[80%] p-2 border-2 rounded-lg border-black"
                    />
                    {errors.image && <p className="text-red-500 text-xs italic">{errors.image}</p>}
                  </div>
                  <div>
                    <input
                      id="rating"
                      placeholder="edit rating"
                      name="rating"
                      value={rating}
                      onChange={(e) => {
                        setRating(e.target.value);
                      }}
                      required
                      className="w-[80%] p-2 border-2 rounded-lg border-black"
                    />
                    {errors.rating && (
                      <p className="text-red-500 text-xs italic">{errors.rating}</p>
                    )}
                  </div>
                  <div>
                    <input
                      id="count"
                      placeholder="user count"
                      name="count"
                      value={userCount}
                      onChange={(e) => {
                        setUsersCount(e.target.value);
                      }}
                      required
                      className="w-[80%] p-2 border-2 rounded-lg border-black"
                    />
                    {errors.userCount && (
                      <p className="text-red-500 text-xs italic">{errors.userCount}</p>
                    )}
                  </div>
                  <button className="p-2 bg-blue-600 rounded text-white w-[100px]" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsMangement;
