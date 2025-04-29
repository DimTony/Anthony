import { NextResponse } from "next/server";
import axios from "axios";


const API_URL = process.env.API_URL; 
const SUBSCRIPTION_KEY = process.env.API_SUBSCRIPTION_KEY; 
const REQUEST_TIMEOUT = 30000;

export async function GET() {
  try {
    if (!API_URL) {
      console.error("API_URL is not defined in environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    
    const response = await axios.get(`${API_URL}/api/portfolio`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Subscription-Key": SUBSCRIPTION_KEY || "",
      },
      timeout: REQUEST_TIMEOUT,
    });

    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching portfolio data:", error);

    let errorMessage = "Failed to fetch portfolio data";
    let statusCode = 500;

    if (axios.isAxiosError(error)) {
      if (error.response) {
        statusCode = error.response.status;
        errorMessage = `Server error: ${error.response.status}`;
      } else if (error.request) {
        errorMessage = "No response received from server";
      } else {
        errorMessage = error.message;
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
