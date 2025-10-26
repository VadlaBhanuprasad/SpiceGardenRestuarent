import React, { useState, useMemo } from 'react';
import { Plus, Star, Search, Clock } from 'lucide-react';
import { CartItem } from '../../App';
import {
  MenuSection,
  MenuContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  MenuControls,
  ControlsRow,
  SearchContainer,
  SearchInput,
  SearchIcon,
  FilterControls,
  FilterButton,
  SortSelect,
  CategoryTabs,
  CategoryTab,
  CategoryIcon,
  CategoryName,

  ResultsCount,
  MenuGrid,
  MenuItem,
  MenuItemImage,
  MenuItemBadges,
  Badge,
  MenuItemInfo,
  InfoBadge,
  MenuItemContent,
  MenuItemTitle,
  MenuItemDescription,
  MenuItemDetails,
  MenuItemFooter,
  MenuItemPrice,
  AddToCartButton,
  EmptyState
} from './Menu.styles';

interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  isNew?: boolean;
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
    { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
    { id: 'breads', name: 'Indian Breads', icon: '🫓', },
    { id: 'curries', name: 'Curries', icon: '🍛',  },
    { id: 'biryanis', name: 'Biryanis & Rice', icon: '🍚',  },
    { id: 'tandoor', name: 'Tandoor Specials', icon: '🔥', },
    // { id: 'seafood', name: 'Seafood', icon: '🦐', count: 25 },
    // { id: 'desserts', name: 'Desserts', icon: '🍮', count: 20 },
    // { id: 'beverages', name: 'Beverages', icon: '🥤', count: 25 },
  ];


  //  'https://www.pexels.com/photo/samosas-in-wicker-basket-on-dinner-table-4449068/', // samosa
  // 'https://images.pexels.com/photos/29547418/pexels-photo-29547418.jpeg', // pakora
  // 'https://images.pexels.com/photos/9213253/pexels-photo-9213253.jpeg', // chaat

  // Unique Indian food images for each category




  const getIndianFoodImage = (category: string, index: number) => {
    const indianFoodImages = {
      appetizers: [
        'https://www.pexels.com/photo/samosas-in-wicker-basket-on-dinner-table-4449068/', // samosa
        'https://images.pexels.com/photos/29547418/pexels-photo-29547418.jpeg', // pakora
        'https://images.pexels.com/photos/9213253/pexels-photo-9213253.jpeg', // chaat
        'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg', // dosa
        'https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg', // idli
        'https://images.pexels.com/photos/9619560/pexels-photo-9619560.jpeg', // vada
        'https://images.pexels.com/photos/28915087/pexels-photo-28915087.jpeg', // uttapam
        'https://images.pexels.com/photos/9738992/pexels-photo-9738992.jpeg', // dhokla
        'https://img.freepik.com/premium-photo/golden-jodhpuri-kachori-white-background-indian-traditional-food-kachori-pimage_1020697-133816.jpg', // kachori
        'https://images.pexels.com/photos/8617361/pexels-photo-8617361.jpeg', // bhel puri
        'https://images.pexels.com/photos/12318206/pexels-photo-12318206.jpeg', // pani puri
        'https://images.pexels.com/photos/27359343/pexels-photo-27359343.jpeg', // aloo tikki
        'https://images.pexels.com/photos/11818239/pexels-photo-11818239.jpeg', // chole bhature
        'https://images.pexels.com/photos/34352096/pexels-photo-34352096.jpeg', // raj kachori
        'https://images.pexels.com/photos/16171915/pexels-photo-16171915.jpeg', // dahi vada
        'https://images.pexels.com/photos/34270742/pexels-photo-34270742.jpeg', // papdi chaat
        'https://images.pexels.com/photos/34270741/pexels-photo-34270741.jpeg', // sev puri
        'https://images.pexels.com/photos/31150218/pexels-photo-31150218.jpeg', // bhajiya
        'https://images.pexels.com/photos/14831540/pexels-photo-14831540.jpeg', // medu vada
        'https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg', // rava idli
        'https://images.pexels.com/photos/28107046/pexels-photo-28107046.jpeg', // masala dosa
        'https://images.pexels.com/photos/8000025/pexels-photo-8000025.jpeg', // rava dosa
        'https://images.herzindagi.info/image/2019/Apr/mysore-pak-image.jpg', // mysore pak
        'https://images.pexels.com/photos/20408458/pexels-photo-20408458.jpeg', // upma
        'https://images.pexels.com/photos/30769669/pexels-photo-30769669.jpeg'  // poha
      ],
      breads: [
        'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg', // naan
        'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg', // roti
        'https://images.pexels.com/photos/20408462/pexels-photo-20408462.jpeg', // paratha
        'https://images.pexels.com/photos/33430554/pexels-photo-33430554.jpeg', // kulcha
        'https://images.pexels.com/photos/6210968/pexels-photo-6210968.jpeg?auto=compress&cs=tinysrgb&w=500', // bhatura
        'https://images.pexels.com/photos/8617361/pexels-photo-8617361.jpeg', // puri
        'https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg', // chapati
        'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=500', // garlic naan
        'https://images.pexels.com/photos/33428723/pexels-photo-33428723.jpeg?auto=compress&cs=tinysrgb&w=500', // butter naan
        'https://images.pexels.com/photos/34425650/pexels-photo-34425650.jpeg?auto=compress&cs=tinysrgb&w=500', // cheese naan
        'https://images.pexels.com/photos/26362263/pexels-photo-26362263.jpeg?auto=compress&cs=tinysrgb&w=500', // aloo paratha
        'https://images.pexels.com/photos/10810650/pexels-photo-10810650.jpeg?auto=compress&cs=tinysrgb&w=500', // gobi paratha
        'https://images.pexels.com/photos/29253334/pexels-photo-29253334.jpeg?auto=compress&cs=tinysrgb&w=500', // paneer paratha
        'https://images.pexels.com/photos/20446390/pexels-photo-20446390.jpeg?auto=compress&cs=tinysrgb&w=500', // methi paratha
        'https://images.pexels.com/photos/8346891/pexels-photo-8346891.jpeg?auto=compress&cs=tinysrgb&w=500'  // lachha paratha
      ],
      curries: [
        'https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg?auto=compress&cs=tinysrgb&w=500', // butter chicken
        'https://images.pexels.com/photos/19834445/pexels-photo-19834445.jpeg?auto=compress&cs=tinysrgb&w=500', // dal makhani
        'https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=500', // paneer makhani
        'https://images.pexels.com/photos/7353379/pexels-photo-7353379.jpeg?auto=compress&cs=tinysrgb&w=500', // chicken curry
        'https://images.pexels.com/photos/29685045/pexels-photo-29685045.jpeg?auto=compress&cs=tinysrgb&w=500', // mutton curry
        'https://images.pexels.com/photos/9609842/pexels-photo-9609842.jpeg?auto=compress&cs=tinysrgb&w=500', // palak paneer
        'https://images.pexels.com/photos/5560779/pexels-photo-5560779.jpeg?auto=compress&cs=tinysrgb&w=500', // rajma
        'https://images.pexels.com/photos/31306976/pexels-photo-31306976.jpeg?auto=compress&cs=tinysrgb&w=500', // chole
        'https://images.pexels.com/photos/33643298/pexels-photo-33643298.jpeg?auto=compress&cs=tinysrgb&w=500', // aloo gobi
        'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=500', // bhindi masala
        'https://images.pexels.com/photos/6210975/pexels-photo-6210975.jpeg?auto=compress&cs=tinysrgb&w=500', // baingan bharta
        'https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg?auto=compress&cs=tinysrgb&w=500', // kadai paneer
        'https://images.pexels.com/photos/32986492/pexels-photo-32986492.jpeg?auto=compress&cs=tinysrgb&w=500', // malai kofta
        'https://images.pexels.com/photos/10345736/pexels-photo-10345736.jpeg?auto=compress&cs=tinysrgb&w=500', // shahi paneer
        'https://images.pexels.com/photos/9609865/pexels-photo-9609865.jpeg?auto=compress&cs=tinysrgb&w=500', // matar paneer
        'https://images.pexels.com/photos/30203314/pexels-photo-30203314.jpeg?auto=compress&cs=tinysrgb&w=500', // dal tadka
        'https://images.pexels.com/photos/28674546/pexels-photo-28674546.jpeg?auto=compress&cs=tinysrgb&w=500', // dal fry
        'https://images.pexels.com/photos/7625074/pexels-photo-7625074.jpeg?auto=compress&cs=tinysrgb&w=500', // sambar
        'https://images.pexels.com/photos/5560783/pexels-photo-5560783.jpeg?auto=compress&cs=tinysrgb&w=500', // rasam
        'https://images.pexels.com/photos/6210978/pexels-photo-6210978.jpeg?auto=compress&cs=tinysrgb&w=500', // avial
        'https://images.pexels.com/photos/7625075/pexels-photo-7625075.jpeg?auto=compress&cs=tinysrgb&w=500', // kootu
        'https://images.pexels.com/photos/5560784/pexels-photo-5560784.jpeg?auto=compress&cs=tinysrgb&w=500', // poriyal
        'https://images.pexels.com/photos/6210979/pexels-photo-6210979.jpeg?auto=compress&cs=tinysrgb&w=500', // kuzhambu
        'https://images.pexels.com/photos/7625076/pexels-photo-7625076.jpeg?auto=compress&cs=tinysrgb&w=500', // mor kuzhambu
        'https://images.pexels.com/photos/5560785/pexels-photo-5560785.jpeg?auto=compress&cs=tinysrgb&w=500', // vendakkai curry
        'https://images.pexels.com/photos/6210980/pexels-photo-6210980.jpeg?auto=compress&cs=tinysrgb&w=500', // kathirikai curry
        'https://images.pexels.com/photos/7625077/pexels-photo-7625077.jpeg?auto=compress&cs=tinysrgb&w=500', // beans poriyal
        'https://images.pexels.com/photos/5560786/pexels-photo-5560786.jpeg?auto=compress&cs=tinysrgb&w=500', // cabbage poriyal
        'https://images.pexels.com/photos/6210981/pexels-photo-6210981.jpeg?auto=compress&cs=tinysrgb&w=500', // carrot poriyal
        'https://images.pexels.com/photos/7625078/pexels-photo-7625078.jpeg?auto=compress&cs=tinysrgb&w=500', // beetroot poriyal
        'https://images.pexels.com/photos/5560787/pexels-photo-5560787.jpeg?auto=compress&cs=tinysrgb&w=500', // drumstick curry
        'https://images.pexels.com/photos/6210982/pexels-photo-6210982.jpeg?auto=compress&cs=tinysrgb&w=500', // snake gourd curry
        'https://images.pexels.com/photos/7625079/pexels-photo-7625079.jpeg?auto=compress&cs=tinysrgb&w=500', // bottle gourd curry
        'https://images.pexels.com/photos/5560788/pexels-photo-5560788.jpeg?auto=compress&cs=tinysrgb&w=500', // ridge gourd curry
        'https://images.pexels.com/photos/6210983/pexels-photo-6210983.jpeg?auto=compress&cs=tinysrgb&w=500', // ash gourd curry
        'https://images.pexels.com/photos/7625080/pexels-photo-7625080.jpeg?auto=compress&cs=tinysrgb&w=500', // pumpkin curry
        'https://images.pexels.com/photos/5560789/pexels-photo-5560789.jpeg?auto=compress&cs=tinysrgb&w=500', // bitter gourd curry
        'https://images.pexels.com/photos/6210984/pexels-photo-6210984.jpeg?auto=compress&cs=tinysrgb&w=500', // cluster beans curry
        'https://images.pexels.com/photos/7625081/pexels-photo-7625081.jpeg?auto=compress&cs=tinysrgb&w=500', // broad beans curry
        'https://images.pexels.com/photos/5560790/pexels-photo-5560790.jpeg?auto=compress&cs=tinysrgb&w=500'  // yam curry
      ],



      biryanis: [
        'https://images.pexels.com/photos/10219670/pexels-photo-10219670.jpeg?auto=compress&cs=tinysrgb&w=500', // chicken biryani
        'https://images.pexels.com/photos/9609847/pexels-photo-9609847.jpeg?auto=compress&cs=tinysrgb&w=500', // mutton biryani
        'https://images.pexels.com/photos/7625082/pexels-photo-7625082.jpeg?auto=compress&cs=tinysrgb&w=500', // veg biryani
        'https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg?auto=compress&cs=tinysrgb&w=500', // hyderabadi biryani
        'https://images.pexels.com/photos/34382327/pexels-photo-34382327.jpeg?auto=compress&cs=tinysrgb&w=500', // lucknowi biryani
        'https://images.pexels.com/photos/7837978/pexels-photo-7837978.jpeg?auto=compress&cs=tinysrgb&w=500', // kolkata biryani
        'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=500', // dum biryani
        'https://images.pexels.com/photos/10078268/pexels-photo-10078268.jpeg?auto=compress&cs=tinysrgb&w=500', // pulao
        'https://images.pexels.com/photos/7625084/pexels-photo-7625084.jpeg?auto=compress&cs=tinysrgb&w=500', // jeera rice
        'https://images.pexels.com/photos/5963875/pexels-photo-5963875.jpeg?auto=compress&cs=tinysrgb&w=500', // coconut rice
        'https://images.pexels.com/photos/4595316/pexels-photo-4595316.jpeg?auto=compress&cs=tinysrgb&w=500', // lemon rice
        'https://images.pexels.com/photos/34433607/pexels-photo-34433607.jpeg?auto=compress&cs=tinysrgb&w=500', // tamarind rice
        'https://images.pexels.com/photos/29684991/pexels-photo-29684991.jpeg?auto=compress&cs=tinysrgb&w=500', // curd rice
        'https://images.pexels.com/photos/31109631/pexels-photo-31109631.jpeg?auto=compress&cs=tinysrgb&w=500', // tomato rice
        'https://images.pexels.com/photos/32390720/pexels-photo-32390720.jpeg?auto=compress&cs=tinysrgb&w=500', // mint rice
        'https://images.pexels.com/photos/15059063/pexels-photo-15059063.jpeg?auto=compress&cs=tinysrgb&w=500', // kashmiri pulao
        'https://images.pexels.com/photos/15059056/pexels-photo-15059056.jpeg?auto=compress&cs=tinysrgb&w=500', // matar pulao
        'https://images.pexels.com/photos/32518328/pexels-photo-32518328.jpeg?auto=compress&cs=tinysrgb&w=500', // mushroom pulao
        'https://images.pexels.com/photos/15059063/pexels-photo-15059063.jpeg?auto=compress&cs=tinysrgb&w=500', // paneer pulao
        'https://images.pexels.com/photos/17650170/pexels-photo-17650170.jpeg?auto=compress&cs=tinysrgb&w=500'  // saffron rice
      ],



      tandoor: [
        'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=500', // tandoori chicken
        'https://images.pexels.com/photos/29173114/pexels-photo-29173114.jpeg?auto=compress&cs=tinysrgb&w=500', // chicken tikka
        'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=500', // seekh kebab
        'https://images.pexels.com/photos/34389377/pexels-photo-34389377.jpeg?auto=compress&cs=tinysrgb&w=500', // boti kebab
        'https://images.pexels.com/photos/2233730/pexels-photo-2233730.jpeg?auto=compress&cs=tinysrgb&w=500', // reshmi kebab
        'https://images.pexels.com/photos/12312104/pexels-photo-12312104.jpeg?auto=compress&cs=tinysrgb&w=500', // malai tikka
        'https://images.pexels.com/photos/20371512/pexels-photo-20371512.jpeg?auto=compress&cs=tinysrgb&w=500', // hariyali tikka
        'https://images.pexels.com/photos/27848435/pexels-photo-27848435.jpeg?auto=compress&cs=tinysrgb&w=500', // achari tikka
        'https://images.pexels.com/photos/2580464/pexels-photo-2580464.jpeg?auto=compress&cs=tinysrgb&w=500', // paneer tikka
        'https://images.pexels.com/photos/5739585/pexels-photo-5739585.jpeg?auto=compress&cs=tinysrgb&w=500', // tandoori fish
        'https://images.pexels.com/photos/9646857/pexels-photo-9646857.jpeg?auto=compress&cs=tinysrgb&w=500', // tandoori prawns
        'https://images.pexels.com/photos/34422177/pexels-photo-34422177.jpeg?auto=compress&cs=tinysrgb&w=500', // lamb chops
        'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=500', // chicken wings
        'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=500', // tandoori roti
        'https://images.pexels.com/photos/28674556/pexels-photo-28674556.jpeg?auto=compress&cs=tinysrgb&w=500', // tandoori naan
        'https://images.pexels.com/photos/8994584/pexels-photo-8994584.jpeg?auto=compress&cs=tinysrgb&w=500', // stuffed naan
        'https://images.pexels.com/photos/6419703/pexels-photo-6419703.jpeg?auto=compress&cs=tinysrgb&w=500', // keema naan
        'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=500', // peshawari naan
        'https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=500', // kulfi naan
        'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=500', // afghani chicken
        'https://images.pexels.com/photos/29631422/pexels-photo-29631422.jpeg?auto=compress&cs=tinysrgb&w=500', // chicken lollipop
        'https://images.pexels.com/photos/13717466/pexels-photo-13717466.jpeg?auto=compress&cs=tinysrgb&w=500', // mutton seekh
        'https://images.pexels.com/photos/18698231/pexels-photo-18698231.jpeg?auto=compress&cs=tinysrgb&w=500', // chicken seekh
        'https://images.pexels.com/photos/2580464/pexels-photo-2580464.jpeg?auto=compress&cs=tinysrgb&w=500', // fish tikka
        'https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=500', // prawn tikka
        'https://images.pexels.com/photos/8352788/pexels-photo-8352788.jpeg?auto=compress&cs=tinysrgb&w=500', // tandoori lobster
        'https://images.pexels.com/photos/18330987/pexels-photo-18330987.jpeg?auto=compress&cs=tinysrgb&w=500', // tandoori vegetables

      ],


      seafood: [
        'https://images.pexels.com/photos/9392999/pexels-photo-9392999.jpeg?auto=compress&cs=tinysrgb&w=500', // fish curry
        'https://images.pexels.com/photos/14537690/pexels-photo-14537690.jpeg?auto=compress&cs=tinysrgb&w=500', // prawn curry
        'https://images.pexels.com/photos/20943892/pexels-photo-20943892.jpeg?auto=compress&cs=tinysrgb&w=500', // crab curry
        'https://images.pexels.com/photos/16068669/pexels-photo-16068669.jpeg?auto=compress&cs=tinysrgb&w=500', // lobster curry
        'https://images.pexels.com/photos/10432706/pexels-photo-10432706.jpeg?auto=compress&cs=tinysrgb&w=500', // fish fry
        'https://images.pexels.com/photos/921367/pexels-photo-921367.jpeg?auto=compress&cs=tinysrgb&w=500', // squid fry
        'https://images.pexels.com/photos/17321008/pexels-photo-17321008.jpeg?auto=compress&cs=tinysrgb&w=500', // fish masala
        'https://images.pexels.com/photos/34411041/pexels-photo-34411041.jpeg?auto=compress&cs=tinysrgb&w=500', // prawn masala
        'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=500', // crab masala

      ],
      desserts: [
        'https://images.pexels.com/photos/5560817/pexels-photo-5560817.jpeg?auto=compress&cs=tinysrgb&w=500', // gulab jamun
        'https://images.pexels.com/photos/6211010/pexels-photo-6211010.jpeg?auto=compress&cs=tinysrgb&w=500', // rasgulla
        'https://images.pexels.com/photos/7625106/pexels-photo-7625106.jpeg?auto=compress&cs=tinysrgb&w=500', // rasmalai
        'https://images.pexels.com/photos/5560818/pexels-photo-5560818.jpeg?auto=compress&cs=tinysrgb&w=500', // kheer
        'https://images.pexels.com/photos/6211011/pexels-photo-6211011.jpeg?auto=compress&cs=tinysrgb&w=500', // kulfi
        'https://images.pexels.com/photos/7625107/pexels-photo-7625107.jpeg?auto=compress&cs=tinysrgb&w=500', // halwa
        'https://images.pexels.com/photos/5560819/pexels-photo-5560819.jpeg?auto=compress&cs=tinysrgb&w=500', // laddu
        'https://images.pexels.com/photos/6211012/pexels-photo-6211012.jpeg?auto=compress&cs=tinysrgb&w=500', // barfi
        'https://images.pexels.com/photos/7625108/pexels-photo-7625108.jpeg?auto=compress&cs=tinysrgb&w=500', // jalebi
        'https://images.pexels.com/photos/5560820/pexels-photo-5560820.jpeg?auto=compress&cs=tinysrgb&w=500', // rabri
        'https://images.pexels.com/photos/6211013/pexels-photo-6211013.jpeg?auto=compress&cs=tinysrgb&w=500', // sandesh
        'https://images.pexels.com/photos/7625109/pexels-photo-7625109.jpeg?auto=compress&cs=tinysrgb&w=500', // mishti doi
        'https://images.pexels.com/photos/5560821/pexels-photo-5560821.jpeg?auto=compress&cs=tinysrgb&w=500', // payasam
        'https://images.pexels.com/photos/6211014/pexels-photo-6211014.jpeg?auto=compress&cs=tinysrgb&w=500', // kesari
        'https://images.pexels.com/photos/7625110/pexels-photo-7625110.jpeg?auto=compress&cs=tinysrgb&w=500', // mysore pak
        'https://images.pexels.com/photos/5560822/pexels-photo-5560822.jpeg?auto=compress&cs=tinysrgb&w=500', // kaju katli
        'https://images.pexels.com/photos/6211015/pexels-photo-6211015.jpeg?auto=compress&cs=tinysrgb&w=500', // peda
        'https://images.pexels.com/photos/7625111/pexels-photo-7625111.jpeg?auto=compress&cs=tinysrgb&w=500', // modak
        'https://images.pexels.com/photos/5560823/pexels-photo-5560823.jpeg?auto=compress&cs=tinysrgb&w=500', // puran poli
        'https://images.pexels.com/photos/6211016/pexels-photo-6211016.jpeg?auto=compress&cs=tinysrgb&w=500'  // shrikhand
      ],
      beverages: [
        'https://images.pexels.com/photos/5560824/pexels-photo-5560824.jpeg?auto=compress&cs=tinysrgb&w=500', // masala chai
        'https://images.pexels.com/photos/6211017/pexels-photo-6211017.jpeg?auto=compress&cs=tinysrgb&w=500', // filter coffee
        'https://images.pexels.com/photos/7625112/pexels-photo-7625112.jpeg?auto=compress&cs=tinysrgb&w=500', // lassi
        'https://images.pexels.com/photos/5560825/pexels-photo-5560825.jpeg?auto=compress&cs=tinysrgb&w=500', // mango lassi
        'https://images.pexels.com/photos/6211018/pexels-photo-6211018.jpeg?auto=compress&cs=tinysrgb&w=500', // buttermilk
        'https://images.pexels.com/photos/7625113/pexels-photo-7625113.jpeg?auto=compress&cs=tinysrgb&w=500', // nimbu paani
        'https://images.pexels.com/photos/5560826/pexels-photo-5560826.jpeg?auto=compress&cs=tinysrgb&w=500', // jaljeera
        'https://images.pexels.com/photos/6211019/pexels-photo-6211019.jpeg?auto=compress&cs=tinysrgb&w=500', // aam panna
        'https://images.pexels.com/photos/7625114/pexels-photo-7625114.jpeg?auto=compress&cs=tinysrgb&w=500', // thandai
        'https://images.pexels.com/photos/5560827/pexels-photo-5560827.jpeg?auto=compress&cs=tinysrgb&w=500', // badam milk
        'https://images.pexels.com/photos/6211020/pexels-photo-6211020.jpeg?auto=compress&cs=tinysrgb&w=500', // rose milk
        'https://images.pexels.com/photos/7625115/pexels-photo-7625115.jpeg?auto=compress&cs=tinysrgb&w=500', // kulfi shake
        'https://images.pexels.com/photos/5560828/pexels-photo-5560828.jpeg?auto=compress&cs=tinysrgb&w=500', // falooda
        'https://images.pexels.com/photos/6211021/pexels-photo-6211021.jpeg?auto=compress&cs=tinysrgb&w=500', // rooh afza
        'https://images.pexels.com/photos/7625116/pexels-photo-7625116.jpeg?auto=compress&cs=tinysrgb&w=500', // kokum juice
        'https://images.pexels.com/photos/5560829/pexels-photo-5560829.jpeg?auto=compress&cs=tinysrgb&w=500', // sugarcane juice
        'https://images.pexels.com/photos/6211022/pexels-photo-6211022.jpeg?auto=compress&cs=tinysrgb&w=500', // tender coconut
        'https://images.pexels.com/photos/7625117/pexels-photo-7625117.jpeg?auto=compress&cs=tinysrgb&w=500', // paneer soda
        'https://images.pexels.com/photos/5560830/pexels-photo-5560830.jpeg?auto=compress&cs=tinysrgb&w=500', // masala soda
        'https://images.pexels.com/photos/6211023/pexels-photo-6211023.jpeg?auto=compress&cs=tinysrgb&w=500', // fresh lime soda
        'https://images.pexels.com/photos/7625118/pexels-photo-7625118.jpeg?auto=compress&cs=tinysrgb&w=500', // mint lemonade
        'https://images.pexels.com/photos/5560831/pexels-photo-5560831.jpeg?auto=compress&cs=tinysrgb&w=500', // watermelon juice
        'https://images.pexels.com/photos/6211024/pexels-photo-6211024.jpeg?auto=compress&cs=tinysrgb&w=500', // pomegranate juice
        'https://images.pexels.com/photos/7625119/pexels-photo-7625119.jpeg?auto=compress&cs=tinysrgb&w=500', // orange juice
        'https://images.pexels.com/photos/5560832/pexels-photo-5560832.jpeg?auto=compress&cs=tinysrgb&w=500'  // mixed fruit juice
      ]
    };
    
    const categoryImages = indianFoodImages[category as keyof typeof indianFoodImages] || indianFoodImages.appetizers;
    return categoryImages[index];
  };

  // Generate 200+ Indian menu items with unique images
  const menuItems: MenuItemType[] = useMemo(() => {
    const items: MenuItemType[] = [];
    let id = 1;

    // Appetizers (25 items)
      const appetizers = [
     'Samosa','Pakora','Chaat','Dosa','Idli','Vada','Uttapam','Dhokla','Kachori','Bhel Puri','Pani Puri','Aloo Tikki','Chole Bhature','Raj Kachori','Dahi Vada','Papdi Chaat','Sev Puri','Bhajiya','Medu Vada','Rava Idli','Masala Dosa','Rava Dosa','Mysore Pak','Upma','Poha'
    ];

    appetizers.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Authentic ${name.toLowerCase()} prepared with traditional Indian spices and fresh ingredients`,
        price: Math.floor(Math.random() * 15) + 8,
        image: getIndianFoodImage('appetizers', index),
        category: 'appetizers',
        popular: Math.random() > 0.7,
        spicy: Math.random() > 0.6,
        vegetarian: !name.includes('Chicken') && !name.includes('Fish') && !name.includes('Mutton') && !name.includes('Prawn'),
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 15) + 10,
        calories: Math.floor(Math.random() * 200) + 150
      });
    });

    // Indian Breads (15 items)
    const breads = [
      'Butter Naan', 'Garlic Naan', 'Cheese Naan', 'Keema Naan', 'Peshawari Naan',
      'Tandoori Roti', 'Butter Roti', 'Aloo Paratha', 'Gobi Paratha', 'Paneer Paratha',
      'Methi Paratha', 'Lachha Paratha', 'Bhatura', 'Puri', 'Kulcha'
    ];

    breads.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Fresh ${name.toLowerCase()} baked in our traditional tandoor oven`,
        price: Math.floor(Math.random() * 8) + 4,
        image: getIndianFoodImage('breads', index),
        category: 'breads',
        vegetarian: !name.includes('Keema'),
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 10) + 8,
        calories: Math.floor(Math.random() * 150) + 200
      });
    });

    // Curries (40 items)
    const curries = [
      'Butter Chicken', 'Chicken Tikka Masala', 'Chicken Curry', 'Chicken Korma', 'Chicken Vindaloo',
      'Mutton Curry', 'Mutton Rogan Josh', 'Keema Curry', 'Goat Curry', 'Lamb Curry',
      'Dal Makhani', 'Dal Tadka', 'Dal Fry', 'Chana Masala', 'Rajma',
      'Palak Paneer', 'Paneer Makhani', 'Kadai Paneer', 'Shahi Paneer', 'Matar Paneer',
      'Malai Kofta', 'Aloo Gobi', 'Bhindi Masala', 'Baingan Bharta', 'Mixed Vegetable Curry',
      'Sambar', 'Rasam', 'Avial', 'Kootu', 'Poriyal',
      'Vendakkai Curry', 'Kathirikai Curry', 'Beans Poriyal', 'Cabbage Poriyal', 'Carrot Poriyal',
      'Beetroot Poriyal', 'Drumstick Curry', 'Bottle Gourd Curry', 'Pumpkin Curry', 'Bitter Gourd Curry'
    ];

    curries.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Rich and flavorful ${name.toLowerCase()} cooked with aromatic spices and herbs`,
        price: Math.floor(Math.random() * 20) + 12,
        image: getIndianFoodImage('curries', index),
        category: 'curries',
        popular: Math.random() > 0.75,
        spicy: Math.random() > 0.5,
        vegetarian: !name.includes('Chicken') && !name.includes('Mutton') && !name.includes('Keema') && !name.includes('Goat') && !name.includes('Lamb'),
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 25) + 15,
        calories: Math.floor(Math.random() * 300) + 250
      });
    });

    // Biryanis & Rice (20 items)

    const biryanis = [
      'Chicken Biryani', 'Mutton Biryani', 'Veg Biryani', 'Hyderabadi Biryani', 'Lucknowi Biryani','Kolkata Biryani','Dum biryani','Pulao','Jeera Rice','Coconut Rice','Lemon Rice','Tamarind Rice','Curd Rice','Tomato Rice','Mint Rice','Kashmiri Pulao','Matar Pulao','Mushroom Pulao','Paneer Pulao','Saffron Rice',

    ];

    biryanis.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Aromatic ${name.toLowerCase()} cooked with basmati rice and traditional spices`,
        price: Math.floor(Math.random() * 25) + 15,
        image: getIndianFoodImage('biryanis', index),
        category: 'biryanis',
        popular: Math.random() > 0.8,
        spicy: Math.random() > 0.6,
        vegetarian: !name.includes('Chicken') && !name.includes('Mutton') && !name.includes('Egg'),
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 30) + 25,
        calories: Math.floor(Math.random() * 400) + 400
      });
    });

    // Tandoor Specials (30 items)
          const tandoor = [
      'Tandoori Chicken', 'Chicken Tikka','Seekh Kebab', 'Boti Kebab','Reshmi Kebab', 'Malai Tikka',  'Hariyali Tikka','Achari Tikka','Paneer Tikka','Tandoori Fish',
            'Tandoori Naan', 'Butter Naan', 'Cheese Naan', 'Garlic Naan', 'Aloo Paratha', 'Gobi Paratha', 'Paneer Paratha', 'Methi Paratha', 'Lachha Paratha',
      
      

    ];

    tandoor.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Smoky ${name.toLowerCase()} grilled to perfection in our traditional tandoor oven`,
        price: Math.floor(Math.random() * 30) + 18,
        image: getIndianFoodImage('tandoor', index),
        category: 'tandoor',
        popular: Math.random() > 0.7,
        spicy: Math.random() > 0.4,
        vegetarian: name.includes('Paneer') || name.includes('Vegetables') || name.includes('Mushroom') || name.includes('Corn') || name.includes('Soya') || name.includes('Roti') || name.includes('Naan'),
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 20) + 15,
        calories: Math.floor(Math.random() * 350) + 300
      });
    });

    // Seafood (25 items)
          const seafood = [
      'fish curry','prawn curry','crab curry','lobster curry','fish fry','squid fry','fish masala','prawn masala','crab masala'
    ];

    seafood.forEach((name, index) => {
      items.push({
        id: id++,
        name,
        description: `Fresh ${name.toLowerCase()} prepared with coastal spices and traditional techniques`,
        price: Math.floor(Math.random() * 35) + 20,
        image: getIndianFoodImage('seafood', index),
        category: 'seafood',
        popular: Math.random() > 0.8,
        spicy: Math.random() > 0.5,
        glutenFree: Math.random() > 0.3,
        rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
        prepTime: Math.floor(Math.random() * 25) + 15,
        calories: Math.floor(Math.random() * 300) + 250
      });
    });

    // // Desserts (20 items)
    // const desserts = [
    //   'Gulab Jamun', 'Rasgulla', 'Rasmalai', 'Kheer', 'Kulfi',
    //   'Gajar Halwa', 'Besan Laddu', 'Kaju Barfi', 'Jalebi', 'Rabri',
    //   'Sandesh', 'Mishti Doi', 'Payasam', 'Kesari', 'Mysore Pak',
    //   'Kaju Katli', 'Peda', 'Modak', 'Puran Poli', 'Shrikhand'
    // ];

    // desserts.forEach((name, index) => {
    //   items.push({
    //     id: id++,
    //     name,
    //     description: `Traditional ${name.toLowerCase()} made with authentic recipes and finest ingredients`,
    //     price: Math.floor(Math.random() * 12) + 6,
    //     image: getIndianFoodImage('desserts', index),
    //     category: 'desserts',
    //     popular: Math.random() > 0.7,
    //     vegetarian: true,
    //     rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
    //     prepTime: Math.floor(Math.random() * 15) + 8,
    //     calories: Math.floor(Math.random() * 250) + 200
    //   });
    // });

    // // Beverages (25 items)
    // const beverages = [
    //   'Masala Chai', 'Filter Coffee', 'Sweet Lassi', 'Mango Lassi', 'Buttermilk',
    //   'Nimbu Paani', 'Jaljeera', 'Aam Panna', 'Thandai', 'Badam Milk',
    //   'Rose Milk', 'Kulfi Shake', 'Falooda', 'Rooh Afza', 'Kokum Juice',
    //   'Sugarcane Juice', 'Tender Coconut', 'Paneer Soda', 'Masala Soda', 'Fresh Lime Soda',
    //   'Mint Lemonade', 'Watermelon Juice', 'Pomegranate Juice', 'Orange Juice', 'Mixed Fruit Juice'
    // ];

    // beverages.forEach((name, index) => {
    //   items.push({
    //     id: id++,
    //     name,
    //     description: `Refreshing ${name.toLowerCase()} made with natural ingredients and traditional methods`,
    //     price: Math.floor(Math.random() * 10) + 4,
    //     image: getIndianFoodImage('beverages', index),
    //     category: 'beverages',
    //     vegetarian: true,
    //     rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
    //     prepTime: Math.floor(Math.random() * 8) + 3,
    //     calories: Math.floor(Math.random() * 150) + 50
    //   });
    // });

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

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <MenuSection id="menu">
      <MenuContainer>
        <SectionHeader>
          <SectionTitle>Our Authentic Menu</SectionTitle>
          <SectionSubtitle>
            Discover our extensive collection of over 200 traditional Indian dishes, 
            each prepared with authentic spices and time-honored recipes.
          </SectionSubtitle>
        </SectionHeader>

        <MenuControls>
          <ControlsRow>
            <SearchContainer>
              <SearchIcon>
                <Search size={20} />
              </SearchIcon>
              <SearchInput
                type="text"
                placeholder="Search our menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchContainer>
            
            <FilterControls>
              <FilterButton
                active={filterVegetarian}
                onClick={() => setFilterVegetarian(!filterVegetarian)}
              >
                🌱 Vegetarian
              </FilterButton>
              
              <SortSelect
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </SortSelect>
            </FilterControls>
          </ControlsRow>
        </MenuControls>

        <CategoryTabs>
          {categories.map((category) => (
            <CategoryTab
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryName>{category.name}</CategoryName>
            </CategoryTab>
          ))}
        </CategoryTabs>

        <ResultsCount>
          Showing {filteredItems.length} delicious options
        </ResultsCount>

        {filteredItems.length > 0 ? (
          <MenuGrid>
            {filteredItems.map((item) => (
              <MenuItem key={item.id}>
                <MenuItemImage>
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=500';
                    }}
                  />
                  
                  <MenuItemBadges>
                    {item.popular && <Badge variant="popular">🔥 Popular</Badge>}
                    {item.vegetarian && <Badge variant="vegetarian">🌱 Veggie</Badge>}
                    {item.spicy && <Badge variant="spicy">🌶️ Spicy</Badge>}
                    {item.isNew && <Badge variant="new">✨ New</Badge>}
                  </MenuItemBadges>

                  <MenuItemInfo>
                    <InfoBadge>
                      <Star size={12} fill="currentColor" />
                      {item.rating}
                    </InfoBadge>
                    <InfoBadge>
                      <Clock size={12} />
                      {item.prepTime}m
                    </InfoBadge>
                  </MenuItemInfo>
                </MenuItemImage>
                
                <MenuItemContent>
                  <MenuItemTitle>{item.name}</MenuItemTitle>
                  <MenuItemDescription>{item.description}</MenuItemDescription>
                  
                  <MenuItemDetails>
                    <span>{item.calories} cal</span>
                    <div>
                      {item.glutenFree && <span>GF </span>}
                      {item.vegan && <span>V</span>}
                    </div>
                  </MenuItemDetails>
                  
                  <MenuItemFooter>
                    <MenuItemPrice>₹{item.price}</MenuItemPrice>
                    <AddToCartButton
                      onClick={() => onAddToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image
                      })}
                    >
                      <Plus size={20} />
                    </AddToCartButton>
                  </MenuItemFooter>
                </MenuItemContent>
              </MenuItem>
            ))}
          </MenuGrid>
        ) : (
          <EmptyState>
            <h3>No items found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </EmptyState>
        )}
      </MenuContainer>
    </MenuSection>
  );
};

export default Menu;