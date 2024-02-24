import React, { useEffect } from "react";
import "./Orderdetails.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailofselectedorder, selectedorder } from "../../redux/slice/orderslice"
const Orderdetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const theorder = useSelector(selectedorder);
  useEffect(() => {
    dispatch(detailofselectedorder(id));
  }, [dispatch, id])
  return (
    <div>
      <h2>Order Details</h2>
      <p><b>Order ID :</b>{theorder[0]?.id}</p>
      <p><b>Order Amount :</b>{theorder[0]?.orderamount}</p>
      <>
        <table>
          <thead>
            <tr>
              <th>s/n</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {theorder[0]?.orderitem.map((order, index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>
                    {order.title}
                    {/* <img src={order.image} /> */}
                  </td>
                  <td>{order.price}</td>
                  <td>{order.itemquantity}</td>
                  <td>{order.itemquantity * order.price}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    </div>
  )
}
export default Orderdetails