# 🛒 React Cart Library

Thư viện React đơn giản để xây dựng **giỏ hàng (Cart)** với UI cơ bản (Button, Input, Card, Modal) và context quản lý trạng thái giỏ hàng.  
Phù hợp cho các dự án demo hoặc làm base để phát triển thêm.

---

## ✨ Tính năng
- Thêm, sửa, xóa sản phẩm trong giỏ hàng
- Các component UI đã chuẩn hóa:
  - **Button**: nút bấm
  - **InputText**: ô nhập dữ liệu
  - **Card**: hiển thị sản phẩm/thông tin
  - **Modal**: popup hộp thoại
- `CartProvider` + `useCart` hook để quản lý state toàn cục giỏ hàng

---

## 🚀 Cài đặt

```bash
npm i cart-ui-library
```

---

## 📦 Sử dụng
1. Bọc ứng dụng với CartProvider

```jsx
import React from "react";
import { CartProvider } from "cart-ui-library";
import App from "./App";

export default function Root() {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
}
```

2. Sử dụng các Component

```jsx
import React from "react";
import { Button, InputText, Card, Modal, useCart } from "cart-ui-library";

export default function Demo() {
  const { items, addItem, updateItem, removeItem } = useCart();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <h1>Demo Cart</h1>
      
      <Button label="Thêm sản phẩm" onClick={() => addItem({ name: "Sản phẩm A" })} />

      {items.map((item, index) => (
        <Card key={index} title={item.name}>
          <Button label="Xóa" onClick={() => removeItem(index)} />
        </Card>
      ))}

      <Button label="Mở Modal" onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h3>Chi tiết giỏ hàng</h3>
        <p>Tổng số sản phẩm: {items.length}</p>
      </Modal>
    </div>
  );
}
```

## 🧩 API

`CartProvider`

- Context chứa giỏ hàng. Bắt buộc phải bọc quanh app hoặc component cần dùng.

`useCart()`

Hook để thao tác với giỏ hàng:

- items: danh sách sản phẩm

- addItem(product): thêm sản phẩm

- updateItem(index, product): cập nhật sản phẩm

- removeItem(index): xóa sản phẩm

Components

- Button: Nút bấm

- InputText: Ô nhập dữ liệu

- Card: Hiển thị sản phẩm hoặc thông tin

- Modal: Hộp thoại bật lên