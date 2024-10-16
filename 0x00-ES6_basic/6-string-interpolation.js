export default function getSanFranciscoDescription() {
  const year = 2017; // eslint-error no-unused-vars
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
};

  return 'As of ${year}, it was the seventhe-highest income county in the United States, with a per capita personal incomme of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.';
}