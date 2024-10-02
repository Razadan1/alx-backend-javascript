export default function getNeighborhoodsList() {
  this.sanFranciscoNeigborhoods = ['SOMA', 'Union Square'];
  const self = this;

  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeigborhoods.push(newNeighborhood);
    return self.sanFranciscoNeigborhoods;
  };
}
