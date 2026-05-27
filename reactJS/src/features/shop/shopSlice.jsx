import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ASYNC THUNK: Gọi API lấy danh sách sản phẩm
export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async () => {
    // Sử dụng FakeStoreAPI để lấy dữ liệu mẫu
    const response = await fetch("https://fakestoreapi.com/products?limit=8");
    return await response.json();
  },
);

const initialState = {
  products: [],
  cart: [],
  status: "idle",
  error: null
}

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const products = action.payload;
      const existingItem = state.cart.find(item => item.products.id === products.id);
      if (existingItem) {
        existingItem.quantity += 1;
      }
      else {
        state.cart.push({ products, quantity: 1 });
      }
    },

    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.cart.find(item => item.products.id === productId)
      if (existingItem) {
        existingItem.quantity++;
      }
      // TODO 7: Tìm sản phẩm theo productId và tăng quantity thêm 1
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.cart.find(item => item.products.id === productId)
      if (existingItem) {
        existingItem.quantity--;
      }
      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter(item => item.products.id !== productId)
      }
      // TODO 8: Tìm sản phẩm theo productId
      // Nếu quantity > 1 thì giảm đi 1
      // Nếu quantity === 1 thì xóa sản phẩm khỏi cart
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter(item => item.products.id !== productId)
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
        // TODO 11: Cập nhật status thành "loading" và reset error
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        // TODO 12: Cập nhật status thành "succeeded" và lưu products từ payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        // TODO 13: Cập nhật status thành "failed" và lưu message lỗi
      });
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = shopSlice.actions;

export default shopSlice.reducer;
