import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Order from '../Order/Order';

const OrderList = () => {
    const { t } = useTranslation();

    const [Orders, setOrders] = useState([]);
    const userToken=localStorage.getItem("user-token");
    const ordersUrl="http://localhost:3000/api/v1/user/orders"


    useEffect(() => {
        axios.get(ordersUrl,{headers:{"Authorization":`Bearer ${userToken}`}})
        .then((data)=>{
            setOrders(data.data)
            console.log(data.data)
        }).catch((error)=>{
            console.log(error)
        })
    }, []);
    return (
        <div>
           {
        <div className='container-fluid mt-3 ' >

                    <h4>{t("Orders")}</h4>
                <div className='container'>

                    {   
                    Orders?.map((order)=>(
                        <Order  key={order._id} {...order}/> ))
                    }
                </div>
        </div>
       }
        </div>
    );
}

export default OrderList;
