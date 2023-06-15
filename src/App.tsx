import React, {ChangeEvent, useState,KeyboardEvent} from 'react';
import './App.css';
import {ProductCard} from './ProductCard';

function App() {
    const [products, setProducts] = useState([
        {
            id: 1,
            src: 'https://kraken360.ru/upload/iblock/41f/1.jpg',
            title: 'iPhone X',
            description: 'A 5.5" beast of processing power from Apple',
            price: 999
        },
        {
            id: 2,
            src: 'https://apple11.ru/14044/samsung-galaxy-s9-64gb-g960-ultrafiolet-.jpg',
            title: 'Samsung S9',
            description: 'The most powerful Android device on the planet',
            price: 789
        },
        {
            id: 3,
            src: 'https://c.ua/image/cache/catalog/VladimirGorchakov/GooglePixel7Pro/whi/1-800x800.jpg',
            title: 'Pixel 2',
            description: 'The perfect phone for a clean Android experience',
            price: 876
        },
        {
            id: 4,
            src: 'https://fonarimarket.ru/_imag_images/115/45446-oneplus-6.jpg',
            title: 'Oneplus 6',
            description: 'The latest from a long line of affordable premium devices by Oneplus',
            price: 799
        },
        {
            id: 5,
            src: 'https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/a/p/apple_iphone_8_plus_red_11_1.jpg',
            title: 'iPhone 8',
            description: 'The little, less-stylish brother of the iPhone X.',
            price: 789
        },
        {
            id: 6,
            src: 'https://vedroid.com/img/smartphones/xiaomi-redmi-note-10-pro-(china)/01.jpg',
            title: 'Redmi Note 10 PRO',
            description: 'The latest and most powerful smartphone from LG.',
            price: 789
        },
        {
            id: 7,
            src: 'https://c.ua/image/cache/catalog/VladimirGorchakov/GooglePixel7Pro/whi/1-800x800.jpg',
            title: 'Pixel 2',
            description: 'The perfect phone for a clean Android experience',
            price: 876
        },
        {
            id: 8,
            src: 'https://i.allo.ua/media/catalog/product/cache/3/image/468x468/602f0fa2c1f0d1ba5e241f914e856ff9/h/u/huawei_mate_10_pro-bl_result_2.jpg',
            title: 'Huawei Mate 10 Pro',
            description: 'The most powerful Android device yet from Huawei',
            price: 799
        },
        {
            id: 9,
            src: 'https://fonarimarket.ru/_imag_images/115/45446-oneplus-6.jpg',
            title: 'Oneplus 6',
            description: 'The latest from a long line of affordable premium devices by Oneplus',
            price: 799
        }
    ])

    const [searchValue, setSearchValue] = useState('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }
    const filteredItems = products.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    const onClickDeleteButtonHandler = () => {
        setSearchValue('')
    }
    const onKeyEnterDown=(e:KeyboardEvent<HTMLInputElement>)=>{
        // if (e.key==='Enter'){
        //     onClickDeleteButtonHandler()
        // }
        setProducts( (e.key==='Enter')?filteredItems:products)
    }
    return (
        <div className="App">
            <h1><b>IT-Incubator store</b></h1>
            <input placeholder={'Search...'} value={searchValue} onChange={onChangeInputHandler} onKeyDown={onKeyEnterDown}/>
            {searchValue && <button onClick={onClickDeleteButtonHandler}>X</button>}
            {products.map(el => {
                return (
                    <ProductCard key={el.id}
                                 id={el.id}
                                 src={el.src}
                                 title={el.title}
                                 description={el.description}
                                 price={el.price}/>
                )
            })}
        </div>
    );
}

export default App;
