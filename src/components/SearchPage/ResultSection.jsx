import s from '../../assets/components/SearchPage/ResultSection.module.scss'
import { NotFound } from './NotFound'
import { SortButton } from './SortButton'
import { Title } from './Title'
import result from '../../assets/json/products.json'
import { List } from './List'
import { SortDesk } from 'components/Catalog/SortDesk'

export const ResultSection = () => {
    return (
        <div className={s.wrapper}>
            {result ? 
            <div>
                <div className={s['top-wrapper']}>
                    <Title />
                    <SortDesk/>    
                </div>
                    <SortButton /> 
                    <List result={result}/>
            </div> : 
            <div>
                <Title /> 
                <NotFound/>
            </div> 
            }
        </div>
    )
}