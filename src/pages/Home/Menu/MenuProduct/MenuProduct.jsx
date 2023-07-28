import './MenuProduct.css'
import React, {useEffect, useState} from "react";
import {AddOrderToCart} from "../../../../services/WebServices";
import {addToCart} from "../../../../redux/Cart/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import Loading from "../../../../components/Loading";
import Quantity from "../../../../components/Quantity";

export default function MenuProduct({data}) {
    const [hovered, setHovered] = useState(false)
    const [addOrderLoading, setAddOrderLoading] = useState(false)
    const cartOrders = useSelector((state) => state.cart.cartOrders);
    const [cartOrder, setCartOrder] = useState({id: -1, quantity: 0})
    const dispatch = useDispatch();

    const imagePath = process.env.PUBLIC_URL + `/images/${data.image}`;


    useEffect(() => {
        const foundOrder = cartOrders.find((order) => order.id === data.id);
        setCartOrder(foundOrder);
    }, [data.id, cartOrders]);

    function handleAddToCart() {
        setAddOrderLoading(true)
        AddOrderToCart(data.id).then(result => {
            if (result.status === 200)
                dispatch(addToCart({id: data.id, quantity: 1}))
            setAddOrderLoading(false)
        }).catch(error => {
            console.log(error)
            setAddOrderLoading(false)
        })
    }

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className='menu-item'>
            <div className='image'>
                <img src={imagePath} alt=""/>
            </div>
            <p className='name'>{data.name}</p>
            <p className='description'>{data.description}</p>
            <div className='add-to-cart-and-price'>
                <div className={'add-to-cart ' + (hovered || (cartOrder && cartOrder.quantity !== 0)  ? 'show-add-button' : '')}>
                    {
                        cartOrder && cartOrder.quantity > 0 ?
                            <Quantity productQuantity={cartOrder.quantity} productId={cartOrder.id}
                                      inputTextColor='var(--c-primary)'/> :
                            <button className='add-to-cart-button' onClick={handleAddToCart}>
                                {addOrderLoading ? <Loading size={16}/> : 'Add to cart'}
                            </button>
                    }
                </div>
                <p className='price'>${data.price}</p>
            </div>
        </div>
    )
}