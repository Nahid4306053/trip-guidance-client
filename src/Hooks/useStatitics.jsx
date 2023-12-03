import { useQuery } from "@tanstack/react-query";
import useAxiosPublicV1 from "./useAxiosPublicV1";

export default function useStatistics() {
  const axios = useAxiosPublicV1();
  const fetchstatistics = async () => {
    const res = await axios.get(`/statistics`);
    return res;
  };
  const {
    data: statistics,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["statistics"],
    queryFn: () => fetchstatistics(),
  });

  return { statistics, isLoading, isError, error, isSuccess };
}
