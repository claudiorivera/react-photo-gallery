import useSWR from "swr";
import fetcher from "./fetcher";

const usePhotos = () => {
  const { data, error } = useSWR("/api/photos", fetcher);
  return {
    photos: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePhotos;
