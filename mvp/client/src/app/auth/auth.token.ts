
export class AuthToken
{
    get token(): any{
        var token = localStorage.getItem('token');
        return token != null ? JSON.parse(token) : null;
      }
    set token(token){
        localStorage.setItem('token', JSON.stringify(token));
    }
}