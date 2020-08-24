/* eslint-disable class-methods-use-this */

export default class Service {
  async getData() {
    const rawResponse = await fetch(`http://localhost:3000/testData`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
      },
    });
    const content = await rawResponse.json();
    return content;
  }
}
