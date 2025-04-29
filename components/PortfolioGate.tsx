


"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import SkeletonLoader from "./SkeletonLoader";
import { useStore } from "@/store/store";
import Homepage from "./Homepage";

const PortfolioGate = () => {
  const { portfolio, loading, errors, fetchPortfolio } = useStore();
  const [isInitializing, setIsInitializing] = useState(true);
  const [minimumLoadingComplete, setMinimumLoadingComplete] = useState(false);

  
  const MINIMUM_LOADING_TIME = 3000;

  useEffect(() => {
  
    const minimumLoadingTimer = setTimeout(() => {
      setMinimumLoadingComplete(true);
    }, MINIMUM_LOADING_TIME);

  
    const fetchData = async () => {
      try {
        await fetchPortfolio();
      } catch (error) {
  
        console.error("Error in portfolio initialization:", error);
      } finally {
        setIsInitializing(false);
      }
    };

    fetchData();

  
    return () => {
      clearTimeout(minimumLoadingTimer);
    };
  }, [fetchPortfolio]);

  
  const hasErrors =
    errors && Object.keys(errors).some((key) => errors[key]?.hasError);

  
  if (!minimumLoadingComplete || isInitializing || loading || hasErrors) {
    return <SkeletonLoader />;
  }

  
  if (portfolio) {
    return <Homepage portfolio={portfolio} />;
  }

  
  return <SkeletonLoader />;
};

export default PortfolioGate;