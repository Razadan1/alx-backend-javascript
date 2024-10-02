export default function getNeighborhoodsList() {
  this.sanFranciscoNeigborhoods = ['SOMA', 'Union Square'];
  const self = this;

  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeigborhoods.push(newNeighborhood);
    return self.sanFranciscoNeigborhoods;
  };
}
