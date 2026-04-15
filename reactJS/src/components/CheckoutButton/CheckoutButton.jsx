import React from 'react';

const CheckoutButton = ({ onCheckout }) => {
    console.log(" Nút Thanh Toán vừa bị re-render!");

    return (
        <button
            className="mt-6 w-full rounded-xl bg-green-500 py-4 text-lg font-bold text-black transition hover:bg-green-400 active:scale-95"
            onClick={onCheckout}
        >
            Thanh toán ngay
        </button>
    );
};

export default React.memo(CheckoutButton);
