const ACCESS_TOKEN = "access_token";

class CTokenService {
  public getToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  public setToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }
}

export const TokenService = new CTokenService();
