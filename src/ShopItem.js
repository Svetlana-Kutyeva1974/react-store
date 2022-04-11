export default function ShopItemFunc({item}) {
/* 2 вариант
export default function ShopItemFunc(prop) {
  const {item} = prop;
*/
   return (
     <div class="main-content">
       <h2>{item.brand}</h2>
       <h1>{item.title}</h1>
       <h3>{item.description}</h3>
         <div class="description">
           {item.descriptionFull}
         </div>
         <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
         <div class="divider"></div>
         <div class="purchase-info">
            <div class="price">{item.currency}{item.price.toFixed(2)}</div>
            <button>Добавить в корзину</button>
         </div>
      </div>
   );
}

