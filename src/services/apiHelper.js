export class apiHelper {
  static async getData(typeOfProducts) {
    try {
      const response = await fetch(`http://localhost:7000/${typeOfProducts}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch ${typeOfProducts}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch ${typeOfProducts}`);
    }
  }
}
