import s from "../../assets/styles/components/Product/Payment.module.scss";

export const Payment = () => {


    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>Payment methods</h3>
            <ul className={s.list}>
                <li className={s.item}>
                    <h4 className={s.subtitle}>Online Credit Card Payment</h4>
                    <p className={s.text}>We offer a convenient and secure online payment option directly on our website, allowing you to complete your purchase with ease and peace of mind. Simply proceed to checkout, where you'll find the option to enter your credit card details securely. Our website utilizes advanced encryption technology to ensure the confidentiality and integrity of your payment information.
                       <br/>  Accepted Payment Methods:
                        </p>
                        <ul className={s['inside-list']}>
                            <li className={s['inside-item']}>Visa</li>
                            <li className={s['inside-item']}>Mastercard</li>
                            <li className={s['inside-item']}>American Express</li>
                    </ul>
                       <p className={s.text}>With our seamless online payment process, you can shop confidently, knowing that your transactions are protected. Should you encounter any issues or have questions about the payment process, our dedicated customer support team is available to assist you every step of the way.</p>
                </li>
                <li className={s.item}>
                    <h4 className={s.subtitle}>Cash on Delivery</h4>
                    <p className={s.text}>Alternatively, you can choose to pay cash upon delivery. With this option, you can complete your payment directly to the courier when your order arrives. Please have the exact amount ready to expedite the process.</p>
                </li>
            </ul>
        </div>
        
    )
}