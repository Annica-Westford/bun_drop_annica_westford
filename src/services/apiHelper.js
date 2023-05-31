export class apiHelper {
  static async getData(typeOfProducts) {
    try {
      const response = await fetch(`http://localhost:7000/${typeOfProducts}`);
      const data = await response.json();
      return data;
    } catch {
      throw new Error("Failed to fetch");
    }
  }
}
