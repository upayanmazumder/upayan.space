// shared/api.ts
export async function apiRequest<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
    body: any = null,
    headers: Record<string, string> = { 'Content-Type': 'application/json' }
  ): Promise<T> {
    const baseUrl = 'https://api.upayan.space';
  
    try {
      const response = await fetch(`${baseUrl}${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Server responded with an error');
      }
  
      return response.json();
    } catch (error) {
      console.error(`API request failed: ${error}`);
      throw error;
    }
  }
  