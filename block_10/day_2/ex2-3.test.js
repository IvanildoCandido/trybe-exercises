const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

describe('Verifica o resultado da função getUserName utilizando then/catch', () => {
  it('Usuário é encontrado', () => {
    return getUserName(4).then((data) => expect(data).toEqual('Mark'));
  });
  it('Usuário não é encontrado', () => {
    return getUserName(5).catch((error) =>
      expect(error).toEqual({ error: 'User with 5 not found.' }),
    );
  });
});
describe('Verifica o resultado da função getUserName utilizando async/await', () => {
  it('Usuário é encontrado', async (done) => {
    const response = await getUserName(4);
    expect(response).toBe('Mark');
    done();
  });
  it('Usuário não é encontrado', async () => {
    try {
      await getUserName(5);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 5 not found.' });
    }
  });
});
