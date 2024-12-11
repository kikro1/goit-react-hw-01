import React from "react";
import style from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
    return (
        <table style={style.table}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map(item => (
                <React.Fragment key={item.id}>
                    <tr>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>    
                    </tr>
                </React.Fragment>
            ))}
                
            </tbody>
        </table>

    );
}

export default TransactionHistory;