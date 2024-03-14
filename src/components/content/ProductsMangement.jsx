import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSidebar } from "../ContextApi/SidebarContext";
import { motion } from "framer-motion";
import { updateProduct } from "../../reducers/productReducer";
import { useFormik } from "formik";

const ProductsMangement = () => {
  const { isSidebarOpen } = useSidebar();
  const dispatch = useDispatch();
  const ProductList = useSelector((state) => state.products.value);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(price * quantity);
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");
  const [editImg, setEditImg] = useState("");
  const [updateProductId, setUpdateProductId] = useState("");
  function onCloseModal() {
    setOpenModal(false);
  }

  const productsEditfunction = (product) => {
    setOpenModal(true);
    setUpdateProductId(product.id);
    setPrice(product.price);
    setRating(product.rating.rate);
    setQuantity(product.quantity);
    setTitle(product.title);
    setEditImg(product.image);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "required";
    } else if (values.title.length < 4) {
      errors.title = "must be greater than 4 characters";
    }
    if (!values.price) {
      errors.price = "required";
    } else if (values.price > 0) {
      errors.price = "must be greater than 0";
    }
    if (!values.rating) {
      errors.rating = "required";
    } else if (values.rating > 0) {
      errors.rating = "must be greater than 0";
    }
    if (!values.quantity) {
      errors.quantity = "required";
    } else if (values.quantity >= 0) {
      errors.quantity = "must be greater than 0";
    }
    if (!values.image) {
      errors.image = "required";
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: updateProductId, price, quantity, rating, title }));
    setOpenModal(false);
  };
  return (
    <>
      <div
        className={`  ${
          isSidebarOpen ? `ml-[200px]` : `ml-[0px]`
        } h-svh bg-slate-500   text-white no-scrollbar mt-[65px]`}>
        <div className="p-4   bg-slate-700 flex flex-wrap justify-center gap-10">
          {ProductList.map((prod) => {
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
                  <motion.button
                    className="bg-white text-black p-2 rounded "
                    initial={{ color: "black", background: "white" }}
                    whileHover={{ scale: 1.1, background: "orange", color: "white" }}
                    whileTap={{ scale: 0.9, transition: 0.5 }}
                    onClick={() => productsEditfunction(prod)}>
                    Edit
                  </motion.button>
                  <div
                    className={`modal ${
                      openModal ? "modal-open" : "modal-closed"
                    } flex justify-center items-center text-black`}
                    onClose={onCloseModal}>
                    <div
                      className="modal-content bg-slate-200"
                      onClick={(e) => e.stopPropagation()}>
                      <span
                        className=" flex justify-end cursor-pointer"
                        onClick={(e) => setOpenModal(false)}>
                        ❌
                      </span>
                      <div className="p-5 flex justify-center flex-col gap-5">
                        <form onSubmit={handleEditSubmit}>
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
                          </div>
                          <div>
                            <input
                              id="image"
                              placeholder="image url"
                              name="image"
                              value={editImg}
                              onChange={(e) => {
                                setEditImg(e.target.value);
                              }}
                              required
                              className="w-[80%] p-2 border-2 rounded-lg border-black"
                            />
                          </div>
                          <button
                            className="p-2 bg-blue-600 rounded text-white w-[100px]"
                            type="submit">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsMangement;
