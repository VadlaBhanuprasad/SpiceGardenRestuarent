import React, { useState, useMemo } from 'react';
import { Plus, Star, Search, Heart, Clock, Flame } from 'lucide-react';
import { CartItem } from '../App';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  rating: number;
  prepTime: number;
  calories?: number;
}

interface MenuProps {
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterVegetarian, setFilterVegetarian] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: '🍤', count: 25 },
    { id: 'soups', name: 'Soups & Salads', icon: '🥗', count: 20 },
    { id: 'mains', name: 'Main Courses', icon: '🥩', count: 45 },
    { id: 'pasta', name: 'Pasta & Risotto', icon: '🍝', count: 30 },
    { id: 'seafood', name: 'Seafood', icon: '🐟', count: 35 },
    { id: 'pizza', name: 'Artisan Pizza', icon: '🍕', count: 15 },
    { id: 'desserts', name: 'Desserts', icon: '🍰', count: 25 },
    { id: 'beverages', name: 'Beverages', icon: '🍷', count: 40 },
  ];

  // High-quality food images from Pexels
  const getImageUrl = (category: string, index: number) => {
    const imageIds = {
      appetizers: [1640772, 1279330, 566344, 1640770, 1640777, 1640774, 1640771, 1640775, 725991, 6880219, 1267360, 1535244, 958545, 2252584, 3201921, 1267320, 2474661, 1633578, 1410235, 1099680, 1410236, 1410238, 1410240, 1410242, 1410244],
      soups: [1640773, 1410235, 1633578, 2474661, 1099680, 1410236, 1410238, 1410240, 1410242, 1410244, 1410246, 1410248, 1410250, 1410252, 1410254, 1410256, 1410258, 1410260, 1410262, 1410264],
      mains: [769289, 1109197, 1640770, 958545, 2252584, 3201921, 1267320, 2474661, 1633578, 1410235, 1099680, 1410236, 1410238, 1410240, 1410242, 1410244, 1410246, 1410248, 1410250, 1410252, 1410254, 1410256, 1410258, 1410260, 1410262, 1410264, 1410266, 1410268, 1410270, 1410272, 1410274, 1410276, 1410278, 1410280, 1410282, 1410284, 1410286, 1410288, 1410290, 1410292, 1410294, 1410296, 1410298, 1410300, 1410302],
      pasta: [1640777, 1640774, 1410235, 1633578, 2474661, 1099680, 1410236, 1410238, 1410240, 1410242, 1410244, 1410246, 1410248, 1410250, 1410252, 1410254, 1410256, 1410258, 1410260, 1410262, 1410264, 1410266, 1410268, 1410270, 1410272, 1410274, 1410276, 1410278, 1410280, 1410282],
      seafood: [1640771, 725991, 566344, 1410235, 1633578, 2474661, 1099680, 1410236, 1410238, 1410240, 1410242, 1410244, 1410246, 1410248, 1410250, 1410252, 1410254, 1410256, 1410258, 1410260, 1410262, 1410264, 1410266, 1410268, 1410270, 1410272, 1410274, 1410276, 1410278, 1410280, 1410282, 1410284, 1410286, 1410288, 1410290],
      pizza: [315755, 1640772, 1279330, 566344, 1640770, 1640777, 1640774, 1640771, 1640775, 725991, 6880219, 1267360, 1535244, 958545, 2252584],
      desserts: [1640775, 6880219, 1410235, 1633578, 2474661, 1099680, 1410236, 1410238, 1410240, 1410242, 1410244, 1410246, 1410248, 1410250, 1410252, 1410254, 1410256, 1410258, 1410260, 1410262, 1410264, 1410266, 1410268, 1410270, 1410272],
      beverages: [1267360, 1535244, 1410235, 1633578, 2474661, 1099680, 1410236, 1410238, 1410240, 1410242, 1410244, 1410246, 1410248, 1410250, 1410252, 1410254, 1410256, 1410258, 1410260, 1410262, 1410264, 1410266, 1410268, 1410270, 1410272, 1410274, 1410276, 1410278, 1410280, 1410282, 1410284, 1410286, 1410288, 1410290, 1410292, 1410294, 1410296, 1410298, 1410300, 1410302]
    };
    
    const categoryImages = imageIds[category as keyof typeof imageIds] || imageIds.appetizers;
    const imageId = categoryImages[index % categoryImages.length];
    return `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop`;
  };

  // Generate 200+ menu items with proper images
  const menuItems: MenuItem[] = useMemo(() => {
    const items: MenuItem[] = [];
    let id = 1;

    // Appetizers (25 items)
    const appetizers = [
      'Truffle Arancini', 'Burrata Caprese', 'Pan-Seared Scallops', 'Beef Carpaccio', 'Tuna Tartare',
      'Foie Gras Terrine', 'Oysters Rockefeller', 'Lobster Bisque Shooters', 'Prosciutto Melon',
      'Stuffed Mushrooms', 'Calamari Fritti', 'Shrimp Cocktail', 'Cheese Board Selection',
      'Smoked Salmon Blini', 'Duck Liver Mousse', 'Antipasto Platter', 'Crab Cakes',
      'Escargot Bourguignon', 'Tuna Sashimi', 'Chicken Satay', 'Bruschetta Trio',
      'Baked Brie', 'Deviled Eggs', 'Bacon Wrapped Scallops', 'Spinach Artichoke Dip'
    ];

    appetizers.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Exquisitely prepared ${name.toLowerCase()} with premium ingredients and chef's special touch`,
        price: Math.floor(Math.random() * 20) + 15,
        image: getImageUrl('appetizers', index),
        category: 'appetizers',
        popular: Math.random() > 0.7,
        spicy: Math.random() > 0.8,
        vegetarian: Math.random() > 0.6,
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 15) + 10,
        calories: Math.floor(Math.random() * 300) + 200
      });
    });

    // Soups & Salads (20 items)
    const soupsAndSalads = [
      'French Onion Soup', 'Lobster Bisque', 'Minestrone', 'Gazpacho', 'Clam Chowder',
      'Caesar Salad', 'Greek Salad', 'Arugula Salad', 'Waldorf Salad', 'Cobb Salad',
      'Butternut Squash Soup', 'Tom Yum Soup', 'Mushroom Soup', 'Spinach Salad',
      'Quinoa Salad', 'Beet Salad', 'Caprese Salad', 'Nicoise Salad', 'Asian Chicken Salad', 'Kale Caesar'
    ];

    soupsAndSalads.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Fresh and flavorful ${name.toLowerCase()} made with seasonal ingredients`,
        price: Math.floor(Math.random() * 15) + 12,
        image: getImageUrl('soups', index),
        category: 'soups',
        vegetarian: Math.random() > 0.4,
        vegan: Math.random() > 0.7,
        glutenFree: Math.random() > 0.6,
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 10) + 8,
        calories: Math.floor(Math.random() * 200) + 150
      });
    });

    // Main Courses (45 items)
    const mains = [
      'Wagyu Beef Tenderloin', 'Duck Confit', 'Lamb Rack', 'Pork Tenderloin', 'Veal Osso Buco',
      'Beef Wellington', 'Coq au Vin', 'Bouillabaisse', 'Paella Valenciana', 'Rack of Lamb',
      'Filet Mignon', 'Ribeye Steak', 'New York Strip', 'T-Bone Steak', 'Prime Rib',
      'Chicken Cordon Bleu', 'Chicken Marsala', 'Chicken Piccata', 'Roasted Chicken', 'Duck à l\'Orange',
      'Pork Chops', 'Baby Back Ribs', 'Braised Short Ribs', 'Beef Bourguignon', 'Osso Buco',
      'Venison Medallions', 'Rabbit Ragu', 'Quail Stuffed', 'Turkey Roulade', 'Cornish Hen',
      'Vegetarian Wellington', 'Stuffed Portobello', 'Eggplant Parmesan', 'Ratatouille', 'Quinoa Bowl',
      'Tofu Stir Fry', 'Vegetable Curry', 'Mushroom Risotto', 'Stuffed Peppers', 'Cauliflower Steak',
      'Lentil Shepherd\'s Pie', 'Veggie Burger', 'Falafel Plate', 'Buddha Bowl', 'Acai Bowl'
    ];

    mains.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Masterfully prepared ${name.toLowerCase()} with seasonal accompaniments`,
        price: Math.floor(Math.random() * 40) + 35,
        image: getImageUrl('mains', index),
        category: 'mains',
        popular: Math.random() > 0.8,
        spicy: Math.random() > 0.85,
        vegetarian: name.includes('Vegetarian') || name.includes('Veggie') || name.includes('Tofu'),
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 25) + 20,
        calories: Math.floor(Math.random() * 400) + 400
      });
    });

    // Pasta & Risotto (30 items)
    const pasta = [
      'Lobster Ravioli', 'Truffle Risotto', 'Carbonara', 'Bolognese', 'Pesto Linguine',
      'Seafood Linguine', 'Mushroom Risotto', 'Cacio e Pepe', 'Amatriciana', 'Puttanesca',
      'Alfredo Fettuccine', 'Lasagna Classica', 'Gnocchi Sorrentina', 'Osso Buco Risotto', 'Spaghetti Vongole',
      'Penne Arrabbiata', 'Tortellini Panna', 'Ravioli Spinaci', 'Risotto Milanese', 'Pasta Primavera',
      'Shrimp Scampi', 'Chicken Parmigiana', 'Eggplant Parmigiana', 'Ziti Baked', 'Manicotti',
      'Cannelloni', 'Agnolotti', 'Pappardelle Ragu', 'Orecchiette Sausage', 'Rigatoni Vodka'
    ];

    pasta.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Authentic Italian ${name.toLowerCase()} made with imported ingredients`,
        price: Math.floor(Math.random() * 25) + 22,
        image: getImageUrl('pasta', index),
        category: 'pasta',
        popular: Math.random() > 0.75,
        vegetarian: Math.random() > 0.5,
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 20) + 15,
        calories: Math.floor(Math.random() * 300) + 350
      });
    });

    // Seafood (35 items)
    const seafood = [
      'Chilean Sea Bass', 'Grilled Octopus', 'Lobster Thermidor', 'Salmon Teriyaki', 'Tuna Steak',
      'Halibut Fillet', 'Cod Provencal', 'Mussels Mariniere', 'Cioppino', 'Fish and Chips',
      'Crab Legs', 'Shrimp Tempura', 'Oysters Mignonette', 'Scallops Risotto', 'Branzino Whole',
      'Red Snapper', 'Mahi Mahi', 'Swordfish Steak', 'Monkfish Medallions', 'Dover Sole',
      'Turbot Fillet', 'John Dory', 'Sea Bream', 'Langoustines', 'Prawns Garlic',
      'Calamari Steak', 'Abalone', 'Sea Urchin', 'Caviar Service', 'Smoked Trout',
      'Ceviche', 'Poke Bowl', 'Fish Tacos', 'Clam Linguine', 'Seafood Paella'
    ];

    seafood.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Fresh ${name.toLowerCase()} sourced daily from sustainable fisheries`,
        price: Math.floor(Math.random() * 35) + 28,
        image: getImageUrl('seafood', index),
        category: 'seafood',
        popular: Math.random() > 0.8,
        glutenFree: Math.random() > 0.3,
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 20) + 12,
        calories: Math.floor(Math.random() * 250) + 300
      });
    });

    // Pizza (15 items)
    const pizzas = [
      'Margherita', 'Pepperoni', 'Quattro Stagioni', 'Prosciutto Arugula', 'Truffle Mushroom',
      'Seafood Supreme', 'BBQ Chicken', 'Hawaiian', 'Vegetarian Deluxe', 'Meat Lovers',
      'White Pizza', 'Pesto Chicken', 'Buffalo Chicken', 'Mediterranean', 'Calzone'
    ];

    pizzas.forEach((name, index) => {
      items.push({
        id: id++,
        name: `${name} Pizza`,
        description: `Wood-fired ${name.toLowerCase()} pizza with artisanal toppings`,
        price: Math.floor(Math.random() * 15) + 18,
        image: getImageUrl('pizza', index),
        category: 'pizza',
        vegetarian: name.includes('Vegetarian') || name === 'Margherita',
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 10) + 12,
        calories: Math.floor(Math.random() * 200) + 400
      });
    });

    // Desserts (25 items)
    const desserts = [
      'Chocolate Soufflé', 'Tiramisu', 'Crème Brûlée', 'Panna Cotta', 'Gelato Selection',
      'Cannoli', 'Cheesecake', 'Apple Tart', 'Lemon Tart', 'Chocolate Mousse',
      'Profiteroles', 'Éclair', 'Mille-feuille', 'Opera Cake', 'Macarons',
      'Affogato', 'Zabaglione', 'Semifreddo', 'Granita', 'Sorbet',
      'Bread Pudding', 'Rice Pudding', 'Flan', 'Tarte Tatin', 'Banoffee Pie'
    ];

    desserts.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Decadent ${name.toLowerCase()} crafted by our pastry chef`,
        price: Math.floor(Math.random() * 10) + 12,
        image: getImageUrl('desserts', index),
        category: 'desserts',
        popular: Math.random() > 0.7,
        vegetarian: true,
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 15) + 8,
        calories: Math.floor(Math.random() * 200) + 250
      });
    });

    // Beverages (40 items)
    const beverages = [
      'House Wine Red', 'House Wine White', 'Champagne', 'Prosecco', 'Sangria',
      'Craft Beer', 'IPA', 'Lager', 'Stout', 'Wheat Beer',
      'Martini', 'Manhattan', 'Old Fashioned', 'Negroni', 'Aperol Spritz',
      'Mojito', 'Caipirinha', 'Margarita', 'Cosmopolitan', 'Whiskey Sour',
      'Espresso', 'Cappuccino', 'Latte', 'Americano', 'Macchiato',
      'Tea Selection', 'Hot Chocolate', 'Fresh Juice', 'Smoothie', 'Kombucha',
      'Sparkling Water', 'Still Water', 'Soft Drinks', 'Energy Drink', 'Mocktails',
      'Port Wine', 'Sherry', 'Cognac', 'Grappa', 'Limoncello'
    ];

    beverages.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Premium ${name.toLowerCase()} carefully selected for quality`,
        price: Math.floor(Math.random() * 20) + 8,
        image: getImageUrl('beverages', index),
        category: 'beverages',
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 5) + 2,
        calories: Math.floor(Math.random() * 150) + 50
      });
    });

    return items;
  }, []);

  const filteredItems = useMemo(() => {
    let filtered = menuItems.filter(item => item.category === activeCategory);
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterVegetarian) {
      filtered = filtered.filter(item => item.vegetarian);
    }
    
    // Sort items
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        default: // popular
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      }
    });
    
    return filtered;
  }, [menuItems, activeCategory, searchTerm, filterVegetarian, sortBy]);

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-secondary-900 mb-6">
            Our Culinary Journey
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Discover our extensive collection of over 200 carefully crafted dishes, 
            each telling a unique story of flavor, tradition, and innovation.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setFilterVegetarian(!filterVegetarian)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  filterVegetarian ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <span>🌱</span>
                <span>Vegetarian</span>
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-xl transform scale-105'
                  : 'bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-700 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <div className="text-left">
                <div>{category.name}</div>
                <div className="text-xs opacity-75">{category.count} items</div>
              </div>
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-secondary-600">
            Showing {filteredItems.length} delicious options
          </p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop`;
                  }}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {item.popular && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Flame className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  {item.vegetarian && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      🌱 Veggie
                    </span>
                  )}
                  {item.spicy && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      🌶️ Spicy
                    </span>
                  )}
                </div>

                {/* Rating & Time */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <div className="bg-black/70 text-white px-2 py-1 rounded-full flex items-center text-xs">
                    <Star className="w-3 h-3 fill-current text-yellow-400 mr-1" />
                    {item.rating}
                  </div>
                  <div className="bg-black/70 text-white px-2 py-1 rounded-full flex items-center text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {item.prepTime}m
                  </div>
                </div>

                {/* Wishlist */}
                <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-secondary-900 mb-2 line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-secondary-600 mb-4 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
                
                {/* Additional Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{item.calories} cal</span>
                  <div className="flex gap-2">
                    {item.glutenFree && <span>GF</span>}
                    {item.vegan && <span>V</span>}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">
                    ${item.price}
                  </span>
                  <button
                    onClick={() => onAddToCart({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: item.image
                    })}
                    className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-all duration-300 group-hover:scale-110 transform shadow-lg hover:shadow-xl"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;