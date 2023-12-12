import React, { useContext, useState, useEffect } from 'react';
import { TransactionsContext } from '../Context';
import creditCardData from '../data/CreditCard.json';

const Recommendations = () => {
  const { transactions } = useContext(TransactionsContext);
  const [recommendations, setRecommendations] = useState([]);

  // Function to sum up spending by category from transactions
  const sumSpendingByCategory = (transactions) => {
    return transactions.reduce((acc, transaction) => {
      const category = transaction.Category || 'Other'; // Default to 'Other' if no category is provided
      const amount = parseFloat(transaction.Amount) || 0;
      if (amount > 0) { // Only consider positive transaction amounts for rewards
        if (!acc[category]) {
          acc[category] = 0;
        }
        acc[category] += amount;
      }
      return acc;
    }, {});
  };

  // Function to calculate net rewards after accounting for fees
  const calculateNetRewards = (card) => {
    const totalRewards = calculateTotalRewards(card);
    const annualFee = calculateAnnualFee(card);
    return (totalRewards - annualFee).toFixed(2);
  };

  // Function to calculate total rewards for a given spending profile
  const calculateTotalRewards = (card) => {
    const userSpending = sumSpendingByCategory(transactions);
    return calculateRewardsForSpending(userSpending, card.Rewards);
  };

  // Function to calculate annual fee for a card
  const calculateAnnualFee = (card) => {
    return card.Fees && card.Fees.AnnualFee ? parseFloat(card.Fees.AnnualFee.replace('$', '')) : 0;
  };

  // Function to calculate rewards for a specific card based on user spending
  const calculateRewardsForSpending = (userSpending, rewards) => {
    let totalRewards = 0;
    Object.keys(userSpending).forEach(category => {
      const rewardMultiplier = parseRewardMultiplier(rewards[category] || rewards.OtherPurchases);
      totalRewards += userSpending[category] * rewardMultiplier;
    });
    return totalRewards;
  };

  // Function to parse the reward multiplier from the card's reward string
  const parseRewardMultiplier = (rewardString) => {
    if (typeof rewardString !== 'string') {
      console.error('rewardString is not a string');
      return 0;
    }
    const multiplierMatch = rewardString.match(/(\d+)x/);
    if (multiplierMatch) {
      return parseFloat(multiplierMatch[1]);
    }
    const percentageMatch = rewardString.match(/(\d+)%/);
    if (percentageMatch) {
      return parseFloat(percentageMatch[1]) / 100;
    }
    return 0;
  };

  useEffect(() => {
    // Get recommendations based on the user's spending and the available credit cards
    const newRecommendations = getRecommendations(creditCardData.CreditCards);
    setRecommendations(newRecommendations);
  }, [transactions]);

  // Function to get credit card recommendations based on user spending
  const getRecommendations = (cards) => {
    if (!Array.isArray(cards)) {
      console.error('cards is not an array');
      return [];
    }
    return cards.map(card => {
      if (!card || typeof card !== 'object') {
        console.error('Invalid card object');
        return null;
      }
      const netRewards = calculateNetRewards(card);
      return { ...card, netRewards };
    })
    .filter(card => card !== null) // Filter out invalid cards
    .sort((a, b) => parseFloat(b.netRewards) - parseFloat(a.netRewards)) // Sort by net rewards
    .slice(0, 5); // Return top 5 recommendations
  };

  return (
    <div className='flex flex-col items-center w-full p-4 bg-black'>
      <h1 className='text-2xl font-bold text-[#85BB85] mb-8'>Credit Card Recommendations</h1>

      <div className='w-full overflow-auto'>
        <table className='table-fixed min-w-full leading-normal'>
          <thead>
            <tr>
              <th className='px-5 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-white uppercase tracking-wider'>
                Card Name
              </th>
              <th className='px-5 py-3 border-b-2 border-gray-300 text-right text-xs font-semibold text-white uppercase tracking-wider'>
                Intro Bonus
              </th>
              <th className='px-5 py-3 border-b-2 border-gray-300 text-right text-xs font-semibold text-white uppercase tracking-wider'>
                Annual Fee
              </th>
              <th className='px-5 py-3 border-b-2 border-gray-300 text-right text-xs font-semibold text-white uppercase tracking-wider'>
                Estimated Net Rewards
              </th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((card, index) => (
              <CardRecommendation key={index} card={card} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CardRecommendation = ({ card }) => (
  <tr>
    <td className='px-5 py-5 border-b border-gray-200 bg-black text-sm text-white'>
      {card.CardName}
    </td>
    <td className='px-5 py-5 border-b border-gray-200 bg-black text-sm text-right text-white'>
      {card.WelcomeBonus && card.WelcomeBonus.Points ? card.WelcomeBonus.Points : 'None'}
    </td>
    <td className='px-5 py-5 border-b border-gray-200 bg-black text-sm text-right text-white'>
      {card.Fees && card.Fees.AnnualFee ? card.Fees.AnnualFee : '$0'}
    </td>
    <td className='px-5 py-5 border-b border-gray-200 bg-black text-sm text-right text-white'>
      {card.netRewards || 'N/A'}
    </td>
  </tr>
);

export default Recommendations;
