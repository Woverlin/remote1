import React from 'react';
import Button from '../components/Button';

const Page1 = () => {
  return (
    <div style={{ padding: '20px', minHeight: '80vh', backgroundColor: '#eef2f3' }}>
      <h1 style={{ color: '#2c3e50' }}>Micro-Frontend: Page 1</h1>
      <p style={{ color: '#34495e', fontSize: '18px' }}>
        Tây là nội dung toàn bộ trang được load từ <b>remote1</b>.
      </p>
      
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h3>Thành phần tương tác bên trong Page 1</h3>
        <p>Ví dụ component Button vẫn ở đây:</p>
        <Button />
      </div>
    </div>
  );
};

export default Page1;
