/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
	for(let i = 0; i < preferences.length; i++) {

		const k1 = preferences[i];
		const k2 = preferences[k1 - 1];
		const k3 = preferences[k2 - 1]; 
		if (k3 - 1 === i && k1 != k3) {
			count++;
		}
	}
	return count/3;
};
