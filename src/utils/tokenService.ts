class TokenService {
  private jwt: string;
  static instance: TokenService;

  constructor() {
    console.log('Token instance created');
  }

  public static getInstance(): TokenService {
    if (!TokenService.instance) {
      TokenService.instance = new TokenService();
    }
    return TokenService.instance;
  }

  getToken(): string {
    return this.jwt;
  }

  setToken(jwt: string): void {
    this.jwt = jwt;
  }
}

export const tokenInstance = TokenService.getInstance();
