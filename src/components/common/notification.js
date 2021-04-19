import React, { useState, useEffect } from 'react'
import { useCartContext } from '../app/hooks/cartContext'

const Notification = () => {
    const { cartItems, notificationHelper, setNotificationHelper } = useCartContext()
    const [classname, setClassname] = useState("Notification MoveUp")

    let timeout

    useEffect(() => {
        console.log(notificationHelper)
        setClassname("Notification MoveUp")
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            clearNotification()
        }, 3000);
        return () => {
            clearTimeout(timeout)
        }
    }, [cartItems])

    function clearNotification() {
        setClassname("Notification MoveDown")
        timeout = setTimeout(() => {
            setNotificationHelper(false)
            console.log(notificationHelper)
        }, 300);
    }

    let item = null

    item = cartItems[cartItems.length - 1]

    if (item != null && notificationHelper) return (
        <div className={classname}>
            {item.Navn} lagt i handlekurv
            <span className="OKButton" onClick={() => clearNotification()}>OK</span>
        </div>
    )
    else return null
}

export default Notification
