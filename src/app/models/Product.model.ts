//Objeto de producto con categoria
export interface Product
{
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    category: Category,
    imageUrl?: string,
    sku?: string
    rating?: number,
    discount? :number
    createdAt:Date
    updatedAt: Date
}

export interface Category{
    idC: number
    nameC: string
    descriptionC?: string
    imageUrlC?: string
    createdAtC: Date
    updatedAtC: Date
}

