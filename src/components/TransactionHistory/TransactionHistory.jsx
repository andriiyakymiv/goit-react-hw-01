import style from './TransactionHistory.module.css';

const TransactionHistory = ({ transaction }) => {
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
                    
            <tbody>
                {transaction.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id}>
                            <td className={style.tdCapitalise}>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );   
    };

export default TransactionHistory;