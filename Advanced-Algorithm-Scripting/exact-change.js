/**
 * FreeCodeCamp Challenge
 * -------------------------
 * Design a cash register drawer function checkCashRegister() that accepts purchase
 * price as the first argument (price), payment as the second argument (cash),
 * and cash-in-drawer (cid) as the third argument.
 *
 * cid is a 2D array listing available currency.
 *
 * Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
 * Return the string "Closed" if cash-in-drawer is equal to the change due.
 *
 * Otherwise, return change in coin and bills, sorted in highest to lowest order.
 *
 * -------------------------
 *
 */

function addBillName(register){
  for (let i = 0; i < register.length; i++) {
    switch (register[i][0]) {
      case("ONE HUNDRED"):
        register[i].push(100.00);
        break;
      case("ONE"):
        register[i].push(1.00);
        break;
      case("TWENTY"):
        register[i].push(20.00);
        break;
      case("FIVE"):
        register[i].push(5.00);
        break;
      case("TEN"):
        register[i].push(10.00);
        break;
      case("QUARTER"):
        register[i].push(0.25);
        break;
      case("DIME"):
        register[i].push(0.10);
        break;
      case("NICKEL"):
        register[i].push(0.05);
        break;
      case("PENNY"):
        register[i].push(0.01);
        break;
    }
  }
  return register;
}


function getPaid(changeToReturn,register) {
  let deduction = 0;
  let toBeReturned = [];

  for(let i = 0; i < register.length; i++) {
    const BillNameDescription = register[i][0];
    const BillTotalInRegister = register[i][1];
    let BillNameNumber = register[i][2];

    if(changeToReturn >= BillNameNumber){
      // check the total amount of bills
      let totalAmountBillsInRegister = (Math.round(BillTotalInRegister / BillNameNumber) * 100) / 100;
      let totalBillsCurrentNeeded =    (Math.floor(changeToReturn / BillNameNumber) * 100) / 100;

      if (totalAmountBillsInRegister>(totalBillsCurrentNeeded)){
        toBeReturned.push([BillNameDescription,totalBillsCurrentNeeded * BillNameNumber]);
        deduction = (totalBillsCurrentNeeded*BillNameNumber);
        changeToReturn-=deduction;
      } else{
        toBeReturned.push([BillNameDescription,totalAmountBillsInRegister * BillNameNumber]);
        deduction = (totalAmountBillsInRegister*BillNameNumber);
        changeToReturn-=deduction
      }
    }

  } //loop ends
  if (getRegisterTotal(toBeReturned) === 0.01){
    return [];
  }
  return toBeReturned;
}


function getRegisterTotal(cid){
  return cid.reduce(function (result, value) {
    return result += value[1];
  }, 0);
}

/***********  MAIN FUNCTION *******************/

function checkCashRegister(price, cash, cid) {
  const drawerResult = { status: "OPEN" }
  // addn bill names and sort cid by decreasing amount value
  cid = addBillName(cid).sort(function(a,b){
    return (b[2] - a[2]); });


  if (getRegisterTotal(cid) === (cash - price)){
    drawerResult.status = "CLOSED" ;
  }
  else if (getRegisterTotal(cid) < (cash - price)){
    drawerResult.status = "INSUFFICIENT_FUNDS";
  }
  drawerResult.change = getPaid(cash - price, cid);
  return drawerResult;
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])

// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]
