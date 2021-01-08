function techList(technologies, name) {
  return technologies.length === 0
    ? 'Vazio!'
    : technologies.sort().reduce((acc, tecnology) => {
        let object = {};
        object['tech'] = tecnology;
        object['name'] = name;
        acc.push(object);
        return acc;
      }, []);
}
module.exports = techList;
