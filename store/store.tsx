"use client";

import { create } from "zustand";
import { toast } from "sonner";
import { persist } from "zustand/middleware";
import { fetchPortfolioServer } from "@/app/api/actions/portfolio";

type Portfolio = {
  firstName: string;
  description: string;
  items: {
    id: number;
    name: string;
    value: string;
  }[];
};

interface AppState {
  portfolio: Portfolio | null;
  loading: boolean;
  errors: ErrorState;
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
  setLoading: (loading: boolean) => void;
  setErrors: (
    field: string,
    hasError: boolean,
    message?: string,
    showToast?: boolean
  ) => void;
  setPortfolio: (portfolio: Portfolio | null) => void;
  fetchPortfolio: () => Promise<void>;
  clearError: () => void;
  resetStore: () => void;
}

interface ErrorState {
  [key: string]: { hasError: boolean; message: string };
}

const initialState = {
  portfolio: null,
  loading: false,
  theme: "system" as const,
  errors: {},
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      ...initialState,
      setTheme: (theme) =>
        set((state) => ({
          ...state,
          theme,
        })),
      setLoading: (loading) => set({ loading }),
      setErrors: (field, hasError, message = "", showToast = true) => {
        set((state) => ({
          errors: {
            ...state.errors,
            [field]: { hasError, message },
          },
        }));

        
        if (hasError && message && showToast) {
          toast.error(message);
        }
      },

      setPortfolio: (portfolio) => set({ portfolio }),

      fetchPortfolio: async () => {
        set({ loading: true, errors: {} });
        try {
          
          const response = await fetchPortfolioServer();
          set({ portfolio: response.data.portfolio, loading: false });
          return;
        } catch (error: any) {
          set({ loading: false });
          get().setErrors(
            "fetchPortfolio",
            true,
            error.message || "Failed to fetch portfolio",
            true
          );
        }
      },

      clearError: () => set({ errors: {} }),
      resetStore: () => set(initialState),
    }),
    {
      name: "portfolio",
      partialize: (state) => ({
        theme: state.theme,
      }),
    }
  )
);
