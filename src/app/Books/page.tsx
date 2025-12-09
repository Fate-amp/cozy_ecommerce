"use client";
import BookCard from "../components/BookCard";
import books from "../books.json";
import {
  Checkbox,
  Drawer,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface IFilters {
  categories: string[];
  priceMax: number;
}

// To calculate the max price, to be used in filters state as default
const max_price = books
  .map((book) => Number(book.price))
  .sort((a, b) => b - a)[0];

export default function Page() {
  // To handle the filters' state
  const [filters, setFilters] = useState<IFilters>({
    categories: [],
    priceMax: max_price,
  });

  // To handle the books state on filtering and sorting
  const [currentBooks, setCurrentBooks] = useState(books);
  // To handle the state of the draweron smaller screens
  const [drawer, setDrawer] = useState(false);
  // function to edit the categories in filters
  const handleCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected_value = e.target.value;
    let new_categories = [...filters.categories];
    if (filters.categories.includes(selected_value)) {
      new_categories = new_categories.filter((cat) => cat != selected_value);
      setFilters({ ...filters, categories: new_categories });
    } else {
      new_categories = [...filters.categories, selected_value];
      setFilters({ ...filters, categories: new_categories });
    }
  };
  // Function to handle the price range
  const handlePriceRange = (e: Event, value: number) => {
    const new_max = value;
    setFilters({ ...filters, priceMax: new_max });
  };

  // When the "Apply Filters" button is clicked
  const handleApplyFilters = () => {
    let new_books = [...currentBooks];
    new_books = new_books.filter((book) =>
      filters.categories.length > 0
        ? filters.categories.includes(book.category)
        : book
    );
    new_books = new_books.filter(
      (book) => Number(book.price) <= filters.priceMax
    );
    setCurrentBooks([...new_books]);
    // Close the drawer if it's open
    if(drawer){
      setDrawer(false)
    }
  };

  // To handle the sorting
  const handleSorting = (e: SelectChangeEvent<string>) => {
    let new_books = [...currentBooks];
    switch (e.target.value) {
      case "price_asc":
        new_books = books.sort((a, b) => Number(a.price) - Number(b.price));
        setCurrentBooks([...new_books]);
        break;
      case "price_desc":
        new_books = books.sort((a, b) => Number(b.price) - Number(a.price));
        setCurrentBooks([...new_books]);
        break;
      case "alphabetical":
        new_books = books.sort((a, b) => a.title.localeCompare(b.title));
        setCurrentBooks([...new_books]);
        break;
      default:
        new_books = [...books];
        setCurrentBooks([...new_books]);
        break;
    }
  };
  return (
    <div className="w-full bg-[#fef8f0] p-3 sm:p-8 border-t-2 border-t-amber-100">
      {/* button to open filters on screens of 1024px or less */}
      <button onClick={()=>setDrawer(true)} className="fixed bottom-0 right-0 left-0 lg:hidden w-screen h-10 bg-amber-600 text-white font-bold z-10">
        Open Filters
      </button>
      {/* Drawer on smaller screens */}
      <Drawer open={drawer} anchor="bottom">
        <div className="w-full p-4">
          {/* Categories Filters */}
          <FormGroup className="w-full p-6 bg-white rounded-2xl shadow-2xl text-amber-800 text-[14px] font-medium">
            <p className="text-amber-800 font-bold text-[16px] mb-4">
              Categories
            </p>
            {["Philosophy", "Psychology", "Thriller", "Poetry"].map(
              (item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        value={item}
                        onChange={handleCategories}
                        size="small"
                        sx={{
                          "&.Mui-checked": {
                            color: "#000",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                        {item}
                      </Typography>
                    }
                  />
                );
              }
            )}
          </FormGroup>
          {/* Price Filters */}
          <div className="w-full p-6 mt-6 bg-white rounded-2xl shadow-2xl">
            <p className="text-amber-800 font-bold">Price</p>
            <Slider
              onChange={handlePriceRange}
              defaultValue={max_price}
              aria-label="Small"
              valueLabelDisplay="off"
              min={0}
              step={0.5}
              max={max_price}
              sx={{
                color: "oklch(66.6% 0.179 58.318)",
              }}
            />
            <div className="w-full flex justify-between text-amber-800 text-[15px] font-medium">
              <p>€0</p>
              <p>€{filters.priceMax}</p>
            </div>
          </div>
          {/* Submit Button */}
          <div className="w-full h-10">
            <button
              onClick={handleApplyFilters}
              className="w-full h-full bg-amber-600 text-white font-bold rounded-xl shadow-2xl flex justify-center items-center mt-4 cursor-pointer transition-all duration-300 hover:scale-102"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </Drawer>
      <p className="text-3xl w-full text-amber-800 font-bold mb-6">All Books</p>
      <div className="w-full flex">
        {/* Filters of bigger screens go here */}
        <div className="w-1/4 p-4 hidden lg:flex lg:flex-col">
          {/* Categories Filters */}
          <FormGroup className="w-full p-6 bg-white rounded-2xl shadow-2xl text-amber-800 text-[14px] font-medium">
            <p className="text-amber-800 font-bold text-[16px] mb-4">
              Categories
            </p>
            {["Philosophy", "Psychology", "Thriller", "Poetry"].map(
              (item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        value={item}
                        onChange={handleCategories}
                        size="small"
                        sx={{
                          "&.Mui-checked": {
                            color: "#000",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ fontWeight: "500", fontSize: "14px" }}>
                        {item}
                      </Typography>
                    }
                  />
                );
              }
            )}
          </FormGroup>
          {/* Price Filters */}
          <div className="w-full p-6 mt-6 bg-white rounded-2xl shadow-2xl">
            <p className="text-amber-800 font-bold">Price</p>
            <Slider
              onChange={handlePriceRange}
              defaultValue={max_price}
              aria-label="Small"
              valueLabelDisplay="off"
              min={0}
              step={0.5}
              max={max_price}
              sx={{
                color: "oklch(66.6% 0.179 58.318)",
              }}
            />
            <div className="w-full flex justify-between text-amber-800 text-[15px] font-medium">
              <p>€0</p>
              <p>€{filters.priceMax}</p>
            </div>
          </div>
          {/* Submit Button */}
          <div className="w-full h-10">
            <button
              onClick={handleApplyFilters}
              className="w-full h-full bg-amber-600 text-white font-bold rounded-xl shadow-2xl flex justify-center items-center mt-4 cursor-pointer transition-all duration-300 hover:scale-102"
            >
              Apply Filters
            </button>
          </div>
        </div>
        {/* The sorting button and the Books go here */}
        <div className="w-full lg:w-3/4 p-4">
          {/* Sorting button */}
          <div className="w-full flex justify-start mb-4">
            <FormControl sx={{ minWidth: 180 }} size="small">
              <Select defaultValue="featured" onChange={handleSorting}>
                <MenuItem value="featured">Featured</MenuItem>
                <MenuItem value="price_desc">Price: High to Low</MenuItem>
                <MenuItem value="price_asc">Price:Low to High</MenuItem>
                <MenuItem value="alphabetical">Title: A to Z</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* Books List */}
          <div className="w-full flex flex-wrap justify-center md:justify-start">
            {currentBooks.map((item) => {
              return (
                <BookCard
                  key={item.id}
                  id={item.id}
                  imgSrc={item.cover}
                  title={item.title}
                  author={item.author}
                  price={item.price}
                  location="shop"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
