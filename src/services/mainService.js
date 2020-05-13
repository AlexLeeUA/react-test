import http from './config';

class MainService {
  static getAsteroidById = async(id) => {
    return http.get(`/${id}?api_key=SZaVN5ykDDZIxtYc2GgVsVTh5IpyYzVHCzHrkmTT`);
  }

  static getAsteroidsList = async(page=0) => {
    return http.get(`/browse?page=${page}&api_key=SZaVN5ykDDZIxtYc2GgVsVTh5IpyYzVHCzHrkmTT`);
  }
}

export default MainService;