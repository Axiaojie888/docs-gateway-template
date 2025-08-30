export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>技术文档网关</h1>
      <p>请先登录，登录后自动跳转到 /docs</p>
      <a href="/api/auth/signin">去登录</a>
    </div>
  );
} 
