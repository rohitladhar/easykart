export interface IMobiles {
    mobile:{
        Company:Array<Array<string>>,
        Price:Array<Array<string>>,
        Seller:Array<Array<string>>,
        RAM:Array<Array<string>>,
        ROM:Array<Array<string>>,
        OS:Array<Array<string>>, 
        Category:Array<Array<string>>    
    }
}

export interface IClothes{
    clothes:{
        Company:Array<Array<string>>,
        Price:Array<Array<string>>,
        Seller:Array<Array<string>>,
        Size:Array<Array<string>>,
        Material:Array<Array<string>>,
        Color:Array<Array<string>>,
        Category:Array<Array<string>>
    }
}

export interface IGroceries{
    grocery:{
        Company:Array<Array<string>>,
        Price:Array<Array<string>>,
        Seller:Array<Array<string>>,
        Category:Array<Array<string>>
    }
}

export const Category:Array<IClothes|IGroceries|IMobiles>=[
    {
        mobile:{
            Company:[["typeOne"],["Realme", "Samsumg", "Oppo", "Apple", "Redmi"]],
            Price:[["typeThree"],["0-5000", "5000-9999", "10000-14999", "15000-19999", "20000-100000"]],
            Seller:[["typeOne"],["ABC","DEF","FGH"]],
            RAM:[["typeOne"],["3GB", "4GB", "6GB", "8GB"]],
            ROM:[["typeOne"],["32GB", "64GB", "128GB", "256GB", "512GB"]],
            OS:[["typeOne"],['Android',"IOS","Windows"]],
            Category:[["typeOne"],["Mobile"]],
        }
    },
    {
        grocery:{
            Company:[["typeOne"],["Tata","Relience","MDH","Birla"]],
            Price:[["typeThree"],["0-100", "100-250", "251-499", "500-999", "1000-5000"]],
            Seller:[["typeOne"],["ABC","DEF","FGH"]],
            Category:[["typeOne"],["Tea","Sugar","Refined","Mustard"]],
        }
    },
    {
        clothes:{
            Company:[["typeOne"],["Nike","Adidas","Reebok","Denim"]],
            Price:[["typeThree"],["0-500", "500-999", "1000-1499", "1500-1999", "2000-10000"]],
            Seller:[["typeOne"],["ABC","DEF","FGH"]],
            Size:[["typeTwo"],["S","M","L","XL","XXL","XXXL"]],
            Material:[["typeOne"],["Cotton","Woolen","Silk","Denim"]],
            Color:[["typeTwo"],["Blue","Green","White","Yellow","Orange","Red"]],
            Category:[["typeOne"],["T-Shirts","Pants","Skirts","Shirts"]]
        }
    }
] 