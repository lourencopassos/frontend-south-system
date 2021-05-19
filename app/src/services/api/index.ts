import axios from 'axios';

const baseUrl = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"


export const getDragons = async (): Promise<any> => {

  try {
    const { data } = await axios.get(baseUrl)
    return data
  } catch (error) {
    return [];
  }
}

export const deleteDragon = async (id: string): Promise<any> => {
  try {
    await axios.delete(`${baseUrl}/${id}`)
  } catch (error) {
    return error

  }
}