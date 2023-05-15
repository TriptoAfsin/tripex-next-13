import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchProjects = () => {
  return useQuery(["projects"], () => {
    return axios.get(`https://triptoafsin.github.io/API-Host/myProjects.json`);
  });
};
