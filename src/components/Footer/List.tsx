import { FC } from 'react'
import { UL, LI } from './styles'

type Props = {
    Listitem: string
}

const List: FC<Props> = ({ Listitem }) => {
    return (
        <>
            <LI>{Listitem}</LI>
        </>
    )
}

export default List
