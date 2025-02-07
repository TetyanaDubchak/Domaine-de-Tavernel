import sprite from "../../assets/images/sprite.svg";

export const Icon = ({type, className=''}) => {
    return (
        <svg className={className}>
            <use href={ sprite + `#icon-${type}`}></use>
        </svg>
    )
}