import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public products = [
    {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Простой, вкусный и ароматный хлеб, приготовленный по рецептам классического пекарного искусства."
    },
    {
      name: "Круасан",
      img_url: "../../../assets/products/crossain-2-kvadr.jpg",
      tastes: ["Шоколад,", "Джем"],
      short_description: "Легкая, ароматная французская выпечка"
    },
    {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Домашний хлеб"
    },
    {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Домашний хлеб"
    },
    {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Домашний хлеб"
    },
    {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Домашний хлеб"
    },
    {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Домашний хлеб"
    },    {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Домашний хлеб"
    },    {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Домашний хлеб"
    },
    {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Домашний хлеб"
    }, {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Домашний хлеб"
    }, {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Домашний хлеб"
    }, {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Домашний хлеб"
    }, {
      name: "Домашний хлеб",
      img_url: "../../../assets/products/home_bread.jpg",
      short_description: "Домашний хлеб"
    },
  ]

}
