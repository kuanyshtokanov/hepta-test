import { AxiosError } from "axios";

export interface ImgElement {
  id: number;
  url: string;
};

export interface ApiResponse<T> {
  data?: T;
  isLoading: boolean;
  error?: AxiosError;
  totalCount: number;
}