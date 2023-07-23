import React from 'react'
import { DateString } from '../DateString'

type Props = {
    startDate?: string
    endDate?: string
    format: 'YYYY' | 'MMMYYYY' | 'DDMMMYYYY'
    classes?: string
}

export const DateRange: React.FC<Props> = ({ startDate, endDate, format: formatString, classes}) => {
    return (
        <div className={classes} style={{display: 'flex', columnGap: '5px' }}>
            <DateString date={startDate} format={formatString}/>
            <>-</>
            <DateString date={endDate} format={formatString}/>
        </div>
    )

    return ''
}