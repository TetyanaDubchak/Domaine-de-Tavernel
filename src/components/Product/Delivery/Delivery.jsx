import s from "./Delivery.module.scss";

export const Delivery = () => {


    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>delivery methods</h3>
            <ul className={s.list}>
                <li className={s.item}>
                    <h4 className={s.subtitle}>Pick Up In-Store</h4>
                    <p className={s.text}>Customers can choose to pick up their order at a selected collection point for free. Once your order is placed, you will be provided with information on the address and operating hours of the collection point. Your order will be held at the collection point for 3 days from the notification of readiness for pickup.</p>
                </li>
                <li className={s.item}>
                    <h4 className={s.subtitle}>Postal Delivery</h4>
                    <p className={s.text}>We offer nationwide postal delivery for all orders. The cost of delivery depends on the weight and size of the package, as well as the distance to the delivery region. Standard delivery times range from 3 to 7 working days from the moment the order is dispatched.</p>
                </li>
                <li className={s.item}>
                    <h4 className={s.subtitle}>Courier Delivery</h4>
                    <p className={s.text}>For the convenience of our customers, we provide a courier delivery service directly to your door. The cost of courier delivery depends on the delivery address and the total weight of the order. Courier delivery usually takes from 1 to 3 working days. After placing your order, our team will contact you to confirm the delivery time.</p>
                </li>
            </ul>
        </div>
        
    )
}