let coinList=[];


const apiCt="https://api.coincap.io/v2/assets";
const cryptoList = document.getElementById("list");
const countElem=document.getElementById("count")


const fetchCrypto = async () => {
    try{
        const response = await fetch(apiCt);
        const detail = await response.json();
        coinList= detail.data
        displayUser(coinList);
        conosle.log(coinList)
    }
    catch{
console.log(coinList);
    }
}
fetchCrypto();

const displayUser =(displayArg)=>{
    let str="";
    displayArg.forEach((coin)=>{
        str +=`
      
        <tr>
      <th scope="row">${coin?.rank}</th>
      <td>${coin?.id.toUpperCase() }</td>
      <td>${coin?.symbol}</td>
      <td>$${coin?.priceUsd}</td>
      <td>$${Math.round(coin?.volumeUsd24Hr)}</td>
      <td>$${Math.round(coin?.marketCapUsd)}</td>
      <td>${coin?.explorer}</td>
               
      </tr>
        `;
cryptoList.innerHTML=str;
countElem.innerText=displayArg.length;
console.log(str)

    })

}

document.getElementById("search-input").addEventListener("keyup",(e)=>{
    const {value}=e.target;
    //filter

    const filterCoin= coinList.filter((item)=>{
        // console.log(item);

        const coinName= (item.id).toLowerCase();
        return coinName.includes((value).toLowerCase());

    })
    console.log(e.target.value);
    displayUser(filterCoin);
})