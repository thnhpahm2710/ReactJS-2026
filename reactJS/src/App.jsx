import { useState, useMemo, useCallback } from 'react'
import './App.css'
import Bai1 from './components/Bai1/Bai1'
import Bai2 from './components/Bai2/Bai2'
import UseMemoDemo from "./components/UseMemoDemo/UseMemoDemo.jsx";
import CheckoutButton from "./components/CheckoutButton/CheckoutButton.jsx";

function App() {
  const [keyword, setKeyword] = useState('')
  const [cartCount, setCartCount] = useState(0)

  const hugeData = useMemo(() => {
    return Array.from({ length: 10000 }, (_, index) => index + 1);
  }, []);

  const evenCount = useMemo(() => {
    console.log("⚙️ Đang chạy vòng lặp 10,000 lần...");

    const result = hugeData.filter(num => num % 2 === 0).length;
    
    return result;
  }, [hugeData]);

  const handleCheckout = useCallback(() => {
    alert(`Bạn đã thanh toán tổng cộng ${cartCount} hàng trong giỏ!`);
  }, [cartCount]);

  return (
    <div className="p-8">
      {/*<h1 className="text-3xl font-bold text-blue-500 underline">*/}
      {/*  Hello Tailwind CSS v4!*/}
      {/*</h1>*/}
      
      <div className="mt-6 flex flex-col gap-4 max-w-md">
        <div className="rounded-xl bg-orange-50 p-4 border border-orange-200">
          <p className="text-orange-700 font-medium">Kết quả tính toán khổng lồ:</p>
          <p className="text-2xl font-bold text-orange-600">Số chẵn tìm thấy: {evenCount}</p>
          <p className="text-xs text-orange-500 mt-1 italic">(Mở Console để xem log khi gõ keyword)</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tìm kiếm sản phẩm:</label>
          <input 
            type="text" 
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Nhập keyword..."
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
          />
          <p className="mt-1 text-xs text-gray-500">(Gõ phím sẽ khiến App re-render, nhưng vòng lặp 10,000 lần sẽ KHÔNG chạy lại)</p>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCartCount(cartCount + 1)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-black hover:bg-blue-700 active:scale-95 transition"
          >
            Thêm vào giỏ
          </button>
          <span className="font-bold text-lg text-red-500">Giỏ hàng: {cartCount}</span>
        </div>

        <CheckoutButton onCheckout={handleCheckout} />
      </div>

      {/*<hr className="my-8" />*/}
      {/*<UseMemoDemo />*/}
    </div>
  )
}

export default App
