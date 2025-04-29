"use server";

export async function fetchPortfolioServer() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/portfolio`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const errorMessage =
        errorData?.error || `Server error: ${response.status}`;
      throw new Error(errorMessage);
    }

    const data = await response.json();

    if (!data || typeof data !== "object") {
      throw new Error("Invalid portfolio data received from server");
    }

    return data;
  } catch (error: any) {
    console.error("Error in fetchPortfolioServer:", error);

    const errorMessage = error.message || "Failed to fetch portfolio data";
    const enhancedError = new Error(errorMessage);

    (enhancedError as any).originalError = error;
    (enhancedError as any).timestamp = new Date().toISOString();

    throw enhancedError;
  }
}
