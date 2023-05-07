import React from "react";
import { Progress } from "antd";

const Analytics = ({ allTransection }) => {
//category  
const categories = [
  "salary",
  "stationery",
  "suppliercharges",
  "food",
  "transport",
  "bills",
  "medical",
  "tax",
  "services",
];

  //total transaction
  const totalTransaction = allTransection.length;
  const totalIncomeTransactions = allTransection.filter(transaction => transaction.type === "Income");
  const totalExpenseTransactions = allTransection.filter(transaction => transaction.type === "Expense");
  const totalIncomePercent = ( totalIncomeTransactions.length /totalTransaction) * 100;
  const totalExpensePercent = (totalExpenseTransactions.length / totalTransaction) * 100;


  //total turnover
const totalTurnover = allTransection.reduce(
  (acc,transaction) => acc + transaction.amount,
    0
  );
const totalIncomeTurnover = allTransection
.filter((transaction) => transaction.type === "Income")
.reduce((acc,transaction) => acc + transaction.amount, 0);

const totalExpenseTurnover = allTransection
.filter((transaction) => transaction.type === "Expense")
.reduce((acc,transaction) => acc + transaction.amount, 0);

const totalIncomeTurnoverPercent = 
(totalIncomeTurnover / totalTurnover) * 100;
const totalExpenseTurnoverPercent = 
(totalExpenseTurnover / totalTurnover) * 100;

  return (
    <>
      <div class="row m-3">
        <div class="col-md-4">
          <div className="card">
            <div className="card-header">
              Total Transactions : {totalTransaction}
            </div>
            <div className="card-body">
              <h5 className="textincome">Income : {totalIncomeTransactions.length}</h5>
              <h5 className="textexpense">Expense : {totalExpenseTransactions.length}</h5>
              <div>
                <Progress type="circle" 
                strokeColor={'black'} 
                className="mx-2"
                percent={totalIncomePercent.toFixed(0)}
                />
                <Progress type="circle" 
                strokeColor={'#a66f62'} 
                className="mx-2"
                percent={totalExpensePercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div className="card">
            <div className="card-header">
              Total TurnOver : {totalIncomeTurnover - totalExpenseTurnover}
            </div>
            <div className="card-body">
              <h5 className="textincome">Income : {totalIncomeTurnover}</h5>
              <h5 className="textexpense">Expense : {totalExpenseTurnover}</h5>
              <div>
                <Progress type="circle" 
                strokeColor={'black'} 
                className="mx-2"
                percent={totalIncomeTurnoverPercent.toFixed(0)}
                />
                <Progress type="circle" 
                strokeColor={'#a66f62'} 
                className="mx-2"
                percent={totalExpenseTurnoverPercent.toFixed(0)}
                />
              </div>
            </div>
        
          </div>
        </div>
        <div class="col-md-4">
        <div className="card">
          <center><div className="card-header">
            Balance Amount 
          </div></center>
          <div className="">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
           <center className="total"><h2 className="total">LKR.{totalIncomeTurnover - totalExpenseTurnover}.00</h2></center>
           <br></br>
            <br></br>
            <br></br>
            
          </div>
        </div>
      </div>
      </div>
      
      {/*<div className="row mt-3">
        <div className="col-md-4">
            <h4>Categorywise Income</h4>
            {categories.map(category => {
                const amount = allTransection
                .filter(
                  (transaction) => 
                    transaction.type === "income" && 
                    transaction.category === category
                )
                .reduce((acc,transaction) => acc + transaction.amount, 0);
                return (
                  amount > 0 && (
                  <div className="card">
                    <div className="card-body">
                      <h5>{category}</h5>
                      <Progress 
                      percent={((amount/totalIncomeTurnover) * 100).toFixed(
                          0
                        )} 
                      />
                    </div>
                  </div>
                )
              );
            })}
        </div>
        <div className="col-md-4">
            <h4>Categorywise Expense</h4>
            {categories.map(category => {
                const amount = allTransection
                .filter(
                  (transaction) => 
                    transaction.type === "expense" && 
                    transaction.category === category
                )
                .reduce((acc,transaction) => acc + transaction.amount, 0);
                return (
                  amount > 0 && (
                  <div className="card">
                    <div className="card-body">
                      <h5>{category}</h5>
                      <Progress 
                      percent={((amount/totalExpenseTurnover) * 100).toFixed(
                          0
                        )} 
                      />
                    </div>
                  </div>
                )
              );
            })}
        </div>
          </div>*/}
    </>
  );
};

export default Analytics;