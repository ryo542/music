const clientId = '33d079e863524fcab130cfc97fe0c0ca';  // あなたのClient ID
const redirectUri = 'http://localhost:3000/callback'; // コールバックURL

const authEndpoint = 'https://accounts.spotify.com/authorize';
const scopes = 'user-library-read user-top-read';  // 必要な権限を追加
const responseType = 'token';  // アクセストークンで返されます

const authUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=${responseType}`;
window.location = authUrl;  // ユーザーを認証ページにリダイレクト

