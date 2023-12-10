import React, { useState, useEffect } from 'react';
import creditCardData from '../data/CreditCard.json';

const Recommendations = () => {
  const testUserSpending = {
    travel: 1200,
    dining: 500,
    groceries: 300,
    streaming: 50,
    other: 2000,
  };

  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const newRecommendations = getRecommendations(testUserSpending, creditCardData.CreditCards);
    setRecommendations(newRecommendations);
  }, []);

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
      {calculateNetRewards(card)}
    </td>
  </tr>
);

const calculateNetRewards = (card) => {
  const annualFee = card.Fees && card.Fees.AnnualFee ? parseFloat(card.Fees.AnnualFee.replace('$', '')) : 0;
  return (card.totalRewards - annualFee).toFixed(2);
};

const parseRewardMultiplier = (rewardString) => {
  if (typeof rewardString !== 'string') {
    console.error('rewardString is not a string');
    return 1;
  }
  const match = rewardString.match(/(\d+)x/);
  return match ? parseFloat(match[1]) : 1;
};

const calculateRewardsForSpending = (spending, rewards) => {
  let totalRewards = 0;
  Object.keys(spending).forEach(category => {
    const rewardMultiplier = rewards[category] ? parseRewardMultiplier(rewards[category]) : parseRewardMultiplier(rewards.OtherPurchases);
    totalRewards += spending[category] * rewardMultiplier;
  });
  return totalRewards;
};

const getRecommendations = (userSpending, cards) => {
  if (!Array.isArray(cards)) {
    console.error('cards is not an array');
    return [];
  }
  return cards.map(card => {
    if (!card || typeof card !== 'object') {
      console.error('Invalid card object');
      return null;
    }
    const totalRewards = calculateRewardsForSpending(userSpending, card.Rewards);
    const annualFee = card.Fees && card.Fees.AnnualFee ? parseFloat(card.Fees.AnnualFee.replace('$', '')) : 0;
    const netRewards = totalRewards - annualFee;
    return { ...card, totalRewards: netRewards };
  })
  .filter(card => card !== null) // Filter out invalid cards
  .sort((a, b) => b.totalRewards - a.totalRewards) // Sort by net rewards
  .slice(0, 5); // Return top 5 recommendations
};

export default Recommendations;
