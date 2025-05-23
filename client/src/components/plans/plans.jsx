import React from 'react'
import "./plans.scss"

const Plans = () => {
  return (
    <div className='accountType'>
        {/* <h1>ACCOUNT  TYPES</h1> */}
      

      <div className="weekly">
        <h1>WEEKLY PLANS</h1>
        <div className="weeklyBody">
            <div className="basic plan">
                <h3>BASIC</h3>
                <ul>
                    <li>✓ Minimum Amount: $ 1000</li>
                    <li>✓ Maximum Amount: $ 2000</li>
                    <li>✓ Roi: 50% Daily</li>
                    <li>✓ Referal Bonus: 10%</li>
                    <li>✓ Duration: 1 Week</li>
                    <li>✓ Type: Short Time</li>
                </ul>
                <button>SUBSCRIBE</button>
            </div>
            <div className="deluxe plan">
                <h3>DELUXE</h3>
                <ul>
                    <li>✓ Minimum Amount: $ 2,000</li>
                    <li>✓ Maximum Amount: $ 5,000</li>
                    <li>✓ Roi: 50% Daily</li>
                    <li>✓ Referal Bonus: 10%</li>
                    <li>✓ Duration: 1 Week</li>
                    <li>✓ Type: Short Time</li>
                </ul>
                <button>SUBSCRIBE</button>


            </div>
            <div className="executive plan">
                <h3>EXECUTIVE</h3>
                <ul>
                    <li>✓ Minimum Amount: $ 10,000</li>
                    <li>✓ Maximum Amount: $ 90,00</li>
                    <li>✓ Roi: 50% Daily</li>
                    <li>✓ Referal Bonus: 10%</li>
                    <li>✓ Duration: 1 Week</li>
                    <li>✓ Type: Short Time</li>
                </ul>
                <button>SUBSCRIBE</button>

            </div>
            <div className="gold plan">
                <h3>GOLD</h3>
                <ul>
                    <li>✓ Minimum Amount: $ 10,000</li>
                    <li>✓ Maximum Amount: $ 15,000</li>
                    <li>✓ Roi: 50% Daily</li>
                    <li>✓ Referal Bonus: 10%</li>
                    <li>✓ Duration: 1 Week</li>
                    <li>✓ Type: Short Time</li>
                </ul>
                <button>SUBSCRIBE</button>


            </div>

        </div>
        

      </div>
      <div className="monthly">
        <h1>MONTHLY PLANS</h1>
        <div className="monthlyBody">
            <div className="premium plan">
                <h3>PREMIUM</h3>
                <ul>
                    <li>✓ 75% Deposit Bonus</li>
                    <li>✓ Spreads: 1.9 </li>
                    <li>✓ Negative Balance Protection</li>
                    <li>✓ Scalping </li>
                    <li>✓ Daily Signals</li>
                    <li>✓ Financial Plan</li>
                </ul>
                <button>SUBSCRIBE</button>


            </div>
            <div className="vip plan">
                <h3>VIP</h3>
                <ul>
                    <li>✓ 95% Deposit Bonus</li>
                    <li>✓ Spreads: 1.5</li>
                    <li>✓ Negative Balance Protection</li>
                    <li>✓ Scalping </li>
                    <li>✓ Daily Signals</li>
                    <li>✓ Financial Plan</li>
                </ul>
                <button>SUBSCRIBE</button>

                
            </div>
            <div className="vipLuxury plan">
                <h3>VIP LUXURY</h3>
                <ul>
                    <li>✓ 120% Deposit Bonus</li>
                    <li>✓ Spreads: 1.2</li>
                    <li>✓ Negative Balance Protection</li>
                    <li>✓ Scalping</li>
                    <li>✓ Daily Signals</li>
                    <li>✓ Financial Plan</li>
                </ul>

                <button>SUBSCRIBE</button>


            </div>
            <div className="silverPlatinum plan">
                <h3>SILVER PLATINUM</h3>
                <ul>
                    <li>✓ 145% Deposit Bonus</li>
                    <li>✓ Spreads: 1.2</li>
                    <li>✓ Negative Balance Protection</li>
                    <li>✓ Scalping</li>
                    <li>✓ Daily Signals</li>
                    <li>✓ Financial Plan</li>
                </ul>  

                 <button>SUBSCRIBE</button>
 

            </div>
            <div className="goldPlatinum plan">
                <h3>GOLD PLATINUM</h3>
                <ul>
                    <li>✓ 150% Deposit Bonus</li>
                    <li>✓ Spreads: 1.2</li>
                    <li>✓ Negative Balance Protection</li>
                    <li>✓ Scalping</li>
                    <li>✓ Daily Signals</li>
                    <li>✓ Financial Plan</li>
                </ul>

                <button>SUBSCRIBE</button>


            </div>
            <div className="vipGoldPlatinum plan">
                <h3>VIP GOLD PLATINUM</h3>
                <ul>
                    <li>✓ 185% Deposit Bonus</li>
                    <li>✓ Spreads: 1.2</li>
                    <li>✓ Negative Balance Protection</li>
                    <li>✓ Scalping</li>
                    <li>✓ Daily Signals</li>
                    <li>✓ Financial Plan</li>
                </ul>
                <button>SUBSCRIBE</button>


            </div>
            <div className="goldLuxuryPlatinum plan">
                <h3>GOLD LUXURY PLATINUM</h3>
                <ul>
                    <li>✓ 250% Deposit Bonus</li>
                    <li>✓ Spreads: 1.2</li>
                    <li>✓ Negative Balance Protection</li>
                    <li>✓ Scalping</li>
                    <li>✓ Daily Signals</li>
                    <li>✓ Financial Plan</li>
                </ul>
                <button>SUBSCRIBE</button>

            </div>
        </div>

      </div>
    </div>
  )
}

export default Plans
