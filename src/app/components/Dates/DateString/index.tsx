import React from 'react'
import parseISO from 'date-fns/parseISO'
import { format } from 'date-fns'

type Props = {
    date: string | undefined
    format: 'YYYY' | 'MMMYYYY' | 'DDMMMYYYY' 
    classes?: string
}

export const DateString: React.FC<Props> = ({date, format: formatString, classes}) => {

    if(date) {
        let formattedDate: string
        switch(formatString) {
            case 'YYYY': 
                formattedDate = format(parseISO(date) , 'yyyy')
                break;
            case 'MMMYYYY':
                formattedDate = format(parseISO(date) , 'MMM yyyy')
                break;
            case 'DDMMMYYYY': 
                formattedDate = format(parseISO(date) , 'dd MMM yyyy')
                break;
            default:
                throw new Error('Invalid format string passed to DateString component!')
        }
        return (
            <div className={classes}>
                {formattedDate}
            </div>
        )
    }
    return 'TBC'
}