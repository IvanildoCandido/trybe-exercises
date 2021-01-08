const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};
test('Quando passado a string "ivanildo" retorna "IVANILDO', (done) => {
  uppercase('ivanildo', (string) => {
    expect(string).toBe('IVANILDO');
    done();
  });
});
