import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  selectedBooks: [],
  sepetBooks: [],
  loading: false,
  error: null,
};

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchBooks = createAsyncThunk("fetchBooks", async (params) => {
  console.log("fetchBooks içine girdi");
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes",
      {
        params: {
          q: "flowers+inauthor:keyes",
          key: apiKey, 
        },
      }
    );

    console.log(response.data, "response books");
    return response?.data;
  } catch (error) {
    console.error("Kitaplar alınırken hata oluştu:", error);
    throw error; 
  }
});

const booksSlices = createSlice({
  name: "books",
  initialState,
  reducers: {
    setSelectedBook(state, action) {
      state.selectedBooks = action.payload;
    },
    addToSepet(state, action) {
      state.sepetBooks.push(action.payload);
    },
    removeToSepet(state, action) {
      state.sepetBooks = state.sepetBooks.filter(
        (book) => book.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
      state.error = null; // fetchBooks.pending durumunda hata sıfırlanır
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.books = action.payload; // books state'ini güncelle
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(action.error);
    });
  },
});

export const {
  setSelectedBook,
  addToSepet,
  removeToSepet,
} = booksSlices.actions;

export default booksSlices.reducer;



