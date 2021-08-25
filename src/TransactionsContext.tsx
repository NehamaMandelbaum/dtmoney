import { createContext, ReactNode, useEffect, useState} from 'react'

import { api } from './sevices/api';


interface Transacions {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string; 
}

interface TransactionsProviderProps{
    children: ReactNode
}

export const TransactionsContext = createContext<Transacions[]>([]);

export function TransactionsProvider ({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transacions[]>([]);

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    return ( 
        <TransactionsContext.Provider value={transactions}>


        </TransactionsContext.Provider>)
}