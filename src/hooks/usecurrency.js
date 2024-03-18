import { useEffect, useState } from 'react';

function useCurrency(currency) {
  const [currencyRates, setCurrencyRates] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((data) => setCurrencyRates(data.rates))
      .catch((error) => console.error('Error fetching currency data:', error));
  }, [currency]);

  return currencyRates;
}

export default useCurrency;